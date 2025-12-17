import Link from 'next/link';

const SERVICES = [
  {
    title: 'Pediatría',
    description:
      'Control de niño sano, seguimiento de crecimiento y emergencias.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Medicina General',
    description:
      'Atención integral para adolescentes y adultos de todas las edades.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Vacunatorio',
    description:
      'Calendario oficial y vacunas complementarias. Sin turno previo.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: 'Otras Especialidades',
    description: 'Cardiología, Dermatología, Nutrición y más.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
  },
];

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {SERVICES.map((service, idx) => (
        <Link
          key={idx}
          href="/especialidades"
          className="group p-6 bg-white rounded-3xl border border-slate-100 shadow-soft hover:-translate-y-2 hover:shadow-glow-pink transition-all duration-300"
        >
          <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
            {service.icon}
          </div>
          <h3 className="font-heading font-bold text-lg text-text-main mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            {service.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
