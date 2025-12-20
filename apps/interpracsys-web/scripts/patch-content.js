
const { createClient } = require('next-sanity');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'z3higspz';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2024-12-20';
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('Error: SANITY_API_TOKEN is missing.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

async function patchContent() {
  console.log('Starting content patch...');

  // 1. Data to patch
  const specializedSolutions = {
    title: 'Soluciones Especializadas para Todo Tipo de Laboratorio',
    cards: [
      {
        _key: 'vet',
        title: 'Veterinaria',
        description: 'Gestión optimizada para pacientes no humanos.',
        icon: 'PawPrint'
      },
      {
        _key: 'bromo',
        title: 'Bromatología',
        description: 'Control de calidad y seguridad alimentaria.',
        icon: 'FlaskConical'
      },
      {
        _key: 'amb',
        title: 'Ambiental',
        description: 'Análisis de aguas, suelos y efluentes.',
        icon: 'Leaf'
      }
    ]
  };

  const contactSection = {
    badge: 'HABLEMOS',
    titlePart1: 'Estamos para',
    titleHighlight: 'Potenciarte',
    description: 'Solicita tu demo hoy mismo o contáctanos para resolver cualquier duda. Nuestro equipo de expertos está listo para acompañarte.',
    phoneLabel: 'Teléfono / WhatsApp',
    emailLabel: 'Email',
    followUsLabel: 'Síguenos',
    formNameLabel: 'Nombre',
    formNamePlaceholder: 'Tu nombre',
    formOrgLabel: 'Laboratorio',
    formOrgPlaceholder: 'Nombre del centro',
    formEmailLabel: 'Email',
    formEmailPlaceholder: 'tu@email.com',
    formMessageLabel: 'Mensaje',
    formMessagePlaceholder: '¿En qué podemos ayudarte?',
    formButtonText: 'Enviar Consulta'
  };

  const footer = {
    exploreTitle: 'Explorar',
    legalTitle: 'Legales',
    contactTitle: 'Contacto',
    copyrightText: 'InterPracsys. Todos los derechos reservados.',
    developedByText: 'Creado por',
    developerName: 'Santiago Chinellato',
    developerUrl: 'https://portfolio-santiago-chinellato.vercel.app/'
  };
  
  // 2. Patch Landing Page
  console.log('Patching Landing Page...');
  try {
    await client
      .patch('ip_landing_page')
      .set({
        specializedSolutions: specializedSolutions,
        contactSection: contactSection,
        'trust.automationBadges': ['Chatbot WhatsApp Integrado', 'Automatización de Procesos'],
        'trust.stats': [
            { _key: 's1', value: '+20', label: 'Años evolucionando junto al sector bioquímico.' },
            { _key: 's2', value: '100%', label: 'Conexión total con autoanalizadores.' },
            { _key: 's3', value: '24/7', label: 'Soporte técnico real. Estamos cuando tu laboratorio abre.' },
            { _key: 's4', value: '+100', label: 'Centros optimizaron su gestión este año.' }
        ],
        'connectivity.subtitle2': 'Tu laboratorio, integrado y automatizado de punta a punta.',
        'connectivity.calloutText': '¿No ves tu marca? La integramos en tiempo récord',
        'connectivity.protocolsNote': 'Protocolos Soportados: Comunicación fluida y segura bajo estándares ASTM y HL7.'
      })
      .commit();
    console.log('Landing Page patched!');
  } catch (err) {
    console.error('Error patching Landing Page:', err.message);
  }

  // 3. Patch Footer in Settings
  console.log('Patching Footer in Settings...');
  try {
    // We need to fetch settings ID first or assume it's ip_settings
    // Since we used createOrReplace with _id: 'ip_settings', it should be there.
    await client
      .patch('ip_settings')
      .set({
        'footer.exploreTitle': footer.exploreTitle,
        'footer.legalTitle': footer.legalTitle,
        'footer.contactTitle': footer.contactTitle,
        'footer.copyrightText': footer.copyrightText,
        'footer.developedByText': footer.developedByText,
        'footer.developerName': footer.developerName,
        'footer.developerUrl': footer.developerUrl,
      })
      .commit();
    console.log('Settings patched!');
  } catch (err) {
    console.error('Error patching Settings:', err.message);
  }

  console.log('Patch complete.');
}

patchContent();
