'use server';

import { createClient } from '../utils/supabase/server';
import { redirect } from '../lib/navigation';
import { revalidatePath } from 'next/cache';

export async function createBooking(formData: FormData) {
  const supabase = await createClient();

  const roomId = formData.get('roomId') as string;
  const guestEmail = formData.get('email') as string;
  const checkIn = formData.get('checkIn') as string;
  const checkOut = formData.get('checkOut') as string;
  const locale = formData.get('locale') as string;

  // 1. Basic Validation
  if (!roomId || !guestEmail || !checkIn || !checkOut) {
    return { error: 'Missing required fields' };
  }

  // 2. Check Availability via RPC
  const { data: availableRooms, error: availError } = await supabase
    .rpc('check_availability', {
      p_start_date: checkIn,
      p_end_date: checkOut
    });

  if (availError) {
    console.error('Availability Check Failed', availError);
    return { error: 'System error checking availability' };
  }

  // Verify if the requested room is in the available list
  const isAvailable = availableRooms.some((r: any) => r.room_id === roomId);

  if (!isAvailable) {
    return { error: 'Room not available for these dates' };
  }

  // 3. Create Booking
  // Calculate total price (Mock logic - in real world fetch price from DB * nights)
  const totalAmount = 100; // Placeholder

  const { data: booking, error: bookingError } = await supabase
    .from('bookings')
    .insert({
      guest_email: guestEmail,
      check_in: checkIn,
      check_out: checkOut,
      status: 'confirmed',
      total_amount: totalAmount,
      locale_used: locale || 'es',
      currency: locale === 'es' ? 'ARS' : 'USD'
    })
    .select()
    .single();

  if (bookingError) {
    console.error('Booking Failed', bookingError);
    return { error: 'Failed to create booking' };
  }

  // 4. Satellite: Trigger WhatsApp Bot (Mock)
  // await fetch('https://api.whatsapp.com...', { ... })

  revalidatePath('/');
  redirect(`/success?bookingId=${booking.id}`);
}
