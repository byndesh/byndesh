import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/typography/SectionTitle';
import { reader } from '@/lib/keystatic';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Destinations — Bynd BD',
  description: 'Explore the corners of the delta where time slows down.',
};

export default async function DestinationsPage() {
  const destinations = await reader.collections.destinations.all();

  return (
    <div className="bg-bynd-cream min-h-screen pb-32">
      <Container className="pt-32 md:pt-48">
        <div className="max-w-6xl mx-auto flex flex-col space-y-16">
          <div className="text-center space-y-8">
            <SectionTitle 
              label="DESTINATIONS" 
              title="See Bangladesh through our eyes." 
              className="mb-0"
            />
            <p className="font-body text-bynd-ash text-xl md:text-2xl max-w-2xl mx-auto italic leading-relaxed">
              From the deep mangrove tides to the cloud-touched Hill Tracts, explore the regions we call home.
            </p>
          </div>

          {destinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
               {destinations.map(dest => (
                  <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="group relative aspect-[16/9] rounded-[40px] overflow-hidden bg-bynd-charcoal shadow-premium block border border-white/5">
                     <div className="absolute inset-0 bg-sunrise opacity-10 group-hover:opacity-30 transition-opacity" />
                     <div className="absolute inset-0 bg-gradient-to-t from-bynd-ink/90 to-transparent z-10" />
                     <div className="absolute inset-0 p-12 flex flex-col justify-end z-20 space-y-4">
                        <span className="font-signature italic text-bynd-gold text-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-4 group-hover:translate-x-0">
                           {dest.entry.signature_accent}
                        </span>
                        <h3 className="font-body italic text-white text-4xl md:text-5xl">{dest.entry.title}</h3>
                        <div className="flex gap-6 pt-4 opacity-70">
                           <div className="flex flex-col">
                              <span className="text-[8px] font-heading font-black text-white/50 tracking-widest uppercase mb-1">STATUS</span>
                              <span className="text-[10px] font-heading font-black text-white uppercase tracking-widest">{dest.entry.hero_stats?.unesco || "HERITAGE"}</span>
                           </div>
                           <div className="flex flex-col border-l border-white/10 pl-6">
                              <span className="text-[8px] font-heading font-black text-white/50 tracking-widest uppercase mb-1">WILDLIFE</span>
                              <span className="text-[10px] font-heading font-black text-white uppercase tracking-widest">{dest.entry.hero_stats?.wildlife || "DIVERSE"}</span>
                           </div>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-fog rounded-3xl border border-black/5">
              <p className="font-body text-bynd-ash italic text-xl">The map is being drawn. Check back soon.</p>
            </div>
          )}

          <div className="pt-20 text-center">
            <span className="font-signature italic text-5xl text-bynd-flame grad-text">
              See you Beyond.
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
