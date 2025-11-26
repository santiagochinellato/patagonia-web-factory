'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom Pin Icon
const createCustomIcon = (color: string, isActive: boolean) => {
  const size = isActive ? 48 : 40;
  return new L.DivIcon({
    className: 'custom-pin-icon',
    html: `<svg viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.3)); transition: all 0.3s ease;"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" /></svg>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
};

const activeIcon = createCustomIcon('#307C86', true); // Katz CTA Primary
const inactiveIcon = createCustomIcon('#106973', false); // Katz Primary

interface Branch {
  id: string;
  name: string;
  position: [number, number];
}

interface LeafletMapProps {
  branches: Branch[];
  selectedBranchId: string | null;
  onSelectBranch: (id: string) => void;
}

// Helper function to validate coordinates
function isValidCoordinate(coord: [number, number] | undefined | null): coord is [number, number] {
  if (!coord || !Array.isArray(coord) || coord.length !== 2) {
    return false;
  }
  const [lat, lng] = coord;
  return (
    typeof lat === 'number' &&
    typeof lng === 'number' &&
    !isNaN(lat) &&
    !isNaN(lng) &&
    isFinite(lat) &&
    isFinite(lng)
  );
}

function MapController({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();

  useEffect(() => {
    // Wait for map to be ready
    if (!map) return;

    // Validate center coordinates using helper
    if (!isValidCoordinate(center)) {
      console.warn('Invalid center coordinates:', center);
      return;
    }

    // Use a timeout to ensure map is fully ready and prevent race conditions
    const timer = setTimeout(() => {
      // Double-check validity before flying (in case center changed during timeout)
      if (!isValidCoordinate(center)) {
        console.warn('Center became invalid during timeout:', center);
        return;
      }

      // Ensure map size is correct
      map.invalidateSize();

      // Simple smooth animation to center point with error handling
      try {
        map.flyTo(center, zoom, {
          animate: true,
          duration: 1.2,
        });
      } catch (error) {
        console.error('Error flying to coordinates:', error);
        // Fallback to setView without animation
        try {
          map.setView(center, zoom);
        } catch (e) {
          console.error('Error setting view:', e);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [center, zoom, map]);

  return null;
}

export default function LeafletMap({
  branches,
  selectedBranchId,
  onSelectBranch,
}: LeafletMapProps) {
  // Default center (Salta)
  const defaultCenter: [number, number] = [-24.7821, -65.4232];

  // Filter branches with valid coordinates using helper
  const validBranches = branches.filter((b) => isValidCoordinate(b.position));

  const selectedBranch = validBranches.find((b) => b.id === selectedBranchId);

  // Ensure center is always valid using helper
  const center: [number, number] = 
    selectedBranch && isValidCoordinate(selectedBranch.position)
      ? selectedBranch.position
      : defaultCenter;

  const zoom = selectedBranch ? 15 : 13;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={13}
      style={{ height: '100%', width: '100%', zIndex: 0 }}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      <MapController center={center} zoom={zoom} />

      {validBranches.map((branch) => (
        <Marker
          key={branch.id}
          position={branch.position}
          icon={branch.id === selectedBranchId ? activeIcon : inactiveIcon}
          eventHandlers={{
            click: () => onSelectBranch(branch.id),
          }}
        ></Marker>
      ))}
    </MapContainer>
  );
}
