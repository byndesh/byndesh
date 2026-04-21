'use client';

/**
 * useCurrencyStore — persists to localStorage across visits.
 * Manages active currency + exchange rates (fetched from API and cached here).
 *
 * PERSIST: YES — currency preference survives page refresh/revisit.
 * SPEC: rates and setRates are required per Deep Systems Briefing.
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Currency = 'BDT' | 'USD' | 'EUR';

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  BDT: '৳',
  USD: '$',
  EUR: '€',
};

export const CURRENCY_LABELS: Record<Currency, string> = {
  BDT: 'Bangladeshi Taka',
  USD: 'US Dollar',
  EUR: 'Euro',
};

/** Default exchange rates — refreshed by CurrencyToggle on mount */
const DEFAULT_RATES: Record<Currency, number> = {
  BDT: 1,
  USD: 0.0084,
  EUR: 0.0078,
};

interface CurrencyState {
  /** Currently selected display currency */
  currency: Currency;
  /** Exchange rates relative to BDT (BDT = 1) */
  rates: Record<Currency, number>;
  /** ISO timestamp of last rate fetch — used to avoid redundant fetches */
  ratesLastUpdated: string | null;
  /** Set the active display currency */
  setCurrency: (currency: Currency) => void;
  /** Update exchange rates (called after fetching live rates) */
  setRates: (rates: Record<Currency, number>) => void;
  /**
   * Convert a BDT amount to the currently selected currency.
   * Returns a formatted string with the correct symbol.
   */
  format: (amountBDT: number, minimumFractionDigits?: number) => string;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set, get) => ({
      currency: 'BDT',
      rates: DEFAULT_RATES,
      ratesLastUpdated: null,

      setCurrency: (currency) => set({ currency }),

      setRates: (rates) =>
        set({ rates, ratesLastUpdated: new Date().toISOString() }),

      format: (amountBDT, minimumFractionDigits = 0) => {
        const { currency, rates } = get();
        const rate = rates[currency] ?? 1;
        const converted = amountBDT * rate;
        const symbol = CURRENCY_SYMBOLS[currency];

        if (currency === 'BDT') {
          // BDT: no decimals, Bangla-style comma (e.g. ৳1,20,000)
          return `${symbol}${Math.round(converted).toLocaleString('en-BD')}`;
        }

        return `${symbol}${converted.toLocaleString('en-US', {
          minimumFractionDigits,
          maximumFractionDigits: 2,
        })}`;
      },
    }),
    {
      name: 'beyndesh-currency', // localStorage key — matches spec exactly
      // Only persist currency preference + rates, not the format function
      partialize: (state) => ({
        currency: state.currency,
        rates: state.rates,
        ratesLastUpdated: state.ratesLastUpdated,
      }),
    }
  )
);
