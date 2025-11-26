import { ContactButton } from './contact-button';

export interface BranchCardProps {
  id: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  localidad: string;
  email: string;
  googleMapsUrl: string;
  hours: string;
  is24h: boolean;
  hasOnlineBooking: boolean;
  images: string[];
  isActive?: boolean;
  onClose?: () => void;
}

export function BranchCard({
  name,
  address,
  phone,
  whatsapp,
  localidad,
  email,
  googleMapsUrl,
  hours,
  is24h,
  hasOnlineBooking,
  images,
  isActive,
  onClose,
}: BranchCardProps) {
  return (
    <div
      className={`bg-white  shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 ${
        isActive ? '' : ''
      }`}
    >
      {/* Image Gallery (Simple for now, just first image) */}
      <div className="relative h-48 bg-katz-gray-light">
        {images.length > 0 ? (
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-katz-gray-helper">
            Sin imagen
          </div>
        )}
        {is24h && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center justify-center gap-2 text-katz-accent font-bold text-sm bg-orange-50 py-2 rounded border border-orange-100 p-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Emergencias 24hs
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-katz-primary mb-1">{name}</h3>
          <p className="text-katz-gray-body text-sm flex items-start">
            <svg
              className="w-4 h-4 text-katz-cta-primary mr-1 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {address} - {localidad}
          </p>
        </div>

        {/* Hours */}
        <div className="mb-4 bg-katz-gray-light p-3 rounded-md">
          <p className="text-sm text-katz-gray-label font-semibold mb-1">
            Horarios de Atención
          </p>
          <p className="text-sm text-katz-gray-body">{hours}</p>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-2 gap-3 ">
          <ContactButton type="whatsapp" value={whatsapp} label="WhatsApp" />
          <ContactButton type="phone" value={phone} label="Llamar" />
          <ContactButton type="map" value={googleMapsUrl} label="Cómo llegar" />
          <ContactButton type="email" value={email} label="Email" />
        </div>

        {/* Primary Actions */}
        <div className="mt-auto space-y-3">
          {hasOnlineBooking && (
            <button className="w-full bg-katz-cta-primary hover:bg-katz-primary text-white font-semibold py-3 rounded-md transition-colors shadow-sm">
              Solicitar Turno Online
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
