interface StaffMember {
  name: string;
  specialty: string;
  matricula?: string;
  imageUrl?: string;
  slug: string;
}

export function StaffProfileCard({ staff }: { staff: StaffMember }) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-smooth hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="aspect-square bg-brand-light relative overflow-hidden">
        {staff.imageUrl ? (
          <img
            src={staff.imageUrl}
            alt={staff.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-brand-blue opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <p className="text-sm text-action-coral font-bold uppercase tracking-wider mb-1">
          {staff.specialty}
        </p>
        <h3 className="text-xl font-bold text-brand-blue mb-2 leading-tight">
          {staff.name}
        </h3>
        {staff.matricula && (
          <p className="text-xs text-gray-400 mb-4 font-mono">
            {staff.matricula}
          </p>
        )}

        <a
          href={`/staff/${staff.slug}`}
          className="inline-flex items-center text-brand-blue font-bold text-sm group-hover:text-action-coral transition-colors"
        >
          Ver Trayectoria
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
