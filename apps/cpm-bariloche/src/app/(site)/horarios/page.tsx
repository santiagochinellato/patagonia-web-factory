import { client } from '@/lib/sanity';
import { Schedule } from '@/types/sanity';
import { SCHEDULE_QUERY, ABOUT_QUERY } from '@/lib/sanity-queries';
import HorariosClient from '@/components/HorariosClient';

export const revalidate = 300; // Revalidate every 5 minutes (reduced requests)

export default async function HorariosPage() {
  const scheduleData = await client.fetch<Schedule[]>(SCHEDULE_QUERY);
  const settings = await client.fetch(ABOUT_QUERY);
  const vaccinationText = settings?.institucional?.vacunatorio;

  return (
    <HorariosClient
      scheduleData={scheduleData}
      vaccinationText={vaccinationText}
    />
  );
}
