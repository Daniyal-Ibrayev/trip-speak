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

interface Props {
    value?: CountriesCode;
    onChange: (countryCode: CountriesCode) => void;
}

export const LanguageSelect = ({ value, onChange }: Props) => {
    return (
        <Select onValueChange={onChange} value={value}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Выберите язык" />
            </SelectTrigger>
            <SelectContent>
                {countries.map(c => (
                    <SelectItem key={c.id} value={c.code}>{c.language}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}