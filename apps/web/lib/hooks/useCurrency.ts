'use client';
import { useCurrencyStore } from '@/lib/store/useCurrencyStore';

const RATES: Record<string, number> = {
  BDT: 1,
  USD: 0.0091,
  EUR: 0.0083,
};

const SYMBOLS: Record<string, string> = {
  BDT: '৳',
  USD: '$',
  EUR: '€',
};

/**
 * useCurrency — converts a BDT amount to the user's chosen currency.
 */
export function useCurrency() {
  const { currency } = useCurrencyStore();

  function format(amountBDT: number): string {
    const rate = RATES[currency] ?? 1;
    const converted = Math.round(amountBDT * rate);
    return `${SYMBOLS[currency]}${converted.toLocaleString()}`;
  }

  return { currency, format, symbol: SYMBOLS[currency] };
}
