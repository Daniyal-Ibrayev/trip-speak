import { CountriesCode, Country } from '@/data/types';
import { create } from 'zustand';

interface IStore {
    country: Country | null;
    countryCodeFrom: CountriesCode | null;
    countryCodeTo: CountriesCode | null;
    setCountry: (country: Country) => void;
    setCountryCodeFrom: (countryCodeFrom: CountriesCode) => void;
    setCountryCodeTo: (countryCodeTo: CountriesCode) => void;
}

export const useTranslatorStore = create<IStore>((set) => ({
    country: null,
    countryCodeFrom: null,
    countryCodeTo: null,
    setCountry: (country) => set({ country }),
    setCountryCodeFrom: (countryCodeFrom)  => set({ countryCodeFrom }),
    setCountryCodeTo: (countryCodeTo)  => set({ countryCodeTo }),
}));

