import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/typography/SectionTitle';

export const metadata: Metadata = {
  title: 'Partners & Press — Bynd BD',
  description: 'The company we keep.',
};

export default function PartnersPage() {
  const partners = [
    { name: 'Bangladesh Parjatan Corporation', type: 'Government' },
    { name: 'Biman Bangladesh Airlines', type: 'Transport' },
    { name: 'Bengal Foundation', type: 'Culture' },
    { name: 'BRAC', type: 'Community' },
    { name: 'Local Eco-Lodges', type: 'Hospitality' },
    { name: 'Wildlife Conservation Society', type: 'Conservation' },
  ];

  return (
    <main className="bg-bynd-cream min-h-screen pt-32 pb-24">
      <Container>
        <div className="max-w-5xl mx-auto space-y-24">
          
          {/* Header */}
          <div className="text-center space-y-6">
            <span className="text-bynd-flame font-heading font-black uppercase tracking-[0.4em] text-[10px]">
              PARTNERS & PRESS
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-bynd-ink uppercase leading-tight">
              THE COMPANY WE KEEP.
            </h1>
            <p className="font-accent italic text-bynd-flame text-2xl">
              collaboration across the delta
            </p>
          </div>

          {/* Partners Grid */}
          <div className="space-y-12">
            <h2 className="font-heading font-black uppercase text-[10px] tracking-[0.4em] text-bynd-ink border-b border-black/5 pb-4">
              OUR PARTNERS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner) => (
                <div key={partner.name} className="bg-white p-8 rounded-3xl border border-bynd-border shadow-soft flex flex-col justify-center items-center text-center h-48 hover:shadow-premium transition-shadow">
                  <span className="text-bynd-silver mb-4">❖</span>
                  <h3 className="font-heading text-lg text-bynd-ink uppercase">{partner.name}</h3>
                  <p className="font-ui text-xs text-bynd-ash uppercase tracking-widest mt-2">{partner.type}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-bynd-parchment p-8 rounded-3xl border border-bynd-border text-center flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="font-body text-bynd-ink text-lg italic">
                Interested in partnering with Bynd BD?
              </p>
              <a href="mailto:partners@byndbd.com" className="bg-bynd-ink text-white font-ui uppercase text-sm tracking-wider px-8 py-3 rounded-full hover:bg-bynd-flame transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Press Section */}
          <div className="space-y-12 pt-12 border-t border-bynd-border">
            <h2 className="font-heading font-black uppercase text-[10px] tracking-[0.4em] text-bynd-ink border-b border-black/5 pb-4">
              PRESS & MEDIA
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3 className="font-heading text-2xl text-bynd-ink uppercase">Featured In</h3>
                <ul className="space-y-4 font-body text-xl text-bynd-ash italic">
                  <li>— The Daily Star</li>
                  <li>— Lonely Planet</li>
                  <li>— Wanderlust Magazine</li>
                  <li>— Bangladesh Monitor</li>
                </ul>
              </div>

              <div className="space-y-8">
                <h3 className="font-heading text-2xl text-bynd-ink uppercase">Media Resources</h3>
                <p className="font-body text-bynd-stone text-lg">
                  Access our brand guidelines, high-resolution photography, founder bio, and official fact sheet.
                </p>
                <button className="text-bynd-flame font-ui text-sm uppercase tracking-widest border border-bynd-flame px-8 py-3 rounded-full hover:bg-bynd-flame hover:text-white transition-colors">
                  Download Media Kit
                </button>
                <p className="font-ui text-xs text-bynd-ash pt-4">
                  Press inquiries: <a href="mailto:press@byndbd.com" className="text-bynd-ink hover:text-bynd-flame">press@byndbd.com</a>
                </p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl border border-bynd-border shadow-soft flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 max-w-xl text-center md:text-left">
                <h3 className="font-heading text-xl text-bynd-ink uppercase">Press Trips</h3>
                <p className="font-body text-bynd-ash text-lg">We occasionally host press trips for select journalists, travel writers, and content creators.</p>
              </div>
              <button className="bg-bynd-ink text-white font-ui uppercase text-sm tracking-wider px-8 py-3 rounded-full hover:bg-bynd-flame transition-colors whitespace-nowrap">
                Apply for a Trip
              </button>
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}
