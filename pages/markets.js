import Head from 'next/head';

export default function MarketsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-serif">
      <Head>
        <title>Markets | Vera Bastion</title>
        <meta name="description" content="Live LATAM ETF and economic market data." />
      </Head>

      <section className="py-24 px-6 text-center border-b">
        <h1 className="text-5xl font-semibold mb-4 uppercase tracking-wide">Market Dashboard</h1>
        <p className="text-neutral-600 text-lg italic">
          A real-time pulse on Latin America's macro and micro economic trends.
        </p>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">🇲🇽 iShares MSCI Mexico ETF (EWW)</h2>
          <p className="text-neutral-600">Price: <span className="font-mono">loading...</span></p>
          <p className="text-neutral-600">Change: <span className="font-mono">loading...</span></p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">🇧🇷 iShares MSCI Brazil ETF (EWZ)</h2>
          <p className="text-neutral-600">Price: <span className="font-mono">loading...</span></p>
          <p className="text-neutral-600">Change: <span className="font-mono">loading...</span></p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">🇨🇱 Global X MSCI Chile ETF (ECH)</h2>
          <p className="text-neutral-600">Price: <span className="font-mono">loading...</span></p>
          <p className="text-neutral-600">Change: <span className="font-mono">loading...</span></p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">🇨🇴 Global X MSCI Colombia ETF (GXG)</h2>
          <p className="text-neutral-600">Price: <span className="font-mono">loading...</span></p>
          <p className="text-neutral-600">Change: <span className="font-mono">loading...</span></p>
        </div>
      </section>
    </div>
  );
}
