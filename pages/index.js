import { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const GeoJSON = dynamic(() => import('react-leaflet').then(mod => mod.GeoJSON), { ssr: false });

export default function VeraBastionHome() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const stats = {
    Colombia: { name: 'Café Mujeres', industry: 'Agritech', revenue: '$2.3M' },
    Mexico: { name: 'Solariza', industry: 'Clean Energy', revenue: '$4.1M' },
    Chile: { name: 'FemFin', industry: 'Fintech', revenue: '$1.9M' },
  };

  const onEachCountry = (feature, layer) => {
    layer.on({
      mouseover: () => setSelectedCountry(feature.properties.ADMIN),
    });
  };

  const latinAmericaGeoJson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { ADMIN: "Colombia" },
        geometry: {
          type: "Polygon",
          coordinates: [[[ -75, 5 ], [ -70, 5 ], [ -70, 0 ], [ -75, 0 ], [ -75, 5 ]]]
        }
      },
      {
        type: "Feature",
        properties: { ADMIN: "Mexico" },
        geometry: {
          type: "Polygon",
          coordinates: [[[ -105, 25 ], [ -100, 25 ], [ -100, 20 ], [ -105, 20 ], [ -105, 25 ]]]
        }
      },
      {
        type: "Feature",
        properties: { ADMIN: "Chile" },
        geometry: {
          type: "Polygon",
          coordinates: [[[ -75, -30 ], [ -70, -30 ], [ -70, -35 ], [ -75, -35 ], [ -75, -30 ]]]
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      <Head>
        <title>Vera Bastion</title>
        <meta name="description" content="Discover and elevate women-led ventures shaping Latin America's future" />
      </Head>

      <section className="flex flex-col items-center justify-center py-24 border-b">
        <h1 className="text-6xl font-semibold tracking-wide uppercase">Vera Bastion</h1>
        <p className="mt-4 text-lg italic text-neutral-600 max-w-xl text-center">
          Strategic discovery of women-led ventures across Latin America. Curated insights, capital signals, and emerging founders shaping the region’s future.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="h-[600px]">
          <MapContainer center={[0, -60]} zoom={2} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={latinAmericaGeoJson} onEachFeature={onEachCountry} />
          </MapContainer>
        </div>
        <div className="bg-[#f4f1ed] p-8 flex flex-col justify-center">
          {selectedCountry && stats[selectedCountry] ? (
            <div className="rounded-2xl shadow-md bg-white p-6">
              <h2 className="text-3xl font-bold mb-2">{stats[selectedCountry].name}</h2>
              <p className="text-lg">Country: {selectedCountry}</p>
              <p className="text-lg">Industry: {stats[selectedCountry].industry}</p>
              <p className="text-lg">Annual Revenue: {stats[selectedCountry].revenue}</p>
            </div>
          ) : (
            <p className="text-neutral-500 italic">Hover over a country to view business insights.</p>
          )}
        </div>
      </section>

      <section className="p-12 bg-[#f4f1ed] border-t mt-12">
        <h3 className="text-2xl font-semibold mb-6">Join the Conversation</h3>
        <p className="max-w-2xl text-lg">
          Vera Bastion is a living archive and discovery platform highlighting under-the-radar women-led businesses across Latin America. We bring together early-stage investors, grantmakers, and regional changemakers for curated insights and real-time dialogue.
        </p>
      </section>
    </div>
  );
}
