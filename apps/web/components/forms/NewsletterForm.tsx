'use client';

import { useState } from 'react';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Newsletter error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-bynd-gold bg-bynd-ink/5 border border-black/5 px-8 py-4 rounded-xl shadow-premium">
        ✅ Welcome to the Bynd BD Club
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="relative flex-1">
          <input 
            type="email" 
            placeholder="DISCOVER@BYND.TRAVEL" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white border border-black/5 text-bynd-ink placeholder-bynd-silver/40 px-8 py-4 rounded-full focus:outline-none focus:border-bynd-flame shadow-sm transition-all font-heading text-[10px] tracking-widest"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 10h16M15 7l3 3-3 3" /></svg>
          </div>
        </div>
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="bg-ember text-white font-heading uppercase text-[10px] font-bold tracking-[0.2em] px-12 py-4 rounded-full shadow-premium hover:shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 min-w-[160px]"
        >
          {status === 'submitting' ? 'JOINING...' : 'JOIN CLUB'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-[9px] font-heading text-red-500 mt-3 uppercase tracking-wider text-center sm:text-left pl-6">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}

export default NewsletterForm;
