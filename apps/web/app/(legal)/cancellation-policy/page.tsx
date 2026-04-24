import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Cancellation Policy — Bynd BD',
  description: 'Our cancellation and refund policies.',
};

export default function CancellationPolicyPage() {
  return (
    <div className="bg-[#FAF9F2] min-h-screen pb-24">
      <Container className="pt-24 md:pt-32">
        <div className="max-w-3xl mx-auto flex flex-col space-y-12">
          
          <div className="space-y-4">
            <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-[0.2em] text-xs">
              LEGAL
            </span>
            <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl text-[#1D1D1B] leading-[1.1]">
              CANCELLATION POLICY
            </h1>
          </div>

          <div className="prose prose-lg text-[#8E8D8A] font-body prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-headings:text-[#1D1D1B] max-w-none">
            <p>Because our trips involve strict permitting, remote logistics, and non-refundable deposits to local communities, our cancellation policy is firm.</p>
            
            <h2>Standard Cancellations</h2>
            <ul>
              <li><strong>60+ days before departure:</strong> Full refund minus ৳5,000 / $50 admin fee.</li>
              <li><strong>30–59 days before departure:</strong> 50% refund.</li>
              <li><strong>Under 30 days:</strong> No refund.</li>
            </ul>

            <h2>Force Majeure</h2>
            <p>If Bynd BD cancels a trip due to security concerns, severe weather, or unnavigable rivers, you will receive a 100% refund or the option to reschedule.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
