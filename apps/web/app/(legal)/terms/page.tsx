import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Terms of Service — Bynd BD',
  description: 'Legal terms and conditions for traveling with Bynd BD.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#FAF9F2] min-h-screen pb-24">
      <Container className="pt-24 md:pt-32">
        <div className="max-w-3xl mx-auto flex flex-col space-y-12">
          
          <div className="space-y-4">
            <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-[0.2em] text-xs">
              LEGAL
            </span>
            <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl text-[#1D1D1B] leading-[1.1]">
              TERMS OF SERVICE
            </h1>
            <p className="font-body text-bynd-ash text-sm">Last updated: October 2025</p>
          </div>

          <div className="prose prose-lg text-[#8E8D8A] font-body prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-headings:text-[#1D1D1B] prose-a:text-[#FF5F0F] max-w-none">
            <h2>1. Booking & Payments</h2>
            <p>A deposit of 30% is required to confirm any tailor-made or scheduled group journey. The remaining balance must be paid 30 days prior to the start of the tour. For bookings made within 30 days of departure, full payment is required immediately.</p>
            
            <h2>2. Cancellations & Refunds</h2>
            <p>If you cancel the tour:</p>
            <ul>
              <li>More than 60 days before departure: Full refund minus a $50 administrative fee.</li>
              <li>30-59 days before departure: 50% refund.</li>
              <li>Less than 30 days before departure: No refund possible due to non-refundable commitments made to local operators and lodges.</li>
            </ul>

            <h2>3. Itinerary Changes</h2>
            <p>Travel in Bangladesh can be unpredictable due to weather, shifting river channels, and occasional hartals (strikes). Bynd BD reserves the right to alter itineraries if required by local conditions. In such cases, we will provide alternatives of equal or higher value.</p>
            
            <h2>4. Liability & Insurance</h2>
            <p>Comprehensive travel insurance covering medical evacuation is mandatory for all Bynd BD travelers. We accept no liability for loss, injury, or damage to personal property sustained during the trip.</p>
            
            <h2>5. Conduct</h2>
            <p>We work in conservative and sensitive areas, including rural villages and remote Indigenous communities in the Hill Tracts. Travelers are expected to follow the guidance of their Bynd BD tour leader regarding appropriate dress and behavior.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
