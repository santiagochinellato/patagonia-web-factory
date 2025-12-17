// Centralized GROQ queries for the CPM Bariloche application
// Using specific projections instead of `...` for better performance

export const HOME_QUERY = `
  {
    "latestNews": *[_type == "novedad"] | order(fecha desc)[0..1] {
      _id,
      titulo,
      fecha,
      categoria,
      excerpt,
      slug,
      "important": categoria == "aviso"
    },
    "staffPreview": *[_type == "staffMember" && cargo != "Director Médico"][0..3] {
      _id,
      nombre,
      cargo,
      especialidad,
      slug,
      foto,
      obrasSociales[]->{_id, nombre, color}
    },
    "hero": *[_type == "homeSection"][0] {
      titulo,
      bajada,
      imageHero
    }
  }
`;

export const NEWS_QUERY = `
  *[_type == "novedad"] | order(fecha desc) {
    _id,
    titulo,
    fecha,
    categoria,
    excerpt,
    slug,
    "important": categoria == "aviso"
  }
`;

export const STAFF_QUERY = `
  {
    "director": *[_type == "staffMember" && cargo == "Director Médico"][0]{
      _id,
      nombre,
      cargo,
      especialidad,
      bio,
      formacion,
      foto,
      obrasSociales[]->{_id, nombre, color}
    },
    "staff": *[_type == "staffMember" && cargo != "Director Médico"] | order(nombre asc) {
      _id,
      nombre,
      cargo,
      especialidad,
      slug,
      foto,
      obrasSociales[]->{_id, nombre, color}
    }
  }
`;

export const SCHEDULE_QUERY = `
  *[_type == "schedule"] | order(orden asc) {
    _id,
    profesional->{nombre},
    nombrePersonalizado,
    especialidad,
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo
  }
`;

export const ABOUT_QUERY = `
  *[_type == "settings"][0] {
    institucional {
      historia,
      filosofia,
      vacunatorio
    }
  }
`;
