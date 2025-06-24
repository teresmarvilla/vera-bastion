import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const GeoJSON = dynamic(() => import('react-leaflet').then(mod => mod.GeoJSON), { ssr: false });

export default function MapPage() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const onEachCountry = (feature, layer) => {
    layer.on({
      mouseover: () => setSelectedCountry(feature.properties.ADMIN),
    });
  };

  const sampleGeoJson = {
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
        <title>Interactive Map | Vera Bastion</title>
        <meta name="description" content="Explore Latin America's women-led ventures by country." />
      </Head>

      <section className="p-6">
        <h1 className="text-4xl font-bold mb-4 text-center">Explore the Map</h1>
        <p className="text-center text-neutral-600 mb-8">Hover over a country to preview data</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="h-[500px] w-full">
            <MapContainer center={[0, -60]} zoom={2} scrollWheelZoom={false} className="h-full w-full z-0">
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <GeoJSON data={sampleGeoJson} onEachFeature={onEachCountry} />
            </MapContainer>
          </div>

          <div className="flex flex-col justify-center items-start p-4 bg-[#f4f1ed] rounded-md shadow-sm">
            {selectedCountry ? (
              <>
                <h2 className="text-2xl font-semibold mb-2">{selectedCountry}</h2>
                <p className="text-neutral-700">More data coming soon...</p>
              </>
            ) : (
              <p className="italic text-neutral-500">Hover over a country to see info</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
