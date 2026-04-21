'use client';

/**
 * useBookingStore — multi-step booking wizard state.
 *
 * PERSIST: NO — resets on page navigation away from booking flow.
 * 4 steps: (1) Trip selection → (2) Dates & Travelers → (3) Preferences → (4) Contact & Confirm
 *
 * Currency lives in useCurrencyStore (persisted). This store only holds
 * booking-specific transient state.
 */
import { create } from 'zustand';

export type BookingStep = 1 | 2 | 3 | 4;

export interface TravelerInfo {
  adults: number;
  children: number;
  infants: number;
}

export interface BookingPreferences {
  accommodationType: 'standard' | 'premium' | 'luxury' | null;
  dietaryRequirements: string[];
  specialRequirements: string;
}

export interface BookingContactInfo {
  name: string;
  email: string;
  phone: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
}

interface BookingState {
  // ── Step tracking ────────────────────────────────────────────
  step: BookingStep;

  // ── Step 1: Trip selection ───────────────────────────────────
  tripSlug: string | null;
  tripTitle: string | null;
  tripPriceBDT: number | null;
  departureDateId: string | null; // References a CmsTrip departure date ID

  // ── Step 2: Dates & Travelers ────────────────────────────────
  startDate: string | null; // ISO date string
  endDate: string | null;
  travelers: TravelerInfo;

  // ── Step 3: Preferences ──────────────────────────────────────
  preferences: BookingPreferences;

  // ── Step 4: Contact info ─────────────────────────────────────
  contact: BookingContactInfo;

  // ── Derived ──────────────────────────────────────────────────
  /** Total number of paying travelers (adults + children, not infants) */
  totalTravelers: () => number;

  // ── Actions ──────────────────────────────────────────────────
  setStep: (step: BookingStep) => void;
  nextStep: () => void;
  prevStep: () => void;

  setTrip: (slug: string, title: string, priceBDT: number, departureDateId?: string) => void;
  setDates: (start: string, end: string) => void;
  setTravelers: (travelers: Partial<TravelerInfo>) => void;
  setPreferences: (prefs: Partial<BookingPreferences>) => void;
  setContact: (contact: Partial<BookingContactInfo>) => void;

  /** Hard reset — called when user leaves booking flow */
  reset: () => void;
}

const DEFAULT_TRAVELERS: TravelerInfo = { adults: 1, children: 0, infants: 0 };
const DEFAULT_PREFERENCES: BookingPreferences = {
  accommodationType: null,
  dietaryRequirements: [],
  specialRequirements: '',
};
const DEFAULT_CONTACT: BookingContactInfo = {
  name: '',
  email: '',
  phone: '',
  emergencyContactName: '',
  emergencyContactPhone: '',
};

export const useBookingStore = create<BookingState>((set, get) => ({
  step: 1,
  tripSlug: null,
  tripTitle: null,
  tripPriceBDT: null,
  departureDateId: null,
  startDate: null,
  endDate: null,
  travelers: DEFAULT_TRAVELERS,
  preferences: DEFAULT_PREFERENCES,
  contact: DEFAULT_CONTACT,

  totalTravelers: () => {
    const { adults, children } = get().travelers;
    return adults + children;
  },

  setStep: (step) => set({ step }),
  nextStep: () => set((s) => ({ step: Math.min(4, s.step + 1) as BookingStep })),
  prevStep: () => set((s) => ({ step: Math.max(1, s.step - 1) as BookingStep })),

  setTrip: (slug, title, priceBDT, departureDateId) =>
    set({ tripSlug: slug, tripTitle: title, tripPriceBDT: priceBDT, departureDateId: departureDateId ?? null }),

  setDates: (start, end) => set({ startDate: start, endDate: end }),

  setTravelers: (travelers) =>
    set((s) => ({ travelers: { ...s.travelers, ...travelers } })),

  setPreferences: (prefs) =>
    set((s) => ({ preferences: { ...s.preferences, ...prefs } })),

  setContact: (contact) =>
    set((s) => ({ contact: { ...s.contact, ...contact } })),

  reset: () =>
    set({
      step: 1,
      tripSlug: null,
      tripTitle: null,
      tripPriceBDT: null,
      departureDateId: null,
      startDate: null,
      endDate: null,
      travelers: DEFAULT_TRAVELERS,
      preferences: DEFAULT_PREFERENCES,
      contact: DEFAULT_CONTACT,
    }),
}));
