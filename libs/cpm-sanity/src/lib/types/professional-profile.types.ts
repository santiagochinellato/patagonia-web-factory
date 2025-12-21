
import { Image } from 'sanity';

export interface ProfessionalProfile {
  _type: 'professional_profile';
  personalInfo?: PersonalInfo;
  heroSection?: HeroSection;
  experience?: Experience;
  education?: Education;
  authority?: InstitutionalAuthority;
  scientificPublications?: ScientificPublications;
  awardsAndRecognitions?: AwardsAndRecognitions;
  ctaSection?: CtaSection;
  navigation?: Navigation;
  services?: Services;
}

export interface PersonalInfo {
  fullName?: string;
  preferredName?: string;
  mainTitle?: string;
  subtitles?: string[];
  dni?: string;
  birthDate?: string;
  age?: number;
  nationality?: string;
  location?: Location;
  contact?: ContactInfo;
}

export interface Location {
  city?: string;
  province?: string;
  country?: string;
  previousAddress?: string;
  postalCode?: string;
}

export interface ContactInfo {
  phone?: string;
  emailMain?: string;
  emailUniversity?: string;
  linkedin?: string;
}

export interface HeroSection {
  tagline?: string;
  shortDescription?: string;
  extendedDescription?: string;
  profilePhoto?: Image & { alt?: string };
  cta?: HeroCta;
}

export interface HeroCta {
  buttonText?: string;
  whatsappLink?: string;
  defaultMessage?: string;
}

export interface Experience {
  currentPositions?: Position[];
  pastPositions?: PastPosition[];
}

export interface Position {
  position?: string;
  institution?: string;
  area?: string;
  chair?: string;
  period?: string;
  description?: string;
  responsibilities?: string[];
  reference?: Reference;
  type?: string;
  sector?: string;
}

export interface PastPosition extends Position {
  closureReason?: string;
  achievements?: string[];
  carrera?: string;
  catedra?: string;
}

export interface Reference {
  name?: string;
  position?: string;
  phone?: string;
}

export interface Education {
  formalEducation?: FormalEducation[];
  complementaryEducation?: ComplementaryEducation[];
}

export interface FormalEducation {
  level?: string;
  title?: string;
  institution?: string;
  faculty?: string;
  period?: string;
  finalGrade?: string;
  distinction?: string;
  highlighted?: boolean;
  icon?: string;
}

export interface ComplementaryEducation {
  title?: string;
  institution?: string;
  period?: string;
  endorsedBy?: string;
  highlighted?: boolean;
  icon?: string;
}

export interface InstitutionalAuthority {
  title?: string;
  subtitle?: string;
  institutions?: Institution[];
  memberships?: Membership[];
}

export interface Institution {
  name?: string;
  fullName?: string;
  type?: string;
  logo?: Image;
  description?: string;
  link?: string;
}

export interface Membership {
  organization?: string;
  type?: string;
  since?: number;
}

export interface ScientificPublications {
  summary?: PublicationSummary;
  articles?: Article[];
}

export interface PublicationSummary {
  total?: number;
  indexedJournals?: number;
  impactFactor?: string;
}

export interface Article {
  authors?: string;
  title?: string;
  journal?: string;
  volume?: string;
  pages?: string;
  year?: number;
  doi?: string;
  category?: string;
}

export interface AwardsAndRecognitions {
  total?: number;
  awards?: Award[];
  grants?: Grant[];
}

export interface Award {
  award?: string;
  event?: string;
  place?: string;
  year?: number;
  institution?: string;
  description?: string;
  type?: string;
  highlighted?: boolean;
}

export interface Grant {
  grant?: string;
  project?: string;
  period?: string;
  director?: string;
  codirector?: string;
  description?: string;
  highlighted?: boolean;
}

export interface CtaSection {
  primary?: PrimaryCta;
  secondary?: SecondaryCta;
}

export interface PrimaryCta {
  title?: string;
  subtitle?: string;
  mainButton?: CtaButton;
  secondaryButton?: CtaButton;
}

export interface SecondaryCta {
  title?: string;
  button?: CtaButton;
}

export interface CtaButton {
  text?: string;
  type?: string;
  link?: string;
  message?: string;
  file?: any; // Sanity file asset
}

export interface Navigation {
  menu?: MenuItem[];
  footer?: Footer;
}

export interface MenuItem {
  id?: string;
  label?: string;
  href?: string;
  order?: number;
}

export interface Footer {
  columns?: FooterColumn[];
  copyright?: string;
  legalNotice?: string;
}

export interface FooterColumn {
  title?: string;
  links?: LinkItem[];
}

export interface LinkItem {
  text?: string;
  href?: string;
}

export interface Services {
  generalDescription?: string;
  areas?: ServiceArea[];
}

export interface ServiceArea {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  color?: string;
  specificServices?: string[];
  benefits?: string[];
}
