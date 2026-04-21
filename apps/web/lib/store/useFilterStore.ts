'use client';
import { create } from 'zustand';

interface FilterState {
  search: string;
  category: string | null;
  difficulty: string | null;
  priceMin: number;
  priceMax: number;
  duration: string | null;
  setSearch: (q: string) => void;
  setCategory: (c: string | null) => void;
  setDifficulty: (d: string | null) => void;
  setPriceRange: (min: number, max: number) => void;
  setDuration: (d: string | null) => void;
  reset: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  search: '',
  category: null,
  difficulty: null,
  priceMin: 0,
  priceMax: 999999,
  duration: null,
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
  setDifficulty: (difficulty) => set({ difficulty }),
  setPriceRange: (priceMin, priceMax) => set({ priceMin, priceMax }),
  setDuration: (duration) => set({ duration }),
  reset: () => set({ search: '', category: null, difficulty: null, priceMin: 0, priceMax: 999999, duration: null }),
}));
