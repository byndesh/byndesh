import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/typography/SectionTitle';
import { reader } from '@/lib/keystatic';
import { DocumentRenderer } from '@/components/keystatic/DocumentRenderer';

export const metadata: Metadata = {
  title: 'Careers — Bynd BD',
  description: 'Join the team building the future of adventure travel in the delta.',
};

export default async function CareersPage() {
  const jobs = await reader.collections.job_postings.all();
  const activeJobs = jobs.filter(j => j.entry.active);

  return (
    <div className="bg-bynd-cream min-h-screen pb-32">
      <Container className="pt-32 md:pt-48">
        <div className="max-w-5xl mx-auto flex flex-col space-y-16">
          <div className="text-center space-y-8">
            <SectionTitle 
              label="JOIN THE EXPEDITION" 
              title="We seek the curious, the adventurous, and the seekers of truth." 
              className="mb-0"
            />
            <p className="font-body text-bynd-ash text-xl md:text-2xl max-w-2xl mx-auto italic leading-relaxed">
              Bynd BD is more than a travel company. We are a collective of storytellers, naturalists, and fixers dedicated to the delta.
            </p>
          </div>

          <div className="space-y-12 pt-12">
            <h2 className="font-heading font-black uppercase text-[10px] tracking-[0.4em] text-bynd-ink border-b border-black/5 pb-4">
              OPEN PERMISSIONS
            </h2>
            
            {activeJobs.length > 0 ? (
              <div className="grid grid-cols-1 gap-8">
                {activeJobs.map(job => (
                  <div key={job.slug} className="bg-white p-12 rounded-[40px] border border-black/5 shadow-premium flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="space-y-4 text-center md:text-left">
                       <span className="text-bynd-flame font-heading font-black text-[9px] tracking-widest uppercase">
                          {job.entry.type?.toUpperCase()} · {job.entry.location?.toUpperCase()}
                       </span>
                       <h3 className="font-body italic text-4xl text-bynd-ink">{job.entry.title}</h3>
                       <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                          {job.entry.languages.map(lang => (
                             <span key={lang} className="px-4 py-1 bg-fog rounded-full text-[9px] font-heading font-black text-bynd-mist tracking-widest uppercase">
                                {lang}
                             </span>
                          ))}
                       </div>
                    </div>
                    <button className="bg-ember text-white font-heading font-black uppercase text-[10px] tracking-[0.3em] px-12 py-5 rounded-full shadow-premium hover:scale-105 transition-transform">
                       APPLY NOW
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-fog rounded-3xl border border-black/5">
                <p className="font-body text-bynd-ash italic text-xl">The expedition team is currently full. Check back as we expand our horizons.</p>
              </div>
            )}
          </div>

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
