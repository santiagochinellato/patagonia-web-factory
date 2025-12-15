export function AppDownloadBanner() {
  return (
    <div className="bg-brand-blue text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <span className="inline-block px-3 py-1 bg-action-coral/20 text-action-coral rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-action-coral/50">
            Novedad
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Nueva APP CPM: <br />
            <span className="text-brand-light">
              Turnos y Novedades ¡Más fácil!
            </span>
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-md mx-auto md:mx-0">
            Gestioná los turnos de tu familia, recibí recordatorios y enterate
            de las últimas novedades del centro desde tu celular.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white text-brand-blue px-6 py-3 rounded-xl font-bold hover:bg-brand-light transition-colors shadow-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 mr-2"
                fill="currentColor"
              >
                <path d="M17.523 15.3414C17.523 11.9431 20.375 10.3662 20.505 10.2878C19.0666 8.23901 16.8283 7.91986 16.0535 7.88874C14.1568 7.69539 12.3368 9.00693 11.3651 9.00693C10.3935 9.00693 8.89182 7.9066 7.30681 7.93988C5.23512 7.96967 3.32832 9.14132 2.25332 11.0065C0.0883227 14.767 1.70166 20.3533 3.805 23.3888C4.83499 24.875 6.04665 26.5445 7.66998 26.4851C9.20498 26.4251 9.79498 25.5342 11.6917 25.5342C13.5867 25.5342 14.12 26.4851 15.7417 26.4551C17.4533 26.4251 18.5367 24.893 19.5533 23.419C20.6967 21.7516 21.1717 20.1345 21.185 20.0632C21.155 20.0525 17.523 18.667 17.523 15.3414ZM11.4585 5.56708C12.2985 4.54637 12.8618 3.1281 12.7051 1.72498C11.4818 1.77498 9.99849 2.53664 9.11182 3.56831C8.30349 4.49816 7.63516 5.95293 7.82849 7.33703C9.18682 7.44298 10.6168 6.58778 11.4585 5.56708Z" />
              </svg>
              App Store
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 mr-2"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Play Store
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative flex justify-center">
          {/* Simple mock phone UI */}
          <div className="bg-white p-2 rounded-3xl shadow-2xl w-64 border-4 border-gray-800 z-10 transform md:rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="bg-gray-100 h-96 rounded-2xl overflow-hidden relative">
              <div className="absolute top-0 w-full h-6 bg-brand-blue flex justify-center">
                <div className="w-20 h-4 bg-black rounded-b-lg"></div>
              </div>
              <div className="p-4 mt-8 space-y-3">
                <div className="h-20 bg-brand-blue rounded-xl flex items-center justify-center text-white font-bold">
                  CPM App
                </div>
                <div className="h-8 bg-white rounded-lg w-3/4"></div>
                <div className="h-8 bg-white rounded-lg w-full"></div>
                <div className="h-24 bg-action-coral/10 rounded-xl border border-action-coral/30 p-2">
                  <div className="w-2 h-2 rounded-full bg-action-coral mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative blob */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cpm-blue/30 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </div>
  );
}
