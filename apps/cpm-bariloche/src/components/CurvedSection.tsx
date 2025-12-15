'use client';

interface CurvedSectionProps {
  children: React.ReactNode;
  bgClass?: string;
  curvePosition?: 'top' | 'bottom' | 'both';
  curveColor?: string; // Color that matches the adjacent section
}

export function CurvedSection({
  children,
  bgClass = 'bg-brand-light',
  curvePosition = 'bottom',
  curveColor = '#ffffff',
}: CurvedSectionProps) {
  return (
    <section className={`relative ${bgClass}`}>
      {/* Top Curve */}
      {(curvePosition === 'top' || curvePosition === 'both') && (
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 transform translate-y-[-1px]">
          <svg
            className="relative block w-full h-[50px] md:h-[100px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              style={{ fill: curveColor }}
            />
          </svg>
        </div>
      )}

      <div className="py-20">{children}</div>

      {/* Bottom Curve */}
      {(curvePosition === 'bottom' || curvePosition === 'both') && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[1px]">
          <svg
            className="relative block w-full h-[50px] md:h-[100px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              style={{ fill: curveColor }}
            />
          </svg>
        </div>
      )}
    </section>
  );
}
