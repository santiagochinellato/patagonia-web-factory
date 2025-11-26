export const SEO_CONFIG = {
  defaultSeo: {
    siteName: "Laboratorios Katz",
    title: "Laboratorios Katz - Análisis Clínicos de Excelencia",
    description: "Laboratorio de análisis clínicos con más de 50 años de trayectoria, excelencia en servicio y tecnología de vanguardia.",
    keywords: "Laboratorio, Análisis Clínicos, Estudios de Sangre, Resultados Online, Bioquímica",
    image: "https://i.ibb.co/HxHHDQB/KATZ.png",
    locale: "es_AR",
    url: "https://www.laboratoriokatz.com.ar",
    twitter: {
      cardType: "summary_large_image",
      handle: "@labkatz"
    }
  }
};

export const HERO_DATA = {
  texts: [
    {
      id: 122,
      title: "EXCELENCIA EN ANALISIS CLINICOS",
      description: "Más de 1000 prestaciones en todas las áreas de bioquímica clínica, tanto de mediana como de alta complejidad.",
    },
    {
      id: 123,
      title: "RESULTADOS INMEDIATOS Y CON LA MAXIMA PRECISION",
      description: "Contamos con tecnología de última generación y profesionales altamente capacitados para ofrecer un servicio eficiente y confiable.",
    },
    {
      id: 124,
      title: "GARANTIA DE CONFIABILIDAD EN LOS PROCESOS",
      description: "Implementamos rigurosos controles de calidad internos y externos garantizando la confiabilidad y precisión de los resultados.",
      logos: [
        {
          src: "https://i.ibb.co/ycC7T0y2/peec.png",
          alt: "Certificado PEEC",
          className: "h-12 w-auto object-contain"
        },
        {
          src: "https://i.ibb.co/S7r5vMQV/technopath.png",
          alt: "Certificado Technopath",
          className: "h-12 w-auto object-contain"
        },
        {
          src: "https://i.ibb.co/v6M4W32V/progba.png",
          alt: "Certificado PROGBA",
          className: "h-16 w-auto object-contain"
        }
      ]
    },
    {
      id: 125,
      title: "CERTIFICACIONES DE CALIDAD",
      description: "Certificamos en sistema de gestión de calidad en la prestación de servicios de análisis clínicos en las etapas pre analitica, analitica y post analitica.",
      logos: [
        {
          src: "https://i.ibb.co/1w5dc3K/IRAM-ISO-true.png",
          alt: "Certificado IRAM ISO 9001",
          className: "h-20 w-auto object-contain"
        }
      ]
    }
  ],
  video: "/videos/vertical.mp4"
};

export const SERVICES_DATA = [
  {
    id: 2,
    title: "Resultados online",
    description: "Recibí de manera inmediata los resultados de tus análisis bioquímicos a tu Whatsapp, correo electrónico o ingresando aquí con tu usuario y clave.",
    icon: "https://i.ibb.co/PvchbZF9/resultados.png",
    url: "https://resultados.laboratorioskatz.com/interpracsysweb/",
    ctaText: "Ingresar"
  },
  {
    id: 4,
    title: "Guardia 24hs",
    description: "Nuestro compromiso es estar disponibles las 24 horas, los 7 días de la semana, para atender emergencias y consultas urgentes.",
    icon: "https://i.ibb.co/JFkd9xrk/guardia.png",
    url: "#contacto",
    ctaText: "Ver Centros"
  },
  {
    id: 6,
    title: "Extracción a Domicilio",
    description: "Ofrecemos nuestro servicio de toma de muestra a domicilio en la ciudad de Salta",
    icon: "https://i.ibb.co/KjHttyxR/domicilio.png",
    url: "https://wa.me/5493876144845",
    ctaText: "Solicitar"
  },
  {
    id: 8,
    title: "Servicio a Derivantes",
    description: "Colaboración y atención especializada para profesionales bioquímicos que buscan derivar sus muestras.",
    icon: "https://i.ibb.co/S4rNyLw4/derivantes.png",
    url: "https://derivaciones.laboratorioskatz.com/interpracsysweb/",
    ctaText: "Acceder"
  },
  {
    id: 10,
    title: "Pre Ingreso",
    description: "Agilice su atencion en el laboratorio. Realice una autorizacion de su pedido y ahorre tiempo.",
    icon: "https://i.ibb.co/hF4ZHZWD/preingreso.png",
    url: "#contacto",
    ctaText: "Consultar"
  },
  {
    id: 12,
    title: "Biología molecular",
    description: "Brindamos diagnósticos moleculares de infecciones virales. Panel de virus respiratorios, panel de neurovirus, enfermedades transmitidas por mosquitos.",
    icon: "https://i.ibb.co/Y7Lh9K3D/molecular.png",
    url: "#contacto",
    ctaText: "Más info"
  }
];

