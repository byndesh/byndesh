'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ItineraryDay {
  dayStr: string;
  title: string;
  description: string;
}

interface DayItineraryProps {
  days: ItineraryDay[];
}

export function DayItinerary({ days }: DayItineraryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First day open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col space-y-4">
      {days.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border border-bynd-border rounded-[12px] bg-white overflow-hidden shadow-sm">
            <button
              className="flex justify-between items-center w-full text-left p-6 focus:outline-none focus:bg-gray-50 transition-colors"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="text-[#FF5F0F] font-heading font-bold uppercase tracking-widest text-sm whitespace-nowrap">
                  {item.dayStr}
                </span>
                <h4 className="font-heading font-bold uppercase text-lg text-[#1D1D1B]">
                  {item.title}
                </h4>
              </div>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-[#FF5F0F] flex-shrink-0 ml-4" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#FF5F0F] flex-shrink-0 ml-4" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#FAF9F2] ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 border-t border-bynd-cream">
                <p className="font-body text-[#8E8D8A] leading-relaxed pt-4">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
