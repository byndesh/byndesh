'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BookingFormData {
  // Step 1
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  referralSource: string;
  // Step 2
  interests: string[];
  travelDates: string;
  flexibility: string;
  duration: string;
  // Step 3
  adults: number;
  children: number;
  childrenAges: string;
  travelingAs: string;
  specialRequirements: string;
  // Step 4
  budget: string;
  accommodation: string;
  additionalNotes: string;
}

const INITIAL_DATA: BookingFormData = {
  fullName: '',
  email: '',
  phone: '',
  nationality: '',
  referralSource: '',
  interests: [],
  travelDates: '',
  flexibility: '',
  duration: '',
  adults: 1,
  children: 0,
  childrenAges: '',
  travelingAs: '',
  specialRequirements: '',
  budget: '',
  accommodation: '',
  additionalNotes: '',
};

const INTEREST_OPTIONS = [
  'River Expeditions',
  'Sundarbans Safaris',
  'Hill Tracts Trekking',
  'Tea Country & Sylhet',
  'Old Dhaka Immersion',
  "Cox's Bazar & Islands",
  'Heritage & Ruins',
  'Tailor-Made — I have my own idea',
  "I don't know yet — surprise me!",
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingFormData>(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (fields: Partial<BookingFormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const toggleInterest = (interest: string) => {
    setData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Booking submission failed:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="font-heading text-2xl text-bynd-ink uppercase mb-4">
          ✅ THANK YOU, {data.fullName.split(' ')[0].toUpperCase()}!
        </p>
        <p className="font-body text-bynd-ash text-lg mb-8">
          Your inquiry has been received. One of our travel experts will reach out within 24 hours with a personalized proposal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/stories" className="font-ui text-bynd-flame hover:underline">
            Browse our stories →
          </Link>
          <Link href="/faq" className="font-ui text-bynd-flame hover:underline">
            Read our FAQ →
          </Link>
        </div>
        <p className="font-accent italic text-bynd-flame mt-8">Your adventure begins now.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-ui text-sm transition ${
              s === step
                ? 'bg-bynd-flame text-white'
                : s < step
                  ? 'bg-bynd-flame/20 text-bynd-flame'
                  : 'bg-bynd-border text-bynd-ash'
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-6">
          <h3 className="font-heading text-xl text-bynd-ink uppercase">WHO ARE YOU?</h3>
          <div>
            <label htmlFor="fullName" className="font-ui text-sm text-bynd-ink block mb-1">FULL NAME *</label>
            <input id="fullName" type="text" required value={data.fullName} onChange={(e) => update({ fullName: e.target.value })} className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="font-ui text-sm text-bynd-ink block mb-1">EMAIL *</label>
            <input id="email" type="email" required value={data.email} onChange={(e) => update({ email: e.target.value })} className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none" />
          </div>
          <div>
            <label htmlFor="phone" className="font-ui text-sm text-bynd-ink block mb-1">PHONE (WITH COUNTRY CODE) *</label>
            <input id="phone" type="tel" required value={data.phone} onChange={(e) => update({ phone: e.target.value })} className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none" />
          </div>
          <div>
            <label htmlFor="nationality" className="font-ui text-sm text-bynd-ink block mb-1">NATIONALITY</label>
            <input id="nationality" type="text" value={data.nationality} onChange={(e) => update({ nationality: e.target.value })} className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none" />
          </div>
          <div>
            <label htmlFor="referral" className="font-ui text-sm text-bynd-ink block mb-1">HOW DID YOU HEAR ABOUT US?</label>
            <select id="referral" value={data.referralSource} onChange={(e) => update({ referralSource: e.target.value })} className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none">
              <option value="">Select...</option>
              <option value="instagram">Instagram</option>
              <option value="google">Google</option>
              <option value="friend">Friend</option>
              <option value="press">Press</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button onClick={nextStep} className="w-full bg-bynd-flame text-white font-ui py-3 rounded-full hover:bg-bynd-flame/90 transition">
            NEXT →
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-6">
          <h3 className="font-heading text-xl text-bynd-ink uppercase">WHAT EXCITES YOU?</h3>
          <div className="space-y-3">
            {INTEREST_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={data.interests.includes(option)} onChange={() => toggleInterest(option)} className="w-5 h-5 accent-bynd-flame" />
                <span className="font-body text-bynd-ink">{option}</span>
              </label>
            ))}
          </div>
          <div>
            <label htmlFor="dates" className="font-ui text-sm text-bynd-ink block mb-1">PREFERRED TRAVEL DATES</label>
            <input id="dates" type="text" placeholder="e.g., November 2026 or Flexible" value={data.travelDates} onChange={(e) => update({ travelDates: e.target.value })} className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none" />
          </div>
          <div>
            <label className="font-ui text-sm text-bynd-ink block mb-2">HOW FLEXIBLE ARE YOUR DATES?</label>
            {['Very flexible', 'Somewhat', 'Fixed'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mb-2 cursor-pointer">
                <input type="radio" name="flexibility" value={opt} checked={data.flexibility === opt} onChange={(e) => update({ flexibility: e.target.value })} className="accent-bynd-flame" />
                <span className="font-body text-bynd-ink">{opt}</span>
              </label>
            ))}
          </div>
          <div>
            <label className="font-ui text-sm text-bynd-ink block mb-2">TRIP DURATION PREFERENCE</label>
            {['2-3 days', '4-7 days', '8-14 days', '15+ days'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mb-2 cursor-pointer">
                <input type="radio" name="duration" value={opt} checked={data.duration === opt} onChange={(e) => update({ duration: e.target.value })} className="accent-bynd-flame" />
                <span className="font-body text-bynd-ink">{opt}</span>
              </label>
            ))}
          </div>
          <div className="flex gap-4">
            <button onClick={prevStep} className="flex-1 border border-bynd-border text-bynd-ink font-ui py-3 rounded-full hover:border-bynd-flame transition">
              ← BACK
            </button>
            <button onClick={nextStep} className="flex-1 bg-bynd-flame text-white font-ui py-3 rounded-full hover:bg-bynd-flame/90 transition">
              NEXT →
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-6">
          <h3 className="font-heading text-xl text-bynd-ink uppercase">WHO&apos;S COMING?</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="adults" className="font-ui text-sm text-bynd-ink block mb-1">ADULTS</label>
              <input id="adults" type="number" min={1} value={data.adults} onChange={(e) => update({ adults: parseInt(e.target.value) || 1 })} className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none" />
            </div>
            <div>
              <label htmlFor="children" className="font-ui text-sm text-bynd-ink block mb-1">CHILDREN</label>
              <input id="children" type="number" min={0} value={data.children} onChange={(e) => update({ children: parseInt(e.target.value) || 0 })} className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none" />
            </div>
          </div>
          {data.children > 0 && (
            <div>
              <label htmlFor="childAges" className="font-ui text-sm text-bynd-ink block mb-1">CHILDREN&apos;S AGES</label>
              <input id="childAges" type="text" placeholder="e.g., 7 and 10" value={data.childrenAges} onChange={(e) => update({ childrenAges: e.target.value })} className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none" />
            </div>
          )}
          <div>
            <label className="font-ui text-sm text-bynd-ink block mb-2">TRAVELING AS</label>
            {['Solo', 'Couple', 'Family', 'Friends', 'Corporate Group'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mb-2 cursor-pointer">
                <input type="radio" name="travelingAs" value={opt} checked={data.travelingAs === opt} onChange={(e) => update({ travelingAs: e.target.value })} className="accent-bynd-flame" />
                <span className="font-body text-bynd-ink">{opt}</span>
              </label>
            ))}
          </div>
          <div>
            <label htmlFor="special" className="font-ui text-sm text-bynd-ink block mb-1">ANY SPECIAL REQUIREMENTS?</label>
            <textarea id="special" rows={3} placeholder="Dietary, accessibility, medical..." value={data.specialRequirements} onChange={(e) => update({ specialRequirements: e.target.value })} className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none resize-none" />
          </div>
          <div className="flex gap-4">
            <button onClick={prevStep} className="flex-1 border border-bynd-border text-bynd-ink font-ui py-3 rounded-full hover:border-bynd-flame transition">
              ← BACK
            </button>
            <button onClick={nextStep} className="flex-1 bg-bynd-flame text-white font-ui py-3 rounded-full hover:bg-bynd-flame/90 transition">
              NEXT →
            </button>
          </div>
        </div>
      )}

      {/* Step 4 */}
      {step === 4 && (
        <div className="space-y-6">
          <h3 className="font-heading text-xl text-bynd-ink uppercase">BUDGET & STYLE</h3>
          <div>
            <label htmlFor="budget" className="font-ui text-sm text-bynd-ink block mb-1">APPROXIMATE BUDGET PER PERSON</label>
            <select id="budget" value={data.budget} onChange={(e) => update({ budget: e.target.value })} className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none">
              <option value="">Select...</option>
              <option value="under-20k">Under ৳20,000 / \$170</option>
              <option value="20k-50k">৳20,000–50,000 / \$170–420</option>
              <option value="50k-100k">৳50,000–100,000 / \$420–840</option>
              <option value="100k-plus">৳100,000+ / \$840+</option>
              <option value="discuss">I&apos;d rather discuss this</option>
            </select>
          </div>
          <div>
            <label className="font-ui text-sm text-bynd-ink block mb-2">ACCOMMODATION PREFERENCE</label>
            {['Local homestays & eco-lodges', 'Mid-range hotels', 'Premium / boutique', 'Mix of everything'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 mb-2 cursor-pointer">
                <input type="radio" name="accommodation" value={opt} checked={data.accommodation === opt} onChange={(e) => update({ accommodation: e.target.value })} className="accent-bynd-flame" />
                <span className="font-body text-bynd-ink">{opt}</span>
              </label>
            ))}
          </div>
          <div>
            <label htmlFor="notes" className="font-ui text-sm text-bynd-ink block mb-1">ANYTHING ELSE YOU&apos;D LIKE US TO KNOW?</label>
            <textarea id="notes" rows={4} placeholder="Any specific horizons you want to explore..." value={data.additionalNotes} onChange={(e) => update({ additionalNotes: e.target.value })} className="w-full border border-bynd-border rounded-xl px-4 py-3 font-body text-bynd-ink bg-white focus:border-bynd-flame focus:outline-none resize-none" />
          </div>
          <div className="flex gap-4">
            <button onClick={prevStep} className="flex-1 border border-bynd-border text-bynd-ink font-ui py-3 rounded-full hover:border-bynd-flame transition">
              ← BACK
            </button>
            <button onClick={handleSubmit} disabled={submitting} className="flex-1 bg-bynd-flame text-white font-ui py-3 rounded-full hover:bg-bynd-flame/90 transition disabled:opacity-50">
              {submitting ? 'SUBMITTING...' : 'SUBMIT INQUIRY →'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
