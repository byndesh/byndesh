import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy — Bynd BD',
  description: 'How we handle your data.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#FAF9F2] min-h-screen pb-24">
      <Container className="pt-24 md:pt-32">
        <div className="max-w-3xl mx-auto flex flex-col space-y-12">
          
          <div className="space-y-4">
            <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-[0.2em] text-xs">
              LEGAL
            </span>
            <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl text-[#1D1D1B] leading-[1.1]">
              PRIVACY POLICY
            </h1>
            <p className="font-body text-bynd-ash text-sm">Last updated: October 2025</p>
          </div>

          <div className="prose prose-lg text-[#8E8D8A] font-body prose-headings:font-heading prose-headings:font-bold prose-headings:uppercase prose-headings:text-[#1D1D1B] prose-a:text-[#FF5F0F] max-w-none">
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as your name, email address, phone number, passport details (for securing permits in the Sundarbans and Hill Tracts), dietary requirements, and payment information when you book a trip or subscribe to our newsletter.</p>
            
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect strictly to organize your travel, process payments, secure government permits, and send you important updates regarding your booking. We may also use your email to send marketing communications if you have explicitly opted in.</p>
            
            <h2>3. Information Sharing</h2>
            <p>We do not sell your personal data. We only share necessary information (like name and passport details) with the Bangladesh Forest Department, Border Guards Bangladesh (for Hill Tracts entry), and our direct accommodation partners.</p>
            
            <h2>4. Data Retention</h2>
            <p>We retain your passport details only for as long as required to complete your tour and comply with Bangladeshi tourism laws. After the trip, sensitive documents are securely deleted.</p>
            
            <h2>5. Your Rights</h2>
            <p>You have the right to request access to the personal data we hold about you and ask that it be corrected or deleted. Contact us at privacy@byndbd.com.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
