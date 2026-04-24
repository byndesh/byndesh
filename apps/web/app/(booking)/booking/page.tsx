import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { BookingForm } from '@/components/forms/BookingForm';
import { SectionTitle } from '@/components/typography/SectionTitle';

export const metadata: Metadata = {
  title: 'Book Your Journey — Bynd BD',
  description: "Let's build your adventure together.",
};

export default function BookingPage() {
  return (
    <div className="bg-bynd-cream min-h-screen pb-32">
      <Container className="pt-32 md:pt-48">
        <div className="max-w-4xl mx-auto flex flex-col space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-8">
            <SectionTitle 
              label="BOOK YOUR JOURNEY" 
              title="Let's build your adventure together." 
              className="mb-0"
            />
            <p className="font-body text-bynd-ash text-xl md:text-2xl italic leading-relaxed max-w-3xl mx-auto">
              This is the beginning, not a commitment. Fill out what you know, leave blank what you don't. We will respond with a personalized proposal within 24 hours.
            </p>
          </div>

          <div className="pt-12">
            <BookingForm />
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
