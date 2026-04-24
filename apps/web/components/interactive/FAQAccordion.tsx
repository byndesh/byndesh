'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQ[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-black/5 last:border-0 group">
            <button
              className="flex justify-between items-center w-full text-left py-10 focus:outline-none"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <h3 className={cn(
                "font-heading text-lg md:text-xl tracking-[0.1em] transition-all duration-300 uppercase font-black",
                isOpen ? "text-bynd-flame scale-[1.02]" : "text-bynd-ink group-hover:text-bynd-flame"
              )}>
                {item.question}
              </h3>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border border-black/5 transition-all duration-500",
                isOpen ? "bg-bynd-flame border-bynd-flame rotate-180" : "bg-white group-hover:border-bynd-flame"
              )}>
                <ChevronDown className={cn(
                  "w-5 h-5 transition-colors duration-300",
                  isOpen ? "text-white" : "text-bynd-mist group-hover:text-bynd-flame"
                )} />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                  className="overflow-hidden"
                >
                  <p className="font-body text-bynd-ash leading-[1.8] text-xl pb-10 italic max-w-4xl">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
