import { createClient } from '@sanity/client';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables (optional if running via CLI with vars)
// dotenv.config();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '87ka7bt2';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN; // Will be passed via command line

if (!token) {
  console.error('Error: SANITY_TOKEN is missing.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: '2024-12-20',
});

// Paths to JSON data
const DATA_DIR = path.join(__dirname, '../apps/Perfil-profesional-quero/data');

function readJson(filename: string) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: File not found: ${filename}`);
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

async function migrate() {
  console.log('Starting migration for Dr. Quero Profile...');

  // Read JSON data
  const personalInfo = readJson('informacionPersonal.json')?.datosPersonales;
  const heroData = readJson('PropuestaDeValor.json')?.heroSection;
  const experienceData = readJson('experienciaLaboral.json')?.experienciaLaboral;
  const educationData = readJson('FormacionAcademica.json')?.formacionAcademica;
  const authorityData = readJson('autoridadYRespaldoInstitucional.json')?.autoridadInstitucional;
  const publicationsData = readJson('publicacionesCientificas.json')?.publicacionesCientificas;
  const awardsData = readJson('PremiosYReconocimientos.json')?.premiosReconocimientos;
  const servicesData = readJson('servicios.json')?.servicios;
  const navData = readJson('estructuraDeNavigacion.json')?.estructuraDeNavigacion;
  const ctaData = readJson('callToAction.json')?.callToAction;

  // Construct the Sanity document
  const doc = {
    _id: 'professional_profile_singleton', // Correct Singleton ID
    _type: 'professional_profile',
    title: 'Perfil Profesional (Dr. Quero)',
    
    // 1. Personal Info
    personalInfo: personalInfo ? {
      fullName: personalInfo.nombreCompleto,
      preferredName: personalInfo.nombrePreferido,
      mainTitle: personalInfo.tituloPrincipal,
      subtitles: personalInfo.subtitulos,
      dni: personalInfo.dni,
      birthDate: personalInfo.fechaNacimiento,
      age: personalInfo.edad,
      nationality: personalInfo.nacionalidad,
      location: personalInfo.ubicacion ? {
          city: personalInfo.ubicacion.ciudad,
          province: personalInfo.ubicacion.provincia,
          country: personalInfo.ubicacion.pais,
          postalCode: personalInfo.ubicacion.codigoPostal
      } : undefined,
      contact: personalInfo.contacto ? {
          phone: personalInfo.contacto.telefono,
          emailMain: personalInfo.contacto.emailPrincipal,
          emailUniversity: personalInfo.contacto.emailUniversitario,
          linkedin: personalInfo.contacto.linkedin
      }: undefined
    } : undefined,

    // 2. Hero Section
    heroSection: heroData ? {
        tagline: heroData.tagline,
        shortDescription: heroData.descripcionCorta,
        extendedDescription: heroData.descripcionExtendida,
        // profilePhoto: Skipping image upload for now
        cta: heroData.cta ? {
            buttonText: heroData.cta.textoBoton,
            whatsappLink: heroData.cta.whatsappLink,
            defaultMessage: heroData.cta.mensajePredeterminado
        } : undefined
    } : undefined,

    // 3. Experience
    experience: experienceData ? {
        currentPositions: experienceData.posicionesActuales?.map((pos: any) => ({
            _key: Math.random().toString(36).substring(7),
            position: pos.cargo,
            institution: pos.institucion,
            area: pos.area,
            chair: pos.catedra,
            period: pos.periodo,
            description: pos.descripcion,
            responsibilities: pos.responsabilidades,
            // reference: pos.referencia, // Mapping object directly if structure matches, otherwise map fields
            type: pos.tipo,
            sector: pos.sector
        })),
        pastPositions: experienceData.posicionesAnteriores?.map((pos: any) => ({
             _key: Math.random().toString(36).substring(7),
             position: pos.cargo,
             institution: pos.institucion,
             period: pos.periodo,
             closureReason: pos.motivoCierre,
             type: pos.tipo,
             sector: pos.sector,
             carrera: pos.carrera,
             catedra: pos.catedra,
             responsibilities: pos.responsabilidades,
             achievements: pos.logros
        }))
    } : undefined,

    // 4. Education
    education: educationData ? {
        formalEducation: educationData.educacionFormal?.map((edu: any) => ({
            _key: Math.random().toString(36).substring(7),
            level: edu.nivel,
            title: edu.titulo,
            institution: edu.institucion,
            faculty: edu.facultad,
            period: edu.periodo,
            finalGrade: edu.notaFinal || edu.promedioAcademico,
            distinction: edu.distincion,
            highlighted: edu.destacado,
            icon: edu.icono
        })),
        complementaryEducation: educationData.titulacionesComplementarias?.map((edu: any) => ({
            _key: Math.random().toString(36).substring(7),
            title: edu.titulo,
            institution: edu.institucion,
            period: edu.periodo,
            endorsedBy: edu.avaladoPor,
            highlighted: edu.destacado,
            icon: edu.icono
        }))
    } : undefined,

    // 5. Authority
    authority: authorityData ? {
        title: authorityData.tituloSeccion,
        subtitle: authorityData.subtituloSeccion,
        institutions: authorityData.instituciones?.map((inst: any) => ({
             _key: Math.random().toString(36).substring(7),
             name: inst.nombre,
             fullName: inst.nombreCompleto,
             type: inst.tipo,
             description: inst.descripcion,
             link: inst.vinculo
        })),
        memberships: authorityData.membresias?.map((mem: any) => ({
             _key: Math.random().toString(36).substring(7),
             organization: mem.organizacion,
             type: mem.tipoMembresia,
             since: mem.desde
        }))
    } : undefined,

    // 6. Publications
    scientificPublications: publicationsData ? {
        summary: {
            total: publicationsData.resumen?.total,
            indexedJournals: publicationsData.resumen?.revistasIndexadas,
            impactFactor: publicationsData.resumen?.factorImpacto
        },
        articles: publicationsData.articulos?.map((art: any) => ({
            _key: Math.random().toString(36).substring(7),
            authors: art.autores,
            title: art.titulo,
            journal: art.revista,
            volume: art.volumen,
            pages: art.paginas,
            year: art.anio,
            doi: art.doi,
            category: art.categoria
        }))
    } : undefined,

    // 7. Awards
    awardsAndRecognitions: awardsData ? {
        total: awardsData.total,
        awards: awardsData.premios?.map((award: any) => ({
            _key: Math.random().toString(36).substring(7),
            award: award.premio,
            event: award.evento,
            place: award.lugar,
            year: award.anio,
            institution: award.institucion,
            description: award.descripcion,
            type: award.tipo,
            highlighted: award.destacado
        })),
        grants: awardsData.becas?.map((grant: any) => ({
            _key: Math.random().toString(36).substring(7),
            grant: grant.beca,
            project: grant.proyecto,
            period: grant.periodo,
            director: grant.directora || grant.director,
            codirector: grant.codirector,
            highlighted: grant.destacado,
            description: grant.descripcion
        }))
    } : undefined,

    // 8. Services
    services: servicesData ? {
        generalDescription: servicesData.descripcionGeneral,
        areas: servicesData.areas?.map((area: any) => ({
            _key: Math.random().toString(36).substring(7),
            id: area.id,
            title: area.titulo,
            subtitle: area.subtitulo,
            description: area.descripcion,
            icon: area.icono,
            color: area.color,
            specificServices: area.serviciosEspecificos,
            benefits: area.beneficios
        }))
    } : undefined,

    // 9. CTA Section
    ctaSection: ctaData ? {
      primary: ctaData.principal ? {
        title: ctaData.principal.titulo,
        subtitle: ctaData.principal.subtitulo,
        mainButton: ctaData.principal.botonPrincipal ? {
          text: ctaData.principal.botonPrincipal.texto,
          type: ctaData.principal.botonPrincipal.tipo,
          link: ctaData.principal.botonPrincipal.link,
          message: ctaData.principal.botonPrincipal.mensaje
        } : undefined,
        secondaryButton: ctaData.principal.botonSecundario ? {
          text: ctaData.principal.botonSecundario.texto,
          type: ctaData.principal.botonSecundario.tipo
          // File upload skipped for now
        } : undefined
      } : undefined,
      secondary: ctaData.secundario ? {
        title: ctaData.secundario.titulo,
        button: ctaData.secundario.boton ? {
          text: ctaData.secundario.boton.texto,
          link: ctaData.secundario.boton.link
        } : undefined
      } : undefined
    }: undefined,

    // 10. Navigation
    navigation: navData ? {
      menu: navData.menuPrincipal?.map((item: any) => ({
        _key: Math.random().toString(36).substring(7),
        id: item.id,
        label: item.etiqueta,
        href: item.href,
        order: item.orden
      })),
      footer: navData.footer ? {
        columns: navData.footer.columnas?.map((col: any) => ({
           _key: Math.random().toString(36).substring(7),
           title: col.titulo,
           links: col.enlaces?.map((link: any) => ({
             _key: Math.random().toString(36).substring(7),
             text: link.texto,
             href: link.enlace
           }))
        })),
        copyright: navData.footer.copyright,
        legalNotice: navData.footer.avisoLegal
      }: undefined
    } : undefined

  };

  try {
    const result = await client.createOrReplace(doc);
    console.log('Successfully created/replaced document:', result._id);
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrate();
