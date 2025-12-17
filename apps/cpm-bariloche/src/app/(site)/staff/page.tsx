import { PageHeader, Section } from '@/components/ui/shared';
import { StaffProfileCard } from '@/components/StaffProfileCard';
import { Mail, GraduationCap } from 'lucide-react';
import { client, urlFor } from '@/lib/sanity';
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
            <div className="bg-surface-light rounded-[3rem] p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl bg-white relative">
                  {director.foto ? (
                    <img
                      src={urlFor(director.foto).width(600).height(600).url()}
                      alt={director.nombre}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-brand-blue flex items-center justify-center text-white text-6xl font-black">
                      DS
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                  {director.cargo || 'Director Médico'}
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark mb-4">
                  {director.nombre}
                </h2>
                {/* Simplified bio rendering for now (taking first block if array, or raw text if string) */}
                <p className="text-lg text-text-muted leading-relaxed mb-8">
                  {Array.isArray(director.bio)
                    ? (director.bio[0]?.children as any)?.[0]?.text
                    : 'Especialista en Pediatría con amplia trayectoria.'}
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-brand-blue flex items-center gap-2 mb-3">
                      <GraduationCap size={20} /> Formación
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {director.formacion?.map((item, i) => (
                        <li key={i}>
                          • {item.titulo}{' '}
                          {item.institucion ? `(${item.institucion})` : ''}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-center">
                    <h4 className="font-bold text-brand-blue flex items-center gap-2 mb-3">
                      <Mail size={20} /> Contacto
                    </h4>
                    <p className="text-sm text-gray-600">
                      diego@cpmbariloche.com.ar
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
