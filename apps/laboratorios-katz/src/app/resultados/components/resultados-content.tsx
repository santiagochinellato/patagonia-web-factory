'use client';

interface ResultadosContentProps {
  data: {
    title: string;
    subtitle: string;
    bulletPoints: string[];
    images: {
      laptop: string;
      mobile: string;
    };
    cta: {
      text: string;
      url: string;
    };
  };
}

export function ResultadosContent({ data }: ResultadosContentProps) {
  return (
    <section className="py-12 md:py-20 bg-katz-relief min-h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-4">
            {/* Subtitle */}
            <p className="text-xs md:text-sm font-semibold text-katz-gray-body tracking-wider uppercase">
              {data.subtitle}
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-katz-primary leading-tight">
              {data.title}
            </h1>

            {/* Bullet Points */}
            <ul className="space-y-3 mt-2">
              {data.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-katz-cta-primary"></div>
                  </div>
                  <p className="text-sm md:text-base text-katz-gray-body leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Images and CTA */}
          <div className="flex flex-col items-center justify-center gap-6 lg:gap-8">
            {/* Device Mockups */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Laptop Image */}
              <img
                src={data.images.laptop}
                alt="Laptop mostrando resultados online"
                className="w-full h-auto object-contain"
              />
              {/* Mobile Image - Positioned absolutely */}
              <img
                src={data.images.mobile}
                alt="Móvil mostrando resultados online"
                className="absolute bottom-0 right-0 w-1/3 h-auto object-contain transform translate-x-4 translate-y-4"
              />
            </div>

            {/* CTA Button */}
            <a
              href={data.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-4 bg-transparent border-2 border-katz-primary text-katz-primary font-bold text-lg rounded-lg hover:bg-katz-primary hover:text-white transition-all duration-300 shadow-medical hover:shadow-medical-hover min-w-[200px]"
            >
              {data.cta.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