export const BRANCHES_DATA = [
  {
    id: "72",
    nombre: "RED IMAC - Hospital Privado Central",
    descripcion: "Alta complejidad, tecnología de vanguardia, infraestructura moderna y profesionales experimentados. Ubicado céntrico en Salta, brinda atención integral y de calidad.",
    guardia24horas: true,
    contacto: {
      emails: ["info@laboratorioskatz.com"],
      whatsapps: ["+54 387 614 4845"],
      telefonos: ["+54 387 614 4845"]
    },
    direccion: "Adolfo Guemes 82",
     localidad:"Salta",
    latitud: -24.788442,
    longitud: -65.417692,
    urlgooglemaps: "https://maps.app.goo.gl/Wm6kpKYPqddEreoL7",
    horario: "Lunes a Viernes de 7 a 18hs | Sábado de 8 a 12hs",
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"] // Placeholder as no real image provided
  },
  {
    id: "73",
    nombre: "RED IMAC - Clínica Privada Rosario de Lerma",
    descripcion: "Cuenta con tecnología de alta complejidad y profesionales calificados. Guardia 24 horas, 365 días, atención integral, especializada, permanente y de calidad.",
    guardia24horas: true,
    contacto: {
      emails: ["info@laboratorioskatz.com"],
      whatsapps: ["+54 387 220 4755"],
      telefonos: ["+54 387 220 4755"]
    },
    direccion: "Av. San Martin 470 (RP 23 Km 11)",
    localidad: "Rosario de Lerma",
    latitud: -24.981473,
    longitud: -65.573318,
    urlgooglemaps: "https://maps.app.goo.gl/zBfYgkdg9mHwBrFQA",
    horario: "Lunes a Viernes de 7 a 18hs | Sábado de 8 a 12hs",
    images: ["https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "74",
    nombre: "RED IMAC - Centro Médico San Lorenzo",
    descripcion: "Atención de excelencia con profesionales de la salud y médicos especialistas, servicio de laboratorio bioquímico, diagnóstico preciso y cuidado integral",
    guardia24horas: false,
    contacto: {
      emails: ["info@laboratorioskatz.com"],
      whatsapps: ["+54 387 548 2896"],
      telefonos: ["+54 387 548 2896"]
    },
    direccion: "Av. San Martin 866",
    localidad: "San Lorenzo",
    latitud: -24.744538,
    longitud: -65.484568,
    urlgooglemaps: "https://maps.app.goo.gl/AeiEeg8VMnRdZoB36",
    horario: "Lun a Vier 7.30 a 13hs | Sab 8 a 11hs",
    images: ["https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "75",
    nombre: "Cordis",
    descripcion: "Brinda servicios médicos de calidad con consultorios multidisciplinarios y laboratorio bioquímico equipado para estudios clínicos en el centro de Salta.",
    guardia24horas: false,
    contacto: {
      emails: ["info@laboratorioskatz.com"],
      whatsapps: ["+54 387 614 4843"],
      telefonos: ["+54 387 614 4843"]
    },
    direccion: "España 1067",
    localidad: "Salta",
    latitud: -24.788241,
    longitud: -65.417036,
    urlgooglemaps: "https://maps.app.goo.gl/JhhQUEqnj65sfhJB8",
    horario: "Lun a Vier 7.30 a 13:30 hs",
    images: ["https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "76",
    nombre: "Innova Salud Integral",
    descripcion: "Equipo interdisciplinario ofrece atención integral en Salta, con múltiples especialidades y laboratorio bioquímico propio para diagnósticos eficientes y de calidad.",
    guardia24horas: false,
    contacto: {
      emails: ["info@laboratorioskatz.com"],
      whatsapps: ["+54 387 226 2994"],
      telefonos: ["+54 387 226 2994"]
    },
    direccion: "20 de Febrero 750",
    localidad:"Salta",
    latitud: -24.780215,
    longitud: -65.412764,
    urlgooglemaps: "https://maps.app.goo.gl/5QGNmhHFCaPtG1dj8",
    horario: "Lunes a Viernes de 7 a 13hs",
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "77",
    nombre: "Altos de Salta Sanatorio",
    descripcion: "Sanatorio con equipamiento de última generación y profesionales calificados en el Noroeste Argentino. Compromiso con calidad médica y atención personalizada.",
    guardia24horas: true,
    contacto: {
      emails: ["info@laboratorioskatz.com"],
      whatsapps: [],
      telefonos: ["+54 387 416 1300"]
    },
    direccion: "Laprida 145",
    localidad:"Salta",
    latitud: -24.790565,
    longitud: -65.424694,
    urlgooglemaps: "https://maps.app.goo.gl/ZGLJaQfiWZWs8dkq9",
    horario: "Lunes a Viernes de 7 a 18hs | Sábado de 8 a 12hs",
    images: ["https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "78",
    nombre: "SMG – Swiss Medical Center Salta",
    descripcion: "Centros médicos ambulatorios con cómodas instalaciones y tecnología de punta brindan atención eficaz y cordial a un millón pacientes anuales.",
    guardia24horas: false,
    contacto: {
      emails: ["info@laboratorioskatz.com"],
      whatsapps: [],
      telefonos: ["+54 387 416 1300"]
    },
    direccion: "España 943 4°piso",
     localidad:"Salta",
    latitud: -24.788218,
    longitud: -65.415782,
    urlgooglemaps: "https://maps.app.goo.gl/PpyKCFzpH6hKU25j8",
    horario: "Lun a Vie 7.30 a 13.30hs",
    images: ["https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "79",
    nombre: "Oficinas administrativas",
    descripcion: "Equipo administrativo y logístico, céntrico en Salta, coordina procesos internos, garantiza funcionamiento eficiente de servicios y acompaña pacientes y profesionales.",
    guardia24horas: false,
    contacto: {
      emails: ["info@laboratorioskatz.com"],
      whatsapps: [],
      telefonos: ["+54 387 2422554"]
    },
    direccion: "Republica de Siria 496",
     localidad:"Salta",
    latitud: -24.782678,
    longitud: -65.427007,
    urlgooglemaps: "https://maps.app.goo.gl/CDTKRt2CindwchXJ8",
    horario: "Lunes a Viernes 8 a 16hs",
    images: ["https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"]
  }
];

export const RESULTADOS_DATA = {
  title: "RESULTADOS ONLINE",
  subtitle: "ACCESO A",
  bulletPoints: [
    "Los datos que usted podrá consultar a través de nuestro sistema son confidenciales. Sólo estarán disponibles para el paciente a través de un Usuario y Contraseña.",
    "Para poder acceder a este servicio, deberá utilizar los datos de ingresos (Usuario y Contraseña) proporcionados por el personal del Laboratorio, en el momento que se realizó sus análisis. Estos datos son únicos y definitivos, por tal motivo no necesitará gestionarlos nuevamente y le servirá para consultar todos los estudios que realice en nuestros laboratorios.",
    "Los resultados de laboratorio correspondientes a prácticas que requieren estricta confidencialidad NO estarán disponibles para la consulta por web (Ej. HIV).",
    "Este sistema de información tiene por finalidad agilizar la consulta de los resultados de sus análisis.",
    "Recuerde que usted puede modificar su clave de acceso personal una vez que haya ingresado con la clave asignada en el laboratorio.",
    "Los resultados finalizados también serán enviados por mail o whatsapp, según la información registrada en nuestra base de datos."
  ],
  images: {
    laptop: "https://i.ibb.co/g6XMTrV/1fff9a07-5862-4fe8-8948-46a0ce6dde94.png",
    mobile: "https://i.ibb.co/y6HW6fQ/adfd5442-9032-4c11-b041-4ab964239734.png"
  },
  cta: {
    text: "INGRESAR",
    url: "https://resultados.laboratorioskatz.com/interpracsysweb/"
  }
};

export const DERIVANTES_DATA = {
  title: "SERVICIOS A DERIVANTES",
  subtitle: "DERIVANTES",
  bulletPoints: [
    "   Recepción de muestras: de 8 a 14hs de lunes a viernes días hábiles. Los días Sábados hasta las 12hs. En nuestra sucursal Hospital Privado Central – Red Imac – Adolfo Guemes 82.",
    "Los resultados del día estarán disponibles a partir de 18 hs.",
    "Para consultas bioquímicas: los contactos son <a href='387-6144989' target='_blank'>387-6144989</a> y el mail <a href='mailto:derivaciones@laboratorioskatz.com' target='_blank' rel='noopener noreferrer' class='text-katz-cta-primary hover:underline'>derivaciones@laboratorioskatz.com</a>",
    "Para consultas administrativas: 387-6144989 y el mail <a href='mailto:infoderivaciones@laboratorioskatz.com' target='_blank' rel='noopener noreferrer' class='text-katz-cta-primary hover:underline'>infoderivaciones@laboratorioskatz.com</a>",

  ],
  images: {
    laptop: "https://i.ibb.co/g6XMTrV/1fff9a07-5862-4fe8-8948-46a0ce6dde94.png",
    mobile: "https://i.ibb.co/y6HW6fQ/adfd5442-9032-4c11-b041-4ab964239734.png"
  },
  cta: {
    text: "INGRESAR",
    url: "https://derivantes.laboratorioskatz.com/"
  }
};

