import { PageHeader, Section } from '@/components/ui/shared';
import { client } from '@/lib/sanity';
import { ABOUT_QUERY } from '@/lib/sanity-queries';
import { CheckCircle } from 'lucide-react';

export const revalidate = 300; // Revalidate every 5 minutes

export default async function SobreElCpmPage() {
  const settings = await client.fetch(ABOUT_QUERY);
  const { historia, filosofia } = settings?.institucional || {};

  // Fallback defaults to prevent crash if data is missing
  const historyEvents = historia || [
    {
      year: '2002',
      titulo: 'Fundación del CPM',
      descripcion:
        'En Noviembre abrimos nuestras puertas con un solo consultorio y recepción. El Dr. Schnaiderman, la Dra. Rosales y la Dra. Giannini iniciaron este proyecto con el espíritu del consultorio del barrio, ofreciendo atención personalizada en un momento donde no había oferta de consultorios en los kilómetros.',
    },
    {
      year: '2005',
      titulo: 'Primera Expansión',
      descripcion:
        'Crecimos a cuatro consultorios acompañando el desarrollo de nuestra ciudad. Se sumaron las Dras. Comar y Ferrari, seguidas por el Dr. Risso y la Dra. Eisner. Cada profesional aportó su dedicación y profesionalismo, formando un verdadero equipo de trabajo.',
    },
    {
      year: '2010s',
      titulo: 'Consolidación del Equipo',
      descripcion:
        'En los años siguientes se incorporaron las Dras. Bailac y Catoyra, fortaleciendo nuestro equipo pediátrico. Muchos años en nuestra sede de Lonquimay, consolidamos nuestra presencia como referente en salud infantil.',
    },
    {
      year: 'Hoy',
      titulo: 'Av. Pioneros - Un Salto de Calidad',
      descripcion:
        'Nos trasladamos a Av. Pioneros con nuevos especialistas, más servicios, crecimiento del Vacunatorio y más horas de atención. Nos mueve el mismo espíritu con el que iniciamos hace más de veinte años: ser el consultorio del barrio donde vean una cara amable y se sientan bien atendidos.',
    },
  ];
  const philosophyText =
    filosofia ||
    'En CPM Bariloche entendemos que la salud de un niño es el reflejo del bienestar de su entorno. Por eso, no solo tratamos síntomas, acompañamos el crecimiento y desarrollo de cada paciente con una mirada humana, empática y profesional.';

  return (
    <div className="bg-white min-h-screen">
      <Section>
        <PageHeader
          title="Sobre Nosotros"
          subtitle="Más de 20 años cuidando la salud de las familias de Bariloche con compromiso y calidez profesional."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Philosophy / Intro */}
          <div className="flex flex-col gap-6">
            <span className="text-brand-pink font-bold tracking-widest text-xs uppercase  block">
              NUESTRA FILOSOFÍA
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-dark  leading-tight">
              Una mirada integral de la{' '}
              <span className="text-brand-blue">salud familiar</span>.
            </h2>
            <p className="text-lg text-text-muted leading-relaxed ">
              {philosophyText}
            </p>
            <div className="flex flex-col gap-4">
              {[
                'Atención centrada en el paciente',
                'Equipo multidisciplinario',
                'Espacios adaptados para niños',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span className="font-bold text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <img
              src="/images/cpm-living.webp"
              alt="Recepción CPM"
              className="w-full max-w-[500px]  ratio-16/9 rounded-2xl"
            />
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-slate-100 pl-8 ml-4 md:ml-0 space-y-12">
            {historyEvents.map((item: any, idx: number) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-blue border-4 border-white shadow-md"></span>
                <span className="block text-4xl font-black text-slate-200 mb-2">
                  {item.year}
                </span>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">
                  {item.titulo}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
