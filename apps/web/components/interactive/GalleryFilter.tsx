'use client';

import { useState } from 'react';

const FILTERS = [
  'All', 'Rivers & Boats', 'Sundarbans', 'Hill Tracts', 'Sylhet',
  'Dhaka', "Cox's Bazar", 'Heritage', 'People', 'Food', 'Wildlife',
];

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  location: string;
  caption?: string;
  trip?: string;
  photographer?: string;
}

interface GalleryFilterProps {
  items: GalleryItem[];
}

export default function GalleryFilter({ items }: GalleryFilterProps) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? items
    : items.filter((item) => item.category === active);

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-12">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`font-ui text-sm px-4 py-2 rounded-full transition ${
              active === filter
                ? 'bg-bynd-flame text-white'
                : 'bg-bynd-cream text-bynd-ash border border-bynd-border hover:border-bynd-flame'
            }`}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="break-inside-avoid rounded-2xl overflow-hidden bg-white shadow-sm group"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-bynd-flame/20 to-bynd-ink/10 flex items-center justify-center">
              <span className="font-ui text-sm text-bynd-ash">{item.alt}</span>
            </div>
            <div className="p-4">
              <p className="font-ui text-xs text-bynd-flame uppercase">{item.location}</p>
              {item.caption && (
                <p className="font-body text-sm text-bynd-ink mt-1">{item.caption}</p>
              )}
              {item.photographer && (
                <p className="font-body text-xs text-bynd-ash mt-2">
                  Photo by {item.photographer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="font-body text-bynd-ash text-center py-12">
          No photos in this category yet.
        </p>
      )}
    </>
  );
}
