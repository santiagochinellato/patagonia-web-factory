import { getTranslations } from 'next-intl/server';
import HeroVibe from '../../components/HeroVibe';
import RoomCard from '../../components/RoomCard';
import Amenities from '../../components/Amenities';
import { createClient } from '../../utils/supabase/server';

const MOCK_ROOMS = [
  {
    id: '1',
    type: 'dorm' as const,
    base_price: 25,
    capacity: 4,
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2069',
    ],
    content: {
      es: {
        name: 'Dormitorio Social',
        desc: 'Conecta con viajeros de todo el mundo. Bunks cómodos y lockers amplios.',
      },
      en: {
        name: 'Social Dorm',
        desc: 'Connect with travelers from around the world. Comfy bunks and spacious lockers.',
      },
      pt: {
        name: 'Dormitório Social',
        desc: 'Conecte-se com viajantes de todo o mundo. Beliches confortáveis e armários espaçosos.',
      },
    },
  },
  {
    id: '2',
    type: 'private' as const,
    base_price: 120,
    capacity: 2,
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1974',
    ],
    content: {
      es: {
        name: 'Suite Lake View',
        desc: 'Despierta mirando el Nahuel Huapi. Baño privado y calefacción central.',
      },
      en: {
        name: 'Suite Lake View',
        desc: 'Wake up watching the Nahuel Huapi. Private bath and central heating.',
      },
      pt: {
        name: 'Suíte Vista Lago',
        desc: 'Acorde olhando para o Nahuel Huapi. Banheiro privativo e aquecimento central.',
      },
    },
  },
];

async function getRooms() {
  try {
    const supabase = await createClient();
    const { data: rooms } = await supabase
      .from('rooms')
      .select('*')
      .order('base_price', { ascending: true });

    if (rooms && rooms.length > 0) return rooms;
  } catch (error) {
    console.warn('Using Mock Data - Supabase not connected or empty');
  }
  return MOCK_ROOMS;
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('HomePage');
  const rooms = await getRooms();

  return (
    <main className="min-h-screen bg-stone-50">
      {/* 1. Hero Section */}
      <HeroVibe
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        cta={t('cta')}
      />

      {/* 2. Amenities Section */}
      <Amenities />

      {/* 3. Rooms Grid */}
      <section id="rooms" className="container mx-auto px-4 py-20 pb-32">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-teal-900 md:text-4xl">
            {locale === 'es'
              ? 'Nuestras Habitaciones'
              : locale === 'pt'
              ? 'Nossos Quartos'
              : 'Our Rooms'}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-orange-500/50" />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room as any} />
          ))}
        </div>
      </section>
    </main>
  );
}
