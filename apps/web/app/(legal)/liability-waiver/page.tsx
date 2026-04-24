import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Liability Waiver — Bynd BD',
  description: 'Assumption of risk for adventure travel.',
};

export default function LiabilityWaiverPage() {
  return (
    <div className="bg-[#FAF9F2] min-h-screen pb-24">
      <Container className="pt-24 md:pt-32">
        <div className="max-w-3xl mx-auto flex flex-col space-y-12">
          
          <div className="space-y-4">
            <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-[0.2em] text-xs">
              LEGAL
            </span>
            <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl text-[#1D1D1B] leading-[1.1]">
              LIABILITY WAIVER
            </h1>
          </div>

          <div className="prose prose-lg text-[#8E8D8A] font-body prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-headings:text-[#1D1D1B] max-w-none">
            <p>Travel in Bangladesh, especially to remote areas like the Sundarbans and Hill Tracts, involves inherent risks.</p>
            
            <h2>Assumption of Risk</h2>
            <p>By booking a trip with Bynd BD, you acknowledge that you are participating in adventure travel that may involve risks including, but not limited to, wildlife encounters, unpredictable weather, limited access to medical facilities, and transportation on uneven roads or waterways.</p>

            <h2>Release of Liability</h2>
            <p>You agree to release Bynd BD, its employees, and its local partners from liability for any personal injury, property damage, or loss sustained during the trip, except where such loss is caused by our gross negligence.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
