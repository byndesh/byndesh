'use client';

/**
 * useWishlistStore — saved trips for the current user.
 *
 * PERSIST:
 *   - GUESTS: localStorage (persist middleware) — survives page refresh
 *   - LOGGED-IN USERS: localStorage as optimistic UI + synced to DB wishlists table
 *     Sync is handled by WishlistSync component on session change.
 *
 * Optimistic toggle pattern:
 *   toggle() updates the store immediately → UI shows heart filled instantly
 *   WishlistSync fires the DB write in the background
 *   On error, WishlistSync calls store.remove()/store.add() to revert
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistState {
  /** Array of trip slugs saved to the wishlist */
  slugs: string[];
  /** Slugs currently being synced to DB (used for loading state) */
  pendingSlugs: string[];

  // ── Actions ──────────────────────────────────────────────────
  add: (slug: string) => void;
  remove: (slug: string) => void;
  /** Optimistic toggle — add if not in list, remove if already there */
  toggle: (slug: string) => void;
  has: (slug: string) => boolean;

  /** Replace the entire list (used when syncing from DB on login) */
  hydrate: (slugs: string[]) => void;

  /** Mark slug as pending sync (prevents double-tapping race condition) */
  setPending: (slug: string, pending: boolean) => void;

  /** Clear all wishlisted items (called on sign-out) */
  clear: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      slugs: [],
      pendingSlugs: [],

      add: (slug) =>
        set((s) => ({
          slugs: s.slugs.includes(slug) ? s.slugs : [...s.slugs, slug],
        })),

      remove: (slug) =>
        set((s) => ({ slugs: s.slugs.filter((x) => x !== slug) })),

      toggle: (slug) => {
        const { has, add, remove } = get();
        has(slug) ? remove(slug) : add(slug);
      },

      has: (slug) => get().slugs.includes(slug),

      hydrate: (slugs) => set({ slugs }),

      setPending: (slug, pending) =>
        set((s) => ({
          pendingSlugs: pending
            ? [...s.pendingSlugs, slug]
            : s.pendingSlugs.filter((x) => x !== slug),
        })),

      clear: () => set({ slugs: [], pendingSlugs: [] }),
    }),
    {
      name: 'beyndesh-wishlist',
      // Don't persist pendingSlugs — always starts fresh
      partialize: (state) => ({ slugs: state.slugs }),
    }
  )
);
