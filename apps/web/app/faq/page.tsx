import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { FAQAccordion } from '@/components/interactive/FAQAccordion';
import { SectionTitle } from '@/components/typography/SectionTitle';

export const metadata: Metadata = {
  title: 'Questions & Answers — Bynd BD',
  description: 'Everything you need to know before you go.',
};

export default function FAQPage() {
  const faqItems = [
    {
      question: "Is Bangladesh safe for tourists?",
      answer: "Yes, Bangladesh is generally safe for tourists. Most Bangladeshis are welcoming and hospitable to foreign visitors. We provide 24/7 local support on every trip because we believe safety is the foundation of every great discovery."
    },
    {
      question: "Do I need a visa?",
      answer: "Most visitors need a visa to enter Bangladesh. e-Visas are available for many nationalities through the official portal. We provide a full visa support letter and administrative assistance for all our booked guests."
    },
    {
      question: "When is the best time to visit?",
      answer: "The dry season (November to February) offers the most comfortable temperatures. However, the monsoon (June–September) is truly the 'Last Light' of the delta — offering lush greenery and floating river markets unique to the season."
    },
    {
      question: "How much does a trip cost?",
      answer: "Our curated journeys range from ৳15,000 / $125 for regional immersions to ৳125,000 / $1,050 for multi-week expeditions. This includes all heritage stays, private transport, and your local 'Bynd' guide."
    },
    {
      question: "Do I need permits for the Hill Tracts?",
      answer: "Foreign nationals require special permits for the Bandarban and Rangamati regions. Bynd BD handles the entire application process with local authorities on your behalf, included in the journey cost."
    },
    {
      question: "What languages do people speak?",
      answer: "Bangla is the pulse of the nation. Most people in city centers understand English. Our journeys often venture into indigenous lands speaking Chakma, Marma, or Mro — your guide acts as a cultural bridge for these deep conversations."
    }
  ];

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
            <FAQAccordion items={faqItems} />
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
