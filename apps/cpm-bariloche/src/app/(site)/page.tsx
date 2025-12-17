import { client } from '@/lib/sanity';
import { Novedad, StaffMember } from '@/types/sanity';
import HomeClient from '@/components/HomeClient';
import { HOME_QUERY } from '@/lib/sanity-queries';

export const revalidate = 60;

export default async function Index() {
  const { latestNews, staffPreview, hero } = await client.fetch<{
    latestNews: Novedad[];
    staffPreview: StaffMember[];
    hero: any;
  }>(HOME_QUERY);

  return (
    <HomeClient
      latestNews={latestNews}
      staffPreview={staffPreview}
      hero={hero}
    />
  );
}
