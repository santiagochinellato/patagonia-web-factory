'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, MapPin, Syringe } from 'lucide-react';
import { StaffProfileCard } from './StaffProfileCard';
import { AppDownloadBanner } from './AppDownloadBanner';
import { ServicesGrid } from './ServicesGrid';
import { Section } from './ui/shared';
import { Novedad, StaffMember } from '../types/sanity';
import { urlFor } from '../lib/sanity';

const MotionLink = motion(Link);

interface HomeClientProps {
  latestNews: Novedad[];
  staffPreview: StaffMember[];
  hero?: {
    titulo?: string;
    bajada?: string;
    imageHero?: any;
  };
}

export default function HomeClient({
  latestNews,
  staffPreview,
  hero,
}: HomeClientProps) {
  const heroImageUrl = hero?.imageHero
    ? urlFor(hero.imageHero).width(800).height(1000).url()
    : '/images/hero-cpm.webp';

  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 lg:pt-18 lg:pb-48 bg-white overflow-visible flex flex-col justify-center items-center gap-16">
        <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block py-2 px-4 rounded-full bg-blue-50 text-brand-blue font-bold text-xs tracking-widest mb-6 border border-blue-100">
              CENTRO PEDIÁTRICO MELIPAL
            </span>
            <h1 className="text-4xl lg:text-6xl font-heading font-extrabold text-text-main mb-6 leading-tight tracking-tight">
              {hero?.titulo ? (
                hero.titulo
              ) : (
                <>
                  Tu salud en{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-pink">
                    buenas manos
                  </span>
                  ,
                  <br />
                  cerca de casa.
                </>
              )}
            </h1>
            <p className="text-lg text-text-muted mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
              {hero?.bajada ||
                'Atención médica integral con más de 20 años de trayectoria. Pediatría, Medicina General y Especialidades en un ambiente cálido y moderno.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://docturno.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 shadow-xl shadow-pink-200"
              >
                SACAR TURNO
                <ArrowRight size={20} />
              </a>
              <Link href="/staff" className="btn-secondary">
                Consultar profesionales
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-8 text-sm text-text-muted font-bold opacity-80">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse"></span>
                Obras Sociales
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                Particulares
              </span>
            </div>
          </motion.div>

          {/* Hero Image / Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center "
          >
            <div className="relative max-w-[80%] rounded-[3rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 border-4 border-white">
              <Image
                src={heroImageUrl}
                alt={
                  hero?.imageHero?.alt ||
                  'Doctora atendiendo niño en CPM Bariloche'
                }
                width={800}
                height={1000}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-pink/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
          </motion.div>
        </div>

        {/* Floating Service Cards (Overlapping Hero Bottom) */}
        <div className="container mx-auto px-4 relative z-20 mt-16 lg:-mt-16 lg:translate-y-1/2">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Vacunatorio',
                icon: <Syringe className="w-6 h-6" />,
                desc: 'Calendario oficial completo',
                href: '/sobre-el-cpm#vacunatorio',
              },
              {
                title: 'App CPM',
                icon: <MapPin className="w-6 h-6" />,
                desc: 'Gestioná tus turnos fácil',
                href: '#app-banner',
              },
              {
                title: 'Horarios',
                icon: <Clock className="w-6 h-6" />,
                desc: 'Lunes a Sábados 8 a 20hs',
                href: '/horarios',
              },
            ].map((card, idx) => (
              <MotionLink
                key={idx}
                href={card.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-xl shadow-brand-blue/5 border border-slate-50 flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-12 h-12 bg-surface-light rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-dark group-hover:text-brand-blue transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-muted">{card.desc}</p>
                </div>
              </MotionLink>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <Section bg="light" className="pt-32 rounded-t-[3rem]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-black text-brand-dark mb-4">
            Nuestras Especialidades
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Contamos con un equipo multidisciplinario para cuidar de vos y tu
            familia en todas las etapas.
          </p>
        </div>
        <ServicesGrid />
      </Section>

      {/* Latest News Banner */}
      <Section className="py-12 border-y border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-brand-pink font-bold tracking-widest text-xs uppercase mb-2 block">
              NOVEDADES
            </span>
            <h2 className="text-3xl font-heading font-black text-brand-dark">
              Últimas Noticias
            </h2>
          </div>
          <Link
            href="/novedades"
            className="text-brand-blue font-bold hover:text-brand-pink transition-colors flex items-center group"
          >
            Ver todas
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {latestNews.map((item) => (
            <Link
              key={item._id}
              href={`/novedades/${item.slug.current}`}
              className="group"
            >
              <article
                className={`h-full p-8 rounded-3xl border transition-all duration-300 ${
                  item.important
                    ? 'bg-red-50 border-red-100'
                    : 'bg-surface-light border-slate-50 hover:bg-white hover:shadow-xl'
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      item.important
                        ? 'bg-red-500 text-white'
                        : 'bg-brand-blue text-white'
                    }`}
                  >
                    {item.categoria}
                  </span>
                  <span className="flex items-center text-xs font-bold text-gray-400 gap-1">
                    <Calendar size={14} /> {item.fecha}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">
                  {item.titulo}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </Section>

      {/* Staff Preview */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-brand-pink font-bold tracking-widest text-xs uppercase mb-3 block">
              EQUIPO PROFESIONAL
            </span>
            <h2 className="text-3xl font-heading font-black text-brand-dark">
              Conocé a nuestros médicos
            </h2>
          </div>
          <Link
            href="/staff"
            className="text-brand-blue font-bold hover:text-brand-pink transition-colors flex items-center group"
          >
            Ver todos
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {staffPreview.map((staff) => (
            <StaffProfileCard key={staff._id} staff={staff} />
          ))}
        </div>
      </Section>

      {/* App Banner */}
      <Section id="app-banner" bg="light" className="rounded-t-[3rem]">
        <AppDownloadBanner />
      </Section>
    </div>
  );
}
