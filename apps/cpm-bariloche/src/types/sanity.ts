import { PortableTextBlock } from 'sanity';

export interface SanityImage {
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface ObraSocial {
  _id: string;
  nombre: string;
  color: 'blue' | 'pink' | 'green' | 'orange' | 'red' | 'gray';
  prioridad: number;
}

export interface StaffMember {
  _id: string;
  nombre: string;
  slug: { current: string };
  cargo?: string;
  especialidad: string;
  foto?: SanityImage;
  matricula?: string;
  bio?: PortableTextBlock[];
  formacion?: {
    titulo: string;
    institucion: string;
    anio?: number;
    periodo?: string;
  }[];
  experiencia?: {
    cargo: string;
    institucion: string;
    periodo: string;
  }[];
  logros?: string[];
  obrasSociales?: ObraSocial[];
}

export interface Novedad {
  _id: string;
  titulo: string;
  slug: { current: string };
  fecha: string;
  categoria: 'novedades' | 'vacunacion' | 'aviso' | 'institucional';
  contenido?: PortableTextBlock[]; // Rich text content if needed
  excerpt?: string; // Derived or explicit
  important?: boolean; // Derived from category 'aviso' or explicit field if added
  enlaces?: { texto: string; url: string }[];
}

export interface Schedule {
    _id: string;
    profesional?: StaffMember;
    nombrePersonalizado?: string;
    especialidad?: string;
    orden?: number;
    lunes?: string;
    martes?: string;
    miercoles?: string;
    jueves?: string;
    viernes?: string;
    sabado?: string;
    domingo?: string;
}

export interface Settings {
    sitio: {
        nombre: string;
        tagline: string;
    };
    contacto: {
        direccion: {
            calle: string;
            numero: string;
            ciudad: string;
        };
        telefonos: {
            fijo: string;
            movil: string[];
        };
        emails: {
            recepcion: string;
        }
    }
}
