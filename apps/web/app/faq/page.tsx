import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { FAQAccordion } from '@/components/interactive/FAQAccordion';
import { SectionTitle } from '@/components/typography/SectionTitle';
import { reader } from '@/lib/keystatic';

export const metadata: Metadata = {
  title: 'Questions & Answers — Bynd BD',
  description: 'Everything you need to know before you go.',
};

export default async function FAQPage() {
  const faqData = await reader.collections.faq_items.all();
  
  // Sort by order field
  const sortedFaqs = faqData
    .map(f => ({
      question: f.entry.question ?? '',
      answer: f.entry.answer,
      order: f.entry.order || 99,
    }))
    .sort((a, b) => a.order - b.order);

  return (
    <div className="bg-bynd-cream min-h-screen pb-32">
      <Container className="pt-32 md:pt-48">
        <div className="max-w-5xl mx-auto flex flex-col space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-8">
            <SectionTitle 
              label="QUESTIONS & ANSWERS" 
              title="Everything you need to know before you go." 
              className="mb-0"
            />
            <p className="font-body text-bynd-ash text-xl md:text-2xl max-w-2xl mx-auto italic leading-relaxed">
              Preparing for a journey beyond the horizon requires clarity. If your question isn't answered here, reach out to our concierge.
            </p>
          </div>

          {/* FAQ Accordion — Fog Panel Pattern */}
          <div className="bg-fog rounded-[40px] p-8 md:p-20 border border-black/5 shadow-premium mt-12">
            {sortedFaqs.length > 0 ? (
              <FAQAccordion items={sortedFaqs} />
            ) : (
              <p className="text-center font-body text-bynd-ash italic">No FAQ items found in CMS.</p>
            )}
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
