import { CountriesCode, Country } from '@/data/types';
import { create } from 'zustand';

interface IStore {
    country: Country | null;
    languageFrom: CountriesCode | null;
    languageTo: CountriesCode | null;
    setCountry: (country: Country) => void;
    setLanguageFrom: (languageFrom: CountriesCode) => void;
    setLanguageTo: (languageTo: CountriesCode) => void;
}

export const useTranslatorStore = create<IStore>((set) => ({
    country: null,
    languageFrom: null,
    languageTo: null,
    setCountry: (country) => set({ country }),
    setLanguageFrom: (languageFrom)  => set({ languageFrom }),
    setLanguageTo: (languageTo)  => set({ languageTo }),
}));

