import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Gift Cards — Bynd BD',
  description: 'Give the gift of Bangladesh. Treat someone to the journey of a lifetime.',
};

export default function GiftCardsPage() {
  const amounts = [5000, 10000, 25000, 50000, 100000];
  const steps = [
    { title: 'Select Value', description: 'Choose from our standard amounts or contact us for a custom value.' },
    { title: 'Personalize', description: 'Add a personal message and the recipient\'s details.' },
    { title: 'Deliver', send: 'Choose to send instantly via email or on a scheduled date.' },
    { title: 'Redeem', description: 'The recipient can apply the value to any Bynd BD journey.' },
  ];

  return (
    <main className="bg-bynd-cream min-h-screen pt-32 pb-24">
      <Container>
        <div className="max-w-5xl mx-auto space-y-24">
          
          <div className="text-center space-y-6">
            <span className="text-bynd-flame font-heading font-black uppercase tracking-[0.4em] text-[10px]">
              BYND BD GIFT CARDS
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-bynd-ink uppercase leading-tight">
              GIVE THE GIFT OF BANGLADESH
            </h1>
            <p className="font-accent italic text-bynd-flame text-2xl">
              an unforgettable journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="bg-bynd-parchment p-10 rounded-3xl border border-bynd-border shadow-soft aspect-[1.6/1] flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-sunrise opacity-20" />
                <div className="relative z-10 flex justify-between items-start">
                  <span className="font-logo text-2xl text-bynd-ink opacity-50 tracking-widest uppercase">Bynd BD</span>
                  <span className="font-heading text-sm text-bynd-flame uppercase tracking-widest">GIFT CARD</span>
                </div>
                <div className="relative z-10">
                  <span className="font-body text-4xl text-bynd-ink italic block">Value: ৳ ________</span>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="font-heading text-xl text-bynd-ink uppercase">How it works</h2>
                <div className="space-y-6">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="font-heading text-bynd-flame text-xl">0{idx + 1}</span>
                      <div>
                        <h3 className="font-heading text-bynd-ink uppercase">{step.title}</h3>
                        <p className="font-body text-bynd-ash">{step.description || step.send}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl border border-bynd-border shadow-premium space-y-8">
              <h2 className="font-heading text-2xl text-bynd-ink uppercase">Purchase Gift Card</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="font-ui text-xs text-bynd-ink uppercase tracking-widest block mb-3">Select Amount (BDT)</label>
                  <div className="flex flex-wrap gap-3">
                    {amounts.map(amount => (
                      <button key={amount} className="border border-bynd-border text-bynd-ink font-body italic text-lg px-6 py-2 rounded-full hover:border-bynd-flame hover:text-bynd-flame transition-colors focus:bg-bynd-flame focus:text-white focus:border-bynd-flame">
                        ৳{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-ui text-xs text-bynd-ink uppercase tracking-widest block mb-2">Recipient Name</label>
                    <input type="text" className="w-full bg-bynd-cream border border-bynd-border rounded-xl px-4 py-3 font-body focus:outline-none focus:border-bynd-flame transition-colors" />
                  </div>
                  <div>
                    <label className="font-ui text-xs text-bynd-ink uppercase tracking-widest block mb-2">Recipient Email</label>
                    <input type="email" className="w-full bg-bynd-cream border border-bynd-border rounded-xl px-4 py-3 font-body focus:outline-none focus:border-bynd-flame transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="font-ui text-xs text-bynd-ink uppercase tracking-widest block mb-2">Personal Message</label>
                  <textarea rows={4} className="w-full bg-bynd-cream border border-bynd-border rounded-xl px-4 py-3 font-body focus:outline-none focus:border-bynd-flame transition-colors resize-none"></textarea>
                </div>

                <button className="w-full bg-bynd-ink text-white font-ui uppercase tracking-widest text-sm py-4 rounded-full hover:bg-bynd-flame transition-colors">
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center border-t border-bynd-border pt-12 max-w-2xl mx-auto">
            <h3 className="font-heading text-sm text-bynd-ash uppercase tracking-widest mb-4">Terms & Conditions</h3>
            <p className="font-ui text-xs text-bynd-silver leading-relaxed">
              Gift cards are non-refundable and cannot be exchanged for cash. Valid for 24 months from the date of purchase. Can be applied to any Bynd BD group expedition or tailor-made journey. See full terms and conditions for details.
            </p>
          </div>

        </div>
      </Container>
    </main>
  );
}
