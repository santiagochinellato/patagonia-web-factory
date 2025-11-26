'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});
const useMap = dynamic(
  () => import('react-leaflet').then((mod) => mod.useMap),
  { ssr: false }
);

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet default icon issue
const iconPerson = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Custom Pin Icon
const createCustomIcon = (color: string) => {
  return new L.DivIcon({
    className: 'custom-pin-icon',
    html: `<svg viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.3));"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" /></svg>`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

const activeIcon = createCustomIcon('#307C86'); // Katz CTA Primary
const inactiveIcon = createCustomIcon('#106973'); // Katz Primary

interface Branch {
  id: string;
  name: string;
  position: [number, number];
}

interface MapComponentProps {
  branches: Branch[];
  selectedBranchId: string | null;
  onSelectBranch: (id: string) => void;
}

function ChangeView({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap(); // This might fail if useMap is not properly imported or used within MapContainer context
  useEffect(() => {
    if (map) {
      map.setView(center, zoom);
    }
  }, [center, zoom, map]);
  return null;
}

// We need a component that uses useMap inside MapContainer, but useMap is a hook.
// The dynamic import of useMap returns a component, not the hook itself directly usable in the same way if not careful.
// Actually, react-leaflet exports useMap as a hook. We can't dynamically import a hook easily to use it as a hook.
// Better approach: Create a standard component file for the map that is dynamically imported by the parent.

export default function MapComponent({
  branches,
  selectedBranchId,
  onSelectBranch,
}: MapComponentProps) {
  // Default center (Salta)
  const defaultCenter: [number, number] = [-24.7821, -65.4232];

  const selectedBranch = branches.find((b) => b.id === selectedBranchId);
  const center = selectedBranch ? selectedBranch.position : defaultCenter;
  const zoom = selectedBranch ? 15 : 12;

  // Inner component to handle map view changes
  const MapController = () => {
    const map = (useMap as any)(); // Cast to any to avoid TS errors with dynamic import
    useEffect(() => {
      if (map) {
        map.setView(center, zoom);
      }
    }, [map]);
    return null;
  };

  return (
    <MapContainer
      center={defaultCenter}
      zoom={12}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* We need to handle the view change differently because of the dynamic import of the hook */}
      {/* For now, let's rely on the map state or a simpler approach if useMap is tricky with dynamic imports */}

      {branches.map((branch) => (
        <Marker
          key={branch.id}
          position={branch.position}
          icon={branch.id === selectedBranchId ? activeIcon : inactiveIcon}
          eventHandlers={{
            click: () => onSelectBranch(branch.id),
          }}
        >
          <Popup>
            <span className="font-semibold text-katz-primary">
              {branch.name}
            </span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
