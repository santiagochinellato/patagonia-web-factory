'use client';

import { HeroSection, Button } from '@patagonia-web-factory/ui-kit';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-light">
      {/* Hero Section */}
      <HeroSection
        title="La Fábrica de Webs Patagonia"
        subtitle="Construye sitios web de alta calidad en tiempo récord. Potenciado por Nx, Next.js y una librería de componentes reutilizables."
        ctaText="Comenzar"
        onCtaClick={() => console.log('CTA clicked!')}
      />

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-brand-blue mb-12">
          ¿Por qué La Fábrica?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-brand-blue mb-3">
              Velocidad
            </h3>
            <p className="text-gray-600 mb-6">
              Componentes reutilizables y arquitectura modular para construir
              sitios en horas, no semanas.
            </p>
            <Button variant="outline" className="w-full">
              Más info
            </Button>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-brand-blue mb-3">
              Diseño Consistente
            </h3>
            <p className="text-gray-600 mb-6">
              Tailwind CSS con preset compartido. Un cambio de color se propaga
              a todas las apps.
            </p>
            <Button variant="outline" className="w-full">
              Ver componentes
            </Button>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold text-brand-blue mb-3">
              Escalable
            </h3>
            <p className="text-gray-600 mb-6">
              Monorepo con Nx. Múltiples apps, una sola librería de UI y
              contenido compartido.
            </p>
            <Button variant="outline" className="w-full">
              Arquitectura
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para construir tu próximo proyecto?
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            Aprovecha el poder de la fábrica y crea sitios web espectaculares
            para tus clientes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              variant="secondary"
              onClick={() => console.log('Get started!')}
            >
              Empezar ahora
            </Button>
            <Button
              variant="outline"
              className="!text-white !border-white hover:!bg-white hover:!text-brand-blue"
            >
              Ver documentación
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-8 px-6 text-center">
        <p className="text-gray-300">
          Construido con ❤️ usando Nx, Next.js y Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
