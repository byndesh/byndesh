'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistState {
  slugs: string[];
  add: (slug: string) => void;
  remove: (slug: string) => void;
  toggle: (slug: string) => void;
  has: (slug: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      slugs: [],
      add: (slug) => set((s) => ({ slugs: [...s.slugs, slug] })),
      remove: (slug) => set((s) => ({ slugs: s.slugs.filter((x) => x !== slug) })),
      toggle: (slug) => get().has(slug) ? get().remove(slug) : get().add(slug),
      has: (slug) => get().slugs.includes(slug),
    }),
    { name: 'bynd-wishlist' }
  )
);
