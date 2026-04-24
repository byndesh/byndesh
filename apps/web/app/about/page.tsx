import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/typography/SectionTitle';
import { BrandIcon } from '@/components/branding/BrandIcon';
import { reader } from '@/lib/keystatic';

export const metadata: Metadata = {
  title: 'About Us — Bynd BD',
  description: "We didn't start a travel company. We started a homecoming.",
};

export default async function AboutPage() {
  const team = await reader.collections.team_members.all();

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
              <span className="font-heading text-[10px] tracking-widest text-bynd-ink not-italic font-black uppercase">BYND BD</span> — 'Beyond' meets 'Desh' (homeland). We are Bangladeshis building the travel agency we wished existed when friends asked us, 'Why should I visit Bangladesh?'
            </p>
            <p>
              The answer was always too big for a text message. So we built this.
            </p>
            <p>
              Bangladesh cradles the largest mangrove swamp in the world, Buddhist kingdoms dated back to the 3rd century B.C., lush tea plantations, stunning beaches, and temples of terracotta.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
            <div className="p-10 bg-fog rounded-3xl border border-black/5 shadow-sm space-y-6">
               <span className="text-bynd-flame font-heading text-[9px] font-black tracking-[0.4em] uppercase opacity-50 block">PILLAR 01</span>
               <h3 className="font-body italic text-3xl text-bynd-ink leading-tight">People first, always</h3>
               <p className="font-body text-bynd-ash text-lg leading-relaxed">
                 Every trip begins with a person, not a place. We build journeys around life stories.
               </p>
            </div>
            
            <div className="p-10 bg-fog rounded-3xl border border-black/5 shadow-sm space-y-6">
               <span className="text-bynd-flame font-heading text-[9px] font-black tracking-[0.4em] uppercase opacity-50 block">PILLAR 02</span>
               <h3 className="font-body italic text-3xl text-bynd-ink leading-tight">Slow travel, deep roots</h3>
               <p className="font-body text-bynd-ash text-lg leading-relaxed">
                 We don't do checklists. This delta's pulse is best felt at the speed of a river.
               </p>
            </div>
            
            <div className="p-10 bg-fog rounded-3xl border border-black/5 shadow-sm space-y-6">
               <span className="text-bynd-flame font-heading text-[9px] font-black tracking-[0.4em] uppercase opacity-50 block">PILLAR 03</span>
               <h3 className="font-body italic text-3xl text-bynd-ink leading-tight">Responsible by default</h3>
               <p className="font-body text-bynd-ash text-lg leading-relaxed">
                 80% of every booking stays in the community. We stay local, eat local, and hire local.
               </p>
            </div>
          </div>

          {/* Team Section — CMS BAKED */}
          <div className="pt-24 space-y-12">
            <SectionTitle label="OUR HUMANS" title="Meet the souls of Bynd BD." center />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map(member => (
                <div key={member.slug} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-premium border border-black/5">
                  <div className="aspect-[4/5] bg-bynd-charcoal relative w-full opacity-90" />
                  <div className="p-8 flex flex-col flex-1">
                    <h4 className="font-body italic text-2xl text-bynd-ink mb-1">
                      {member.entry.name}
                    </h4>
                    <p className="text-bynd-flame font-heading font-black uppercase text-[10px] tracking-widest mb-4">
                      {member.entry.role} · {member.entry.region}
                    </p>
                    <p className="font-body text-bynd-ash text-base leading-relaxed italic line-clamp-3">
                      "Favorite experience: {member.entry.favorite_experience}"
                    </p>
                  </div>
                </div>
              ))}
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
