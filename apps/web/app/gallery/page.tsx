'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionTitle } from '@/components/typography/SectionTitle';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const filters = ['ALL', 'RIVERS & BOATS', 'SUNDARBANS', 'HILL TRACTS', 'SYLHET', 'DHAKA', 'PEOPLE', 'FOOD'];

  return (
    <div className="bg-bynd-cream min-h-screen pb-32">
      <Container className="pt-32 md:pt-48">
        <div className="max-w-6xl mx-auto flex flex-col space-y-16">
          {/* Header */}
          <div className="text-center space-y-8">
            <SectionTitle 
              label="GALLERY" 
              title="See Bangladesh through our eyes." 
              className="mb-0"
            />
            <p className="font-body text-bynd-ash text-xl md:text-2xl max-w-2xl mx-auto italic leading-relaxed">
              These aren't stock photos. Every image was taken by our curators or travelers during real Bynd BD journeys. This is the delta beyond the last light.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 pt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full font-heading uppercase text-[10px] tracking-[0.2em] font-black transition-all border ${
                  activeFilter === filter 
                    ? 'border-bynd-flame bg-bynd-flame text-white shadow-lg shadow-orange-500/20' 
                    : 'border-black/5 text-bynd-mist hover:bg-white hover:border-bynd-flame hover:text-bynd-flame'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Featured Video Section — Dusk Panel Pattern */}
          <div className="w-full pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col bg-dusk rounded-[40px] overflow-hidden shadow-premium aspect-video relative group border border-white/5">
                <div className="absolute inset-0 bg-sunrise opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bynd-ink/80 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                   <div className="w-20 h-20 bg-ember rounded-full flex items-center justify-center cursor-pointer transition-transform group-hover:scale-110 shadow-lg">
                     <span className="text-white text-2xl ml-2">▶</span>
                   </div>
                </div>
                <div className="absolute bottom-10 left-10 z-30">
                  <span className="text-bynd-gold font-heading text-[9px] font-black tracking-widest uppercase block mb-2">CINEMATIC JOURNEY</span>
                  <h3 className="font-body italic text-white text-3xl">The Delta Song</h3>
                </div>
              </div>

              <div className="flex flex-col bg-dusk rounded-[40px] overflow-hidden shadow-premium aspect-video relative group border border-white/5">
                <div className="absolute inset-0 bg-sunrise opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bynd-ink/80 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                   <div className="w-20 h-20 bg-ember rounded-full flex items-center justify-center cursor-pointer transition-transform group-hover:scale-110 shadow-lg">
                     <span className="text-white text-2xl ml-2">▶</span>
                   </div>
                </div>
                <div className="absolute bottom-10 left-10 z-30">
                  <span className="text-bynd-gold font-heading text-[9px] font-black tracking-widest uppercase block mb-2">LOCAL DISCOURSE</span>
                  <h3 className="font-body italic text-white text-3xl">Voices of Bandarban</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Masonry Photo Grid Placeholder — Applying 24px Card rule */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 pt-12 space-y-8">
            <div className="relative break-inside-avoid shadow-sm rounded-3xl overflow-hidden bg-fog border border-black/5 group">
              <div className="w-full aspect-[4/5] bg-bynd-charcoal opacity-40 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-bynd-ink/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-bynd-flame font-heading font-black uppercase text-[9px] tracking-widest mb-2 block">SUNDARBANS</span>
                <p className="text-white font-body italic text-lg line-clamp-2 mb-4">A Royal Bengal Tiger caught on camera during a misty morning tracking expedition.</p>
                <div className="w-8 h-px bg-bynd-gold opacity-50" />
              </div>
            </div>

            <div className="relative break-inside-avoid shadow-sm rounded-3xl overflow-hidden bg-fog border border-black/5 group">
              <div className="w-full aspect-[3/2] bg-bynd-charcoal opacity-40 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-bynd-ink/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-bynd-flame font-heading font-black uppercase text-[9px] tracking-widest mb-2 block">BARISAL</span>
                <p className="text-white font-body italic text-lg line-clamp-2 mb-4">The vibrant floating guava market at dawn. Trading happens entirely boat-to-boat.</p>
                <div className="w-8 h-px bg-bynd-gold opacity-50" />
              </div>
            </div>

            <div className="relative break-inside-avoid shadow-sm rounded-3xl overflow-hidden bg-fog border border-black/5 group">
              <div className="w-full aspect-square bg-bynd-charcoal opacity-40 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-bynd-ink/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-bynd-flame font-heading font-black uppercase text-[9px] tracking-widest mb-2 block">PEOPLE</span>
                <p className="text-white font-body italic text-lg line-clamp-2 mb-4">Plucking the two leaves and a bud in Sreemangal's estate.</p>
                <div className="w-8 h-px bg-bynd-gold opacity-50" />
              </div>
            </div>

            {/* Additional placeholders for balance */}
            <div className="relative break-inside-avoid shadow-sm rounded-3xl overflow-hidden bg-fog border border-black/5 group aspect-[2/3]" />
            <div className="relative break-inside-avoid shadow-sm rounded-3xl overflow-hidden bg-fog border border-black/5 group aspect-square" />
            <div className="relative break-inside-avoid shadow-sm rounded-3xl overflow-hidden bg-fog border border-black/5 group aspect-[4/3]" />
          </div>

          <div className="pt-20 text-center">
            <span className="font-signature italic text-5xl text-bynd-flame grad-text">
              Every photo tells a journey.
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
