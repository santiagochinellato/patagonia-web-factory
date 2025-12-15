import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  try {
    const { record } = await req.json();
    if (!record) {
        return new Response("No record payload found", { status: 400 });
    }

    const locale = record.locale_used || 'es'; // 'es', 'en', 'pt'
    
    // 1. Fetch Template based on locale
    const templates: Record<string, string> = {
      pt: `Olá! Sua reserva em Bariloche está confirmada. Total: ${record.total_amount} ${record.currency || 'USD'}`,
      en: `Hi! Your spot in Patagonia is secured. Total: ${record.total_amount} ${record.currency || 'USD'}`,
      es: `¡Hola! Tu cama en el paraíso te espera. Total: ${record.total_amount} ${record.currency || 'USD'}`
    };

    const message = templates[locale] || templates['es'];

    // 2. Mock Send (e.g., WhatsApp/Email)
    // Note: 'phone' column needs to be added to 'bookings' table for SMS/WhatsApp.
    // Currently using 'guest_email'.
    console.log(`[Automated Message] To: ${record.guest_email} | Phone: ${record.phone || 'N/A'}`);
    console.log(`[Content]: ${message}`);

    // Integration Point for Twilio / SendGrid / Meta API
    // await sendProvider(record.guest_email, message);

    return new Response(JSON.stringify({ success: true, message: "Confirmation sent" }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
});
