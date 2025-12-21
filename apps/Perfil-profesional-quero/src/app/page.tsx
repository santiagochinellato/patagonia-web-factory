import { client, urlFor } from '../lib/sanity';
import { GET_PROFESSIONAL_PROFILE } from '@patagonia-web-factory/content';
import { ProfessionalProfile } from '@patagonia-web-factory/cpm-sanity';
import { HeroWrapper } from '../components/HeroWrapper';
import { FeatureGrid } from '../components/FeatureGrid';
import { StatsComponent } from '../components/StatsComponent';
import { ClientFloatingCTA } from '../components/ClientFloatingCTA';

export const revalidate = 60; // Revalidate every 60 seconds

// Fallback Data Imports
// import personalInfo from '../../data/informacionPersonal.json';
import heroData from '../../data/PropuestaDeValor.json';
// import experienceData from '../../data/experienciaLaboral.json';
import educationData from '../../data/FormacionAcademica.json';
// import authorityData from '../../data/autoridadYRespaldoInstitucional.json';
import publicationsData from '../../data/publicacionesCientificas.json';
import awardsData from '../../data/PremiosYReconocimientos.json';
import servicesData from '../../data/servicios.json';
// import ctaData from '../../data/callToAction.json'; // If needed

export default async function Index() {
  let data: ProfessionalProfile = await client.fetch(GET_PROFESSIONAL_PROFILE);

  if (data) {
    console.log('✅ DATA FETCHED FROM SANITY');
  }

  // Fallback Logic
  if (!data) {
    console.log('⚠️ DATA NOT FOUND IN SANITY, FALLING BACK TO JSON');
    console.warn('Sanity data not found, falling back to local JSON.');

    // Construct ProfessionalProfile object from JSONs
    data = {
      _type: 'professional_profile',
      heroSection: {
        tagline: heroData.heroSection.tagline,
        shortDescription: heroData.heroSection.descripcionCorta,
        cta: {
          buttonText: heroData.heroSection.cta.textoBoton,
          whatsappLink: heroData.heroSection.cta.whatsappLink,
        },
      },
      services: {
        generalDescription: servicesData.servicios.descripcionGeneral,
        areas: servicesData.servicios.areas.map((area: any) => ({
          id: area.id,
          title: area.titulo,
          subtitle: area.subtitulo,
          description: area.descripcion,
          icon: area.icono,
          color: area.color,
          specificServices: area.serviciosEspecificos,
          benefits: area.beneficios,
        })),
      },
      scientificPublications: {
        summary: {
          total: publicationsData.publicacionesCientificas.resumen.total,
        },
        articles: publicationsData.publicacionesCientificas.articulos.map(
          (art: any) => ({
            title: art.titulo,
            year: art.anio,
          })
        ),
      },
      awardsAndRecognitions: {
        total: awardsData.premiosReconocimientos.total,
        awards: awardsData.premiosReconocimientos.premios.map((a: any) => ({
          award: a.premio,
          year: a.anio,
          highlighted: a.destacado,
        })),
      },
      education: {
        formalEducation: educationData.formacionAcademica.educacionFormal.map(
          (edu: any) => ({
            level: edu.nivel,
            title: edu.titulo,
            institution: edu.institucion,
            period: edu.periodo,
            finalGrade: edu.notaFinal, // or promedioAcademico which varies
            highlighted: edu.destacado,
            icon: edu.icono,
          })
        ),
      },
      experience: {
        currentPositions: [], // experienceData mapping is complex, keeping empty for now if not critical
        pastPositions: [],
      },
    } as unknown as ProfessionalProfile;
  }

  if (!data) {
    return <div>Loading...</div>; // Or generic fallback
  }

  // --- Curating Content ---

  // 1. Publications (Curating only 2025 as requested)
  // const curatedPublications =
  //   data.scientificPublications?.articles?.filter((a) => a.year === 2025) || [];

  // 2. Awards (Highlighted)
  // const highlightedAwards =
  //   data.awardsAndRecognitions?.awards?.filter((a) => a.highlighted) || [];
  // 3. Stats for "Trayectoria en Números"
  const stats = [
    {
      value: data.scientificPublications?.summary?.total || '30+',
      label: 'Publicaciones Científicas',
    },
    {
      value: data.awardsAndRecognitions?.total || '10+',
      label: 'Premios y Reconocimientos',
    },
    { value: '15+', label: 'Años de Experiencia' }, // Static or calculated from experience
    {
      value: data.education?.formalEducation?.length || '5+',
      label: 'Títulos Académicos',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroWrapper
        title={data.heroSection?.tagline || 'Dr. Martín Quero'}
        subtitle={data.heroSection?.shortDescription || ''}
        ctaText={data.heroSection?.cta?.buttonText || 'Contactar'}
        ctaLink={data.heroSection?.cta?.whatsappLink}
        profileImage={
          data.heroSection?.profilePhoto
            ? urlFor(data.heroSection.profilePhoto).url()
            : undefined
        }
      />

      {/* Value Trilogy (Feature Grid) */}
      {data.services && (
        <FeatureGrid
          services={data.services.areas || []}
          title="Trilogía de Valor"
          subtitle={data.services.generalDescription}
        />
      )}

      {/* Stats Section */}
      <StatsComponent stats={stats} title="Trayectoria en Números" />

      {/* Floating CTA (WhatsApp) */}
      <div className="fixed bottom-0 right-0 p-6 z-50">
        <ClientFloatingCTA />
      </div>
    </main>
  );
}
