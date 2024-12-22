import { countries } from "./countries";

export interface Country {
    id: number;
    code: string;
    name: string;
    language: string;
}

export type CountriesCode = typeof countries[number]['code'];

const uniqueLanguages = Array.from(
    new Set(countries.map(country => country.language))
  ).sort();

export type CountriesLanguage = typeof uniqueLanguages[number];

export interface TranslateTextInput {
  text: string;
  targetLanguage: string;
}

export interface TranslateTextResponse {
  translatedText: string;
}