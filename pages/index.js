import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-serif">
      <Head>
        <title>Vera Bastion</title>
        <meta name="description" content="Intelligent discovery of women-led ventures across Latin America." />
      </Head>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 border-b">
        <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wide">Vera Bastion</h1>
        <p className="mt-4 text-lg max-w-xl italic text-neutral-600">
          Strategic intelligence on Latin America's women-led ventures. Curated. Visual. Actionable.
        </p>
        <Link href="/map">
          <a className="mt-8 inline-block border border-black px-6 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all">
            Explore the Map
          </a>
        </Link>
      </section>

      {/* PLACEHOLDER FOR FUTURE */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold mb-4">Coming Soon</h2>
        <ul className="space-y-2 text-neutral-700">
          <li>📍 Interactive LATAM map with hover data</li>
          <li>📈 Live market dashboard for ETFs & stocks</li>
          <li>🗂️ Briefs featuring women-led ventures</li>
          <li>🧭 Editorial ecosystem maps & insights</li>
        </ul>
      </section>
    </div>
  );
}
