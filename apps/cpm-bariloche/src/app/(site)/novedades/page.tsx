import { PageHeader, Section } from '@/components/ui/shared';
import { Calendar, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { client } from '@/lib/sanity';
import { Novedad } from '@/types/sanity';
import { NEWS_QUERY } from '@/lib/sanity-queries';

export const revalidate = 300; // Revalidate every 5 minutes

export default async function NovedadesPage() {
  const news = await client.fetch<Novedad[]>(NEWS_QUERY);

  return (
    <div className="bg-white min-h-screen">
      <Section>
        <PageHeader
          title="Novedades y Comunicados"
          subtitle="Enterate de las últimas noticias, campañas de salud y avisos importantes del centro."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Link
              key={item._id}
              href={`/novedades/${item.slug.current}`}
              className="group h-full"
            >
              <article
                className={`
                        h-full p-8 rounded-3xl border transition-all duration-300 flex flex-col
                        ${
                          item.important
                            ? 'bg-red-50 border-red-100 hover:shadow-lg hover:shadow-red-50'
                            : 'bg-white border-slate-100 hover:shadow-xl hover:shadow-blue-50 hover:-translate-y-1'
                        }
                    `}
              >
                <div className="flex justify-between items-start mb-6">
                  <span
                    className={`
                                px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                                ${
                                  item.important
                                    ? 'bg-red-500 text-white'
                                    : 'bg-brand-blue text-white'
                                }
                            `}
                  >
                    {item.categoria}
                  </span>
                  <span className="flex items-center text-xs font-bold text-gray-400 gap-1">
                    <Calendar size={14} /> {item.fecha}
                  </span>
                </div>

                <h3
                  className={`
                            text-xl font-heading font-bold mb-4 leading-tight
                            ${
                              item.important
                                ? 'text-red-600'
                                : 'text-brand-dark group-hover:text-brand-blue'
                            }
                        `}
                >
                  {item.titulo}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {item.excerpt}
                </p>

                <div className="pt-6 border-t border-slate-100/50 mt-auto">
                  <span
                    className={`text-sm font-bold flex items-center gap-2 ${
                      item.important ? 'text-red-500' : 'text-brand-pink'
                    }`}
                  >
                    {item.important && <AlertTriangle size={16} />}
                    Leer más
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
