import { PageHeader, Section } from '@/components/ui/shared';
import { StaffProfileCard } from '@/components/StaffProfileCard';
import { DirectorProfileCard } from '@/components/DirectorProfileCard';
import { client } from '@/lib/sanity';
import { StaffMember } from '@/types/sanity';
import { STAFF_QUERY } from '@/lib/sanity-queries';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function StaffPage() {
  const { director, staff } = await client.fetch<{
    director: StaffMember;
    staff: StaffMember[];
  }>(STAFF_QUERY);

  return (
    <div className="bg-white min-h-screen">
      <Section>
        <PageHeader
          title="Nuestro Equipo Profesional"
          subtitle="Conocé a los especialistas que cuidan de tu salud con dedicación y compromiso."
        />

        {/* Featured Director */}
        {director && (
          <div className="mb-20">
            <DirectorProfileCard director={director} />
          </div>
        )}

        {/* Staff Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff?.map((member) => (
            <StaffProfileCard key={member._id} staff={member} />
          ))}
        </div>
      </Section>
    </div>
  );
}
