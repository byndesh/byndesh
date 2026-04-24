import BookingForm from '@/components/forms/BookingForm';

export const metadata = {
  title: 'Book Your Journey — Bynd BD',
  description: 'Start planning your Bangladesh adventure. Fill out our inquiry form and our travel experts will craft your perfect trip.',
};

export default function BookingPage() {
  return (
    <main className="pt-32 pb-20 bg-bynd-cream min-h-screen">
      <div className="mx-auto max-w-2xl px-6">
        <span className="font-ui text-sm text-bynd-flame uppercase tracking-wider">
          BOOK YOUR JOURNEY
        </span>
        <h1 className="font-heading text-4xl md:text-5xl text-bynd-ink uppercase mt-4 mb-4">
          LET&apos;S BUILD YOUR<br />ADVENTURE TOGETHER.
        </h1>
        <p className="font-body text-bynd-ash text-lg mb-12">
          This is the beginning, not a commitment. Fill out what you know, leave blank what you don&apos;t. Our team will respond within 24 hours with a personalized proposal.
        </p>
        <BookingForm />
      </div>
    </main>
  );
}
