import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/forms/ContactForm';
import { SectionTitle } from '@/components/typography/SectionTitle';

export const metadata: Metadata = {
  title: 'Contact Us — Bynd BD',
  description: 'Every great journey starts with a conversation.',
};

export default function ContactPage() {
  return (
    <div className="bg-bynd-cream min-h-screen pb-32">
      <Container className="pt-32 md:pt-48">
        <div className="max-w-5xl mx-auto flex flex-col space-y-16">
          {/* Header */}
          <div className="text-center space-y-8">
            <SectionTitle 
              label="GET IN TOUCH" 
              title="Every great journey starts with a conversation." 
              className="mb-0"
            />
            <p className="font-body text-bynd-ash text-xl md:text-2xl max-w-2xl mx-auto italic leading-relaxed">
              Whether you know exactly where you want to go or you simply want to say 'surprise me' — we're here. We respond within 24 hours. Usually faster.
            </p>
          </div>

          {/* Offices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="bg-fog p-10 rounded-3xl border border-black/5 shadow-sm space-y-6">
              <h3 className="font-heading text-[10px] font-black tracking-[0.25em] text-bynd-flame uppercase">DHAKA — HEAD OFFICE</h3>
              <p className="font-body text-bynd-ash text-base leading-relaxed">
                House 12, Road 7, Block F<br />
                Banani, Dhaka 1213<br />
                hello@byndbd.com
              </p>
            </div>
            
            <div className="bg-fog p-10 rounded-3xl border border-black/5 shadow-sm space-y-6">
              <h3 className="font-heading text-[10px] font-black tracking-[0.25em] text-bynd-flame uppercase">SYLHET — NORTHEAST</h3>
              <p className="font-body text-bynd-ash text-base leading-relaxed">
                Zindabazar Road<br />
                Sylhet 3100<br />
                sylhet@byndbd.com
              </p>
            </div>
            
            <div className="bg-fog p-10 rounded-3xl border border-black/5 shadow-sm space-y-6">
              <h3 className="font-heading text-[10px] font-black tracking-[0.25em] text-bynd-flame uppercase">BANDARBAN — HILLS</h3>
              <p className="font-body text-bynd-ash text-base leading-relaxed">
                Main Road, Bandarban<br />
                Bandarban 4600<br />
                hills@byndbd.com
              </p>
            </div>
          </div>

          {/* WhatsApp / Direct Support Callout */}
          <div className="bg-dusk p-12 rounded-[40px] text-center border-gradient-gold shadow-premium relative overflow-hidden">
             <div className="relative z-10 space-y-4">
                <p className="font-body italic text-bynd-gold text-2xl">
                   Prefer a direct line? WhatsApp us anytime.
                </p>
                <p className="font-heading text-white text-xl tracking-[0.3em] font-black">
                   +880 1XX XXXX XXX
                </p>
             </div>
          </div>

          {/* Form */}
          <div className="pt-12">
            <ContactForm />
          </div>

          {/* Social Proof Signature */}
          <div className="pt-12 text-center">
            <span className="font-signature italic text-5xl text-bynd-flame grad-text">
              See you Beyond.
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
