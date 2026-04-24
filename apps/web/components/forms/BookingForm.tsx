'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const nextStep = () => setStep(s => Math.min(4, s + 1));
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      nextStep();
      return;
    }
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  const inputClasses = "w-full bg-white border border-black/5 text-bynd-ink placeholder-bynd-silver/40 px-8 py-4 rounded-full focus:outline-none focus:border-bynd-flame transition-all font-heading text-[10px] tracking-widest uppercase";
  const labelClasses = "block text-bynd-silver font-heading text-[10px] font-black uppercase tracking-[0.25em] mb-4 ml-6";
  const stepLabelClasses = "font-heading text-[10px] font-black uppercase tracking-[0.4em] text-bynd-flame border-b border-bynd-flame/10 pb-2 mb-10 w-fit";

  if (status === 'success') {
    return (
      <div className="bg-fog p-12 md:p-20 rounded-[40px] text-center border border-black/5 shadow-premium">
        <h3 className="font-body italic text-5xl text-bynd-ink mb-8">Journey Recorded.</h3>
        <p className="font-body text-bynd-ash text-xl max-w-lg mx-auto mb-12 italic">
          Your inquiry has been received. One of our curators will reach out within 24 hours with a personalized proposal for your horizon.
        </p>
        <div className="flex flex-col gap-6 justify-center items-center">
          <a href="/trips" className="text-bynd-flame font-heading text-[10px] font-black tracking-widest uppercase hover:underline">Browse Journeys →</a>
          <a href="/faq" className="text-bynd-flame font-heading text-[10px] font-black tracking-widest uppercase hover:underline">Read Guidelines →</a>
        </div>
        <p className="font-signature italic text-bynd-gold mt-16 text-4xl">See you Beyond.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-16 rounded-[40px] border border-black/10 shadow-premium">
      {/* Step Indicator */}
      <div className="flex justify-between mb-16 relative">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/5 -z-10 -translate-y-1/2" />
        <div className="absolute top-1/2 left-0 h-[1px] bg-bynd-flame -z-10 -translate-y-1/2 transition-all duration-700 ease-in-out" style={{ width: `${((step - 1) / 3) * 100}%` }} />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full font-heading font-black text-[10px] transition-all duration-500 border",
            step >= i ? "bg-bynd-flame border-bynd-flame text-white shadow-lg shadow-orange-500/20" : "bg-white border-black/5 text-bynd-mist"
          )}>
            {i}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <div className={stepLabelClasses}>STEP 01 — IDENTITY</div>
              
              <div className="flex flex-col">
                <label className={labelClasses}>Full Name*</label>
                <input required type="text" className={inputClasses} placeholder="YOUR FULL NAME" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label className={labelClasses}>Email Address*</label>
                  <input required type="email" className={inputClasses} placeholder="YOU@DOMAIN.COM" />
                </div>
                <div className="flex flex-col">
                  <label className={labelClasses}>Phone Number*</label>
                  <input required type="tel" className={inputClasses} placeholder="+880..." />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <div className={stepLabelClasses}>STEP 02 — INTERESTS</div>
              <div className="flex flex-col">
                <label className={labelClasses}>Which horizons excite you?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {['RIVER EXPEDITIONS', 'SUNDARBANS SAFARIS', 'HILL TRACTS TREKKING', 'SYLHET & TEA COUNTRY', 'TAILOR-MADE', "SURPRISE ME!"].map((opt) => (
                    <label key={opt} className="group flex items-center space-x-4 bg-fog p-5 border border-black/5 rounded-full cursor-pointer hover:border-bynd-flame transition-all">
                      <input type="checkbox" className="w-4 h-4 text-bynd-flame focus:ring-bynd-flame border-black/10 transition-all" />
                      <span className="text-bynd-ink font-heading text-[10px] tracking-widest font-black group-hover:text-bynd-flame transition-colors">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <div className={stepLabelClasses}>STEP 03 — GROUP</div>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className={labelClasses}>Adults</label>
                  <input type="number" min="1" defaultValue="2" className={inputClasses} />
                </div>
                <div className="flex flex-col">
                  <label className={labelClasses}>Children</label>
                  <input type="number" min="0" defaultValue="0" className={inputClasses} />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className={labelClasses}>Traveling As</label>
                <select className={cn(inputClasses, "appearance-none cursor-pointer")}>
                  <option>SOLO</option>
                  <option>COUPLE</option>
                  <option>FAMILY</option>
                  <option>FRIENDS</option>
                </select>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <div className={stepLabelClasses}>STEP 04 — STYLE</div>
              <div className="flex flex-col">
                <label className={labelClasses}>Budget Per Person</label>
                <select className={cn(inputClasses, "appearance-none cursor-pointer")}>
                  <option>UNDER ৳25,000 / $210</option>
                  <option>৳25,000–75,000 / $210–630</option>
                  <option>৳75,000+ / $630+</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className={labelClasses}>Dream Details</label>
                <textarea rows={4} className={cn(inputClasses, "rounded-3xl resize-none")} placeholder="ANY SEPCIFIC HORIZONS OR REQUIREMENTS?"></textarea>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12 border-t border-black/5 mt-16">
          {step > 1 ? (
             <button 
              type="button" 
              onClick={prevStep} 
              className="w-full sm:w-auto font-heading uppercase font-black text-[10px] tracking-[0.3em] text-bynd-mist hover:text-bynd-ink transition-colors py-2 text-center"
             >
               ← BACK
             </button>
          ) : <div className="hidden sm:block" />}
          
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto bg-ember text-white font-heading uppercase text-xs font-black tracking-[0.3em] px-16 py-6 rounded-full shadow-premium hover:shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50"
          >
            {step === 4 ? (status === 'submitting' ? 'RECORDING...' : 'FINALIZE REQUEST') : 'NEXT STEP →'}
          </button>
        </div>
      </form>
    </div>
  );
}
