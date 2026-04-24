import { Metadata } from 'next';
import NewsletterForm from '@/components/forms/NewsletterForm';

export const metadata: Metadata = {
  title: 'Join the Bynd BD Club — Bynd BD',
  description: 'Join our exclusive club for early access to expeditions, special offers, and stories from the delta.',
};

export default function ClubPage() {
  const benefits = [
    'Early access to limited-availability expeditions',
    'Exclusive invitations to member-only journeys',
    'Monthly dispatches and stories from the delta',
    'Complimentary upgrades when available',
  ];

  return (
    <main className="pt-32 pb-24 bg-bynd-cream min-h-screen">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="font-ui text-sm text-bynd-flame uppercase tracking-wider block mb-4">
          BYND BD CLUB
        </span>
        <p className="font-accent italic text-bynd-flame text-2xl mb-4">
          for the seekers
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-bynd-ink uppercase mb-8">
          JOIN THE EXPLORATION
        </h1>
        <p className="font-body text-bynd-ash text-lg md:text-xl leading-relaxed mb-12">
          The delta reveals its secrets slowly. Join our inner circle to receive curated stories, upcoming expedition announcements, and invitations to exclusive journeys before they are shared publicly.
        </p>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-bynd-border mb-16 text-left">
          <h2 className="font-heading text-xl text-bynd-ink uppercase mb-6 text-center">
            MEMBER BENEFITS
          </h2>
          <ul className="space-y-4 font-body text-bynd-ink text-lg max-w-lg mx-auto">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-bynd-flame shrink-0">✦</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-xl mx-auto bg-bynd-ink p-8 md:p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-sunrise opacity-10" />
          <div className="relative z-10 text-left">
            <h3 className="font-heading text-2xl text-white uppercase mb-4 text-center">
              BECOME A MEMBER
            </h3>
            <p className="font-body text-white/80 text-center mb-8">
              Enter your email to join the Bynd BD Club. Membership is complimentary.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </main>
  );
}
