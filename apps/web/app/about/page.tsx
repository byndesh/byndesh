import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/typography/SectionTitle';
import { BrandIcon } from '@/components/branding/BrandIcon';

export const metadata: Metadata = {
  title: 'About Us — Bynd BD',
  description: "We didn't start a travel company. We started a homecoming.",
};

export default function AboutPage() {
  return (
    <div className="bg-bynd-cream min-h-screen pb-32">
      <Container className="pt-32 md:pt-48">
        <div className="max-w-5xl mx-auto flex flex-col space-y-16">
          {/* Header */}
          <div className="text-center space-y-8">
            <SectionTitle 
              label="WHO WE ARE" 
              title="We didn't start a travel company. We started a homecoming." 
              className="mb-0"
            />
          </div>

          {/* Intro Body */}
          <div className="font-body text-bynd-ash text-xl md:text-2xl leading-relaxed space-y-10 max-w-4xl mx-auto italic">
            <p>
              <span className="font-heading text-[10px] tracking-widest text-bynd-ink not-italic font-black">BYND BD</span> — 'Beyond' meets 'Desh' (homeland). We are Bangladeshis building the travel agency we wished existed when friends asked us, 'Why should I visit Bangladesh?'
            </p>
            <p>
              The answer was always too big for a text message. So we built this.
            </p>
            <p>
              Bangladesh cradles the largest mangrove swamp in the world, Buddhist kingdoms dated back to the 3rd century B.C., lush tea plantations, stunning beaches, and temples of terracotta.
            </p>
            <p>
              We are a team spread across Dhaka, Sylhet, Bandarban, and Khulna. Between us, we speak Bangla, English, Chakma, and Marma. We've walked every trail we sell and eaten at every table we recommend.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20">
            <div className="p-10 bg-fog rounded-3xl border border-black/5 shadow-sm space-y-6">
               <span className="text-bynd-flame font-heading text-[9px] font-black tracking-[0.4em] uppercase opacity-50 block">PILLAR 01</span>
               <h3 className="font-body italic text-3xl text-bynd-ink leading-tight">People first, always</h3>
               <p className="font-body text-bynd-ash text-lg leading-relaxed">
                 Every trip begins with a person, not a place. We build journeys around life stories because tourism should enrich both sides.
               </p>
            </div>
            
            <div className="p-10 bg-fog rounded-3xl border border-black/5 shadow-sm space-y-6">
               <span className="text-bynd-flame font-heading text-[9px] font-black tracking-[0.4em] uppercase opacity-50 block">PILLAR 02</span>
               <h3 className="font-body italic text-3xl text-bynd-ink leading-tight">Slow travel, deep roots</h3>
               <p className="font-body text-bynd-ash text-lg leading-relaxed">
                 We don't do checklists. Bangladesh's attractions are deeply connected to living culture, rivers, and everyday rhythm.
               </p>
            </div>
            
            <div className="p-10 bg-fog rounded-3xl border border-black/5 shadow-sm space-y-6">
               <span className="text-bynd-flame font-heading text-[9px] font-black tracking-[0.4em] uppercase opacity-50 block">PILLAR 03</span>
               <h3 className="font-body italic text-3xl text-bynd-ink leading-tight">Responsible by default</h3>
               <p className="font-body text-bynd-ash text-lg leading-relaxed">
                 80% of every booking stays in the community. We stay local, eat local, and hire local to empower the delta.
               </p>
            </div>
          </div>

          {/* Founder Quote Area — Sunrise base per rule */}
          <div className="bg-sunrise p-16 md:p-24 rounded-[40px] shadow-premium relative overflow-hidden mt-20">
             {/* Stencil icon background decoration */}
             <div className="absolute top-10 right-10 opacity-10 rotate-12 scale-150">
                <BrandIcon type="support" />
             </div>
             
             <div className="max-w-3xl relative z-10 space-y-12">
                <blockquote className="font-body italic text-4xl md:text-5xl text-bynd-ink leading-tight">
                  "We want the world to fall in love with this delta the way our families do — with a heavy heart for its tides and a light step for its horizons."
                </blockquote>
                <div className="flex items-center gap-6">
                   <div className="w-16 h-px bg-bynd-flame" />
                   <div>
                     <p className="font-heading text-[10px] tracking-[0.25em] text-bynd-flame font-black uppercase">ASFAK CHOWDHURY</p>
                     <p className="font-body italic text-bynd-ink/60">Founder & Curator</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Social Proof Signature */}
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
