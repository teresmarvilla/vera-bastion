import Head from 'next/head';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-serif px-6 py-20">
      <Head>
        <title>About | Vera Bastion</title>
        <meta name="description" content="The mission, voice, and people behind Vera Bastion." />
      </Head>

      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-semibold uppercase tracking-wide mb-6">About Vera Bastion</h1>

        <p>
          Vera Bastion is a lens. A searchlight. A platform for uncovering the overlooked.
          We curate under-the-radar women-led ventures across Latin America — and trace the capital, courage, and creativity shaping their paths.
        </p>

        <p>
          We believe capital flows where attention goes. And attention, too often, skips the most important players. Vera exists to correct that — not with noise, but with clarity.
        </p>

        <p>
          This is not a directory. It’s a briefcase, a map, a gallery. It’s editorial-grade sourcing, economic intelligence, and a touch of grace. 
        </p>

        <p className="italic text-neutral-500">
          “Bastion” is a stronghold. “Vera” means truth. Together: a place to defend what’s real and invest in what matters.
        </p>

        <p>
          Based in New York. Focused on Latin America. Open to the world.
        </p>
      </div>
    </div>
  );
}
