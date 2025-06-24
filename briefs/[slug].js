import Head from 'next/head';
import { useRouter } from 'next/router';

export default function BriefPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Temporary data (later: fetch from JSON, Markdown, or CMS)
  const sampleBriefs = {
    'cafe-mujeres': {
      name: 'Café Mujeres',
      country: 'Colombia',
      industry: 'Agritech',
      summary: 'An award-winning Colombian coffee venture co-founded by women farmers in Santander.',
      impact: 'Expanded rural income by 34% and built export deals with Scandinavia.',
    },
    'solariza': {
      name: 'Solariza',
      country: 'Mexico',
      industry: 'Clean Energy',
      summary: 'A solar design + installation company founded by electrical engineer Sofia Reyes.',
      impact: 'Installed 2.1 MW of rooftop solar for schools and clinics in Oaxaca and Jalisco.',
    }
  };

  const brief = sampleBriefs[slug];

  return (
    <div className="min-h-screen bg-white text-black font-serif px-6 py-12">
      <Head>
        <title>{brief ? brief.name : 'Loading...'} | Vera Bastion</title>
      </Head>

      {brief ? (
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{brief.name}</h1>
          <p className="text-neutral-600 italic mb-4">{brief.industry} · {brief.country}</p>
          <p className="mb-6">{brief.summary}</p>
          <div className="bg-[#f4f1ed] p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Impact</h2>
            <p>{brief.impact}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-neutral-500 italic">Loading brief...</p>
      )}
    </div>
  );
}
