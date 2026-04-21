'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Currency = 'BDT' | 'USD' | 'EUR';

interface CurrencyState {
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currency: 'BDT',
      setCurrency: (currency) => set({ currency }),
    }),
    { name: 'bynd-currency' }
  )
);
