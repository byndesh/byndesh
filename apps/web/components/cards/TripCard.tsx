/**
 * @component TripCard
 * @description The core trip listing card — the primary commerce unit.
 *   Displays image, title, location, duration, difficulty, price, and category.
 *   On hover: image zooms, card lifts with shadow, price badge highlights.
 * @param {Object} props
 * @param {string} props.title - Trip name
 * @param {string} props.slug - URL slug for linking
 * @param {string} props.imageUrl - Cover image URL
 * @param {string} [props.imageAlt]
 * @param {string} props.location - Destination name
 * @param {number} props.days - Trip duration in days
 * @param {string} props.price - Display price string (e.g. "৳45,000")
 * @param {'Easy'|'Moderate'|'Challenging'} [props.difficulty]
 * @param {string} [props.category] - Category label
 * @param {string} [props.startDate] - Next departure date
 * @param {boolean} [props.isNew] - Show "NEW" badge
 * @param {string} [props.className]
 * @example
 * <TripCard
 *   title="Sundarbans Mangrove Expedition"
 *   slug="sundarbans-mangrove-expedition"
 *   imageUrl="/images/sundarbans.jpg"
 *   location="Khulna, Bangladesh"
 *   days={4} price="৳42,000"
 *   difficulty="Moderate" category="Wildlife"
 * />
 */

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TripCardProps {
  title: string;
  slug: string;
  imageUrl: string;
  imageAlt?: string;
  location: string;
  days: number;
  price: string;
  difficulty?: 'Easy' | 'Moderate' | 'Challenging';
  category?: string;
  startDate?: string;
  isNew?: boolean;
  className?: string;
}

const difficultyStyles: Record<string, string> = {
  Easy:        'bg-green-100 text-green-800',
  Moderate:    'bg-amber-100 text-amber-800',
  Challenging: 'bg-red-100 text-red-800',
};

export default function TripCard({
  title,
  slug,
  imageUrl,
  imageAlt,
  location,
  days,
  price,
  difficulty,
  category,
  startDate,
  isNew,
  className,
}: TripCardProps) {
  return (
    <article className={cn('group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-card transition-shadow duration-300 hover:shadow-card-hover', className)}>
      <Link href={`/trips/${slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bynd-orange focus-visible:ring-inset" aria-label={`View trip: ${title}`}>
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-bynd-black-100">
          <Image
            src={imageUrl}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />

          {/* Overlay badges */}
          <div className="absolute inset-0 bg-gradient-to-t from-bynd-black/40 via-transparent to-transparent" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {isNew && (
              <span className="rounded-full bg-bynd-orange px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wider text-white">
                New
              </span>
            )}
            {category && (
              <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wider text-bynd-black backdrop-blur-sm">
                {category}
              </span>
            )}
          </div>

          {/* Difficulty badge (bottom-left of image) */}
          {difficulty && (
            <div className="absolute bottom-3 left-3">
              <span className={cn('rounded-full px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wider', difficultyStyles[difficulty] ?? 'bg-gray-100 text-gray-800')}>
                {difficulty}
              </span>
            </div>
          )}
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 p-5">
          {/* Location */}
          <div className="flex items-center gap-1 text-bynd-black-300 mb-2">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
            <span className="font-heading uppercase text-label tracking-wider truncate">{location}</span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold uppercase text-heading-3 text-bynd-black leading-tight mb-3 group-hover:text-bynd-orange transition-colors duration-200 line-clamp-2">
            {title}
          </h3>

          {/* Meta row */}
          <div className="flex items-center gap-3 text-bynd-black-300 mt-auto">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
              <span className="font-heading uppercase text-label">{days} Days</span>
            </div>
            {startDate && (
              <>
                <span className="text-bynd-black-100">·</span>
                <span className="font-heading uppercase text-label">{startDate}</span>
              </>
            )}
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-bynd-black-50">
            <div>
              <span className="font-heading text-label text-bynd-black-300 uppercase tracking-wider block">From</span>
              <span className="font-heading font-black text-body text-bynd-orange">{price}</span>
            </div>
            <span className="flex items-center gap-1 font-heading font-bold uppercase text-label text-bynd-black group-hover:text-bynd-orange group-hover:gap-2 transition-all duration-200">
              View
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
