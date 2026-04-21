'use client';
import { create } from 'zustand';

interface BookingState {
  tripSlug: string | null;
  startDate: string | null;
  endDate: string | null;
  travelers: number;
  currency: string;
  step: number;
  setTrip: (slug: string) => void;
  setDates: (start: string, end: string) => void;
  setTravelers: (n: number) => void;
  setStep: (step: number) => void;
  reset: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  tripSlug: null,
  startDate: null,
  endDate: null,
  travelers: 1,
  currency: 'BDT',
  step: 1,
  setTrip: (slug) => set({ tripSlug: slug }),
  setDates: (start, end) => set({ startDate: start, endDate: end }),
  setTravelers: (n) => set({ travelers: n }),
  setStep: (step) => set({ step }),
  reset: () => set({ tripSlug: null, startDate: null, endDate: null, travelers: 1, step: 1 }),
}));
