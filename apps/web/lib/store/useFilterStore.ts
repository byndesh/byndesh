'use client';

/**
 * useFilterStore — trip/content filter state.
 *
 * PERSIST: URL params via nuqs (NOT localStorage).
 * This store is the in-memory mirror of URL search params.
 * nuqs is the bridge: store updates → URL, URL changes → store.
 *
 * Usage pattern:
 *   1. Components read from this store (fast, synchronous)
 *   2. Components write to this store via set* actions
 *   3. A <FilterSync /> client component syncs store ↔ nuqs ↔ URL
 *
 * URL format: /trips?category=kayaking&difficulty=moderate&duration=3-5&sort=price-asc
 */
import { create } from 'zustand';

export type SortOption =
  | 'price-asc'
  | 'price-desc'
  | 'duration-asc'
  | 'duration-desc'
  | 'newest'
  | 'popular';

export type DifficultyFilter = 'Easy' | 'Moderate' | 'Challenging' | null;

export interface DurationRange {
  min: number | null; // days
  max: number | null;
}

export interface PriceRange {
  min: number; // BDT
  max: number;
}

interface FilterState {
  // ── Active filter values ─────────────────────────────────────
  search: string;
  category: string | null;       // Trip category slug
  destination: string | null;    // Destination slug
  difficulty: DifficultyFilter;
  duration: DurationRange;
  price: PriceRange;
  sort: SortOption;
  page: number;

  // ── Computed ─────────────────────────────────────────────────
  /** True if any filter differs from its default value */
  hasActiveFilters: () => boolean;
  /** Active filter count (for badge display) */
  activeFilterCount: () => number;

  // ── Actions ──────────────────────────────────────────────────
  setSearch: (q: string) => void;
  setCategory: (category: string | null) => void;
  setDestination: (destination: string | null) => void;
  setDifficulty: (difficulty: DifficultyFilter) => void;
  setDuration: (duration: DurationRange) => void;
  setPriceRange: (price: PriceRange) => void;
  setSort: (sort: SortOption) => void;
  setPage: (page: number) => void;

  /** Reset all filters to defaults (also resets URL via nuqs) */
  reset: () => void;
}

export const FILTER_DEFAULTS = {
  search: '',
  category: null,
  destination: null,
  difficulty: null as DifficultyFilter,
  duration: { min: null, max: null } as DurationRange,
  price: { min: 0, max: 500000 } as PriceRange,
  sort: 'newest' as SortOption,
  page: 1,
} as const;

export const useFilterStore = create<FilterState>((set, get) => ({
  ...FILTER_DEFAULTS,

  hasActiveFilters: () => {
    const s = get();
    return (
      s.search !== '' ||
      s.category !== null ||
      s.destination !== null ||
      s.difficulty !== null ||
      s.duration.min !== null ||
      s.duration.max !== null ||
      s.price.min !== FILTER_DEFAULTS.price.min ||
      s.price.max !== FILTER_DEFAULTS.price.max ||
      s.sort !== FILTER_DEFAULTS.sort
    );
  },

  activeFilterCount: () => {
    const s = get();
    let count = 0;
    if (s.search) count++;
    if (s.category) count++;
    if (s.destination) count++;
    if (s.difficulty) count++;
    if (s.duration.min !== null || s.duration.max !== null) count++;
    if (s.price.min !== FILTER_DEFAULTS.price.min || s.price.max !== FILTER_DEFAULTS.price.max) count++;
    if (s.sort !== FILTER_DEFAULTS.sort) count++;
    return count;
  },

  setSearch: (search) => set({ search, page: 1 }),
  setCategory: (category) => set({ category, page: 1 }),
  setDestination: (destination) => set({ destination, page: 1 }),
  setDifficulty: (difficulty) => set({ difficulty, page: 1 }),
  setDuration: (duration) => set({ duration, page: 1 }),
  setPriceRange: (price) => set({ price, page: 1 }),
  setSort: (sort) => set({ sort }),
  setPage: (page) => set({ page }),

  reset: () => set({ ...FILTER_DEFAULTS }),
}));
