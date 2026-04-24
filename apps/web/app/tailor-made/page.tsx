import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import ButtonPrimary from '@/components/buttons/ButtonPrimary';

export const metadata: Metadata = {
  title: 'Tailor-Made Journeys — Bynd BD',
  description: 'Custom expeditions designed specifically for you. Your Bangladesh, your way.',
};

export default function TailorMadePage() {
  const steps = [
    { title: 'The Consultation', desc: 'We begin with a conversation about your interests, pace, travel style, and what you hope to experience in the delta.' },
    { title: 'The Blueprint', desc: 'Our travel designers craft a bespoke itinerary, selecting the right guides, accommodations, and exclusive access experiences.' },
    { title: 'Refinement', desc: 'We iterate on the blueprint together until every detail aligns perfectly with your vision.' },
    { title: 'The Journey', desc: 'You explore Bangladesh seamlessly, supported 24/7 by our on-the-ground team and expert local fixers.' },
  ];

  const customizations = [
    { name: 'Photography Expeditions', focus: 'Golden hour access, private subjects, specialized fixers.' },
    { name: 'Culinary Journeys', focus: 'Home-cooked meals, market tours, masterclasses with local chefs.' },
    { name: 'Textile & Artisan Trails', focus: 'Jamdani weavers, brass workers, private studio visits.' },
    { name: 'Wildlife & Birding', focus: 'Specialist naturalists, extended time in hides, remote access.' },
  ];

  return (
    <main className="bg-bynd-cream min-h-screen pt-32 pb-24">
      <Container>
        <div className="max-w-5xl mx-auto space-y-24">
          
          <div className="text-center space-y-6">
            <span className="text-bynd-flame font-heading font-black uppercase tracking-[0.4em] text-[10px]">
              BESPOKE EXPEDITIONS
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-bynd-ink uppercase leading-tight">
              YOUR BANGLADESH.<br />YOUR WAY.
            </h1>
            <p className="font-accent italic text-bynd-flame text-2xl">
              crafted without compromise
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="font-body text-bynd-ash text-xl md:text-2xl leading-relaxed italic">
              For those who prefer to write their own stories, we offer fully bespoke journey design. Whether you are a solo photographer seeking the perfect light, a family wanting to trace your heritage, or a group of friends craving a specific adventure.
            </p>
            <ButtonPrimary label="START DESIGNING YOUR TRIP" href="/booking" />
          </div>

          <div className="space-y-12 pt-12 border-t border-bynd-border">
            <h2 className="font-heading font-black uppercase text-[10px] tracking-[0.4em] text-bynd-ink border-b border-black/5 pb-4">
              THE DESIGN PROCESS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="font-heading text-4xl text-bynd-flame opacity-50">0{idx + 1}</div>
                  <h3 className="font-heading text-lg text-bynd-ink uppercase">{step.title}</h3>
                  <p className="font-body text-bynd-ash">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12 pt-12 border-t border-bynd-border">
            <h2 className="font-heading font-black uppercase text-[10px] tracking-[0.4em] text-bynd-ink border-b border-black/5 pb-4">
              POPULAR FOCUS AREAS
            </h2>
            <div className="bg-white rounded-3xl border border-bynd-border shadow-soft overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-bynd-border bg-bynd-parchment">
                    <th className="font-heading text-xs text-bynd-ash uppercase tracking-widest p-6 font-normal">Theme</th>
                    <th className="font-heading text-xs text-bynd-ash uppercase tracking-widest p-6 font-normal">Specialized Elements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-bynd-border">
                  {customizations.map((item, idx) => (
                    <tr key={idx} className="hover:bg-bynd-cream/50 transition-colors">
                      <td className="p-6 font-heading text-bynd-ink uppercase text-sm md:text-base">{item.name}</td>
                      <td className="p-6 font-body text-bynd-ash">{item.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-bynd-ink text-white p-10 md:p-16 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="absolute inset-0 bg-dusk opacity-50" />
            <div className="relative z-10 space-y-4 max-w-lg text-center md:text-left">
              <h2 className="font-heading text-2xl uppercase">Investment & Pricing</h2>
              <p className="font-body text-white/80 text-lg">
                Because each journey is unique, pricing varies based on duration, accommodations, and logistics.
              </p>
              <p className="font-ui text-sm text-bynd-flame tracking-widest uppercase pt-2">
                Starting from $350 USD per person / per day
              </p>
            </div>
            <div className="relative z-10 shrink-0">
               <ButtonPrimary label="REQUEST A CONSULTATION" href="/contact" />
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}
