'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-fog p-12 rounded-3xl text-center border border-black/5 shadow-premium">
        <h3 className="font-body italic text-4xl text-bynd-ink mb-6">Conversation Started</h3>
        <p className="font-body text-bynd-ash text-lg max-w-sm mx-auto">
          Thank you for reaching out. We respond to every letter within 24 hours. Usually faster.
        </p>
      </div>
    );
  }

  const inputClasses = "w-full bg-white border border-black/5 text-bynd-ink placeholder-bynd-silver/40 px-8 py-4 rounded-full focus:outline-none focus:border-bynd-flame transition-all font-heading text-[10px] tracking-widest uppercase";
  const labelClasses = "block text-bynd-silver font-heading text-[10px] font-black uppercase tracking-[0.25em] mb-3 ml-6";

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-16 rounded-[40px] border border-black/10 shadow-premium flex flex-col space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <label htmlFor="name" className={labelClasses}>Full Name*</label>
          <input required id="name" type="text" className={inputClasses} placeholder="YOUR NAME" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className={labelClasses}>Email Address*</label>
          <input required id="email" type="email" className={inputClasses} placeholder="YOU@DOMAIN.COM" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <label htmlFor="origin" className={labelClasses}>Where are you from?</label>
          <input id="origin" type="text" className={inputClasses} placeholder="CITY, COUNTRY" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dates" className={labelClasses}>When traveling?</label>
          <input id="dates" type="text" className={inputClasses} placeholder="E.G. NOV 2026" />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="interest" className={labelClasses}>What interests you most?</label>
        <select id="interest" className={cn(inputClasses, "appearance-none cursor-pointer")}>
          <option>RIVERS & BOATS</option>
          <option>SUNDARBANS & WILDLIFE</option>
          <option>HILL TRACTS & TREKKING</option>
          <option>SYLHET & TEA COUNTRY</option>
          <option>I DON'T KNOW YET — SURPRISE ME!</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className={labelClasses}>Dream Journey Details</label>
        <textarea id="message" rows={5} className={cn(inputClasses, "rounded-3xl resize-none")} placeholder="TELL US ABOUT THE HORIZON YOU SEEK..."></textarea>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-ember text-white font-heading uppercase text-xs font-bold tracking-[0.3em] py-6 rounded-full shadow-premium hover:shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
        >
          {status === 'submitting' ? 'SENDING JOURNEY REQUEST...' : 'SEND MESSAGE'}
        </button>
      </div>
    </form>
  );
}
