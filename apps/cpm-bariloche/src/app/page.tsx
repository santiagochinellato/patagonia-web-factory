import { ScheduleTabs } from '../components/ScheduleTabs';
import { StaffProfileCard } from '../components/StaffProfileCard';
import { AppDownloadBanner } from '../components/AppDownloadBanner';
import { CurvedSection } from '../components/CurvedSection';

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pb-20 pt-10 md:pt-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-light text-brand-blue font-bold text-xs tracking-widest mb-4">
            BARILOCHE
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-brand-blue mb-6 tracking-tight font-display max-w-4xl leading-tight">
            Tu Tranquilidad en{' '}
            <span className="text-action-coral">Bariloche</span>
            <span className="block text-2xl md:text-3xl font-medium text-gray-500 mt-4 font-sans">
              Pediatría y Medicina General
            </span>
          </h1>
          <p className="text-lg text-gray-base mb-8 max-w-2xl leading-relaxed">
            Más de 20 años de historia cuidando lo más importante. Atención
            personalizada, especialistas de confianza y un equipo que te conoce.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <button className="bg-action-coral text-white px-8 py-4 rounded-full font-bold text-lg shadow-smooth hover:bg-orange-600 transition-all transform hover:-translate-y-1 hover:shadow-xl">
              PEDIR TURNO
            </button>
            <button className="px-8 py-4 rounded-full font-bold text-lg text-brand-blue border-2 border-transparent hover:bg-brand-light transition-all">
              Ver Especialidades
            </button>
          </div>
        </div>

        {/* Decorative subtle element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-orange-50 rounded-full blur-3xl opacity-50 z-0"></div>
      </section>

      {/* Schedule Section with Organic Curve */}
      <CurvedSection
        bgClass="bg-brand-light"
        curvePosition="top"
        curveColor="#ffffff"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 font-display">
              Horarios de Atención
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Organizamos nuestros horarios para estar siempre que nos
              necesites.
              <br className="hidden md:block" />
              Contamos con{' '}
              <strong className="text-action-coral">
                Demanda Espontánea
              </strong>{' '}
              para urgencias leves.
            </p>
          </div>
          <ScheduleTabs />
        </div>
      </CurvedSection>

      {/* Staff Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-action-coral font-bold tracking-widest text-sm uppercase mb-2 block">
                Equipo Médico
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue font-display">
                Nuestro Staff
              </h2>
            </div>
            <a
              href="/staff"
              className="text-brand-blue font-bold hover:text-action-coral transition-colors flex items-center group"
            >
              Ver todos los profesionales
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaffProfileCard
              staff={{
                name: 'Dr. Diego Schnaiderman',
                specialty: 'Pediatría',
                matricula: 'MP 1234',
                slug: 'diego-schnaiderman',
              }}
            />
            <StaffProfileCard
              staff={{
                name: 'Dra. Claudia Rosales',
                specialty: 'Medicina General',
                matricula: 'MP 5678',
                slug: 'claudia-rosales',
              }}
            />
            <StaffProfileCard
              staff={{
                name: 'Dr. Fernando Risso',
                specialty: 'Pediatría',
                matricula: 'MP 9012',
                slug: 'fernando-risso',
              }}
            />
            <StaffProfileCard
              staff={{
                name: 'Dra. Gabriela Giannini',
                specialty: 'Pediatría',
                slug: 'gabriela-giannini',
              }}
            />
          </div>
        </div>
      </section>

      {/* App Banner with Bottom Curve */}
      <CurvedSection
        bgClass="bg-brand-light"
        curvePosition="top"
        curveColor="#ffffff"
      >
        <div className="container mx-auto px-4">
          <AppDownloadBanner />
        </div>
      </CurvedSection>
    </div>
  );
}
