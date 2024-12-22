import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { countries } from "@/data/countries"
import { CountriesCode } from "@/data/types";
import { useMemo } from "react";

interface Props {
    value?: CountriesCode;
    onChange: (countryCode: CountriesCode) => void;
}

export const LanguageSelect = ({ value, onChange }: Props) => {
    const uniqueLanguages = Array.from(
        new Map(
          countries
            .sort((a, b) => a.language.localeCompare(b.language))
            .map(country => [country.language, country])
        ).values() 
      );

    return (
        <Select onValueChange={onChange} value={value}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Выберите язык" />
            </SelectTrigger>
            <SelectContent>
                {uniqueLanguages.map(c => (
                    <SelectItem key={c.id} value={c.code}>{c.language}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}