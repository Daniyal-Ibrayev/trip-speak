import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { countries } from "@/data/countries"
import { useTranslatorStore } from "@/store/store";

export const CountrySelect = () => {
    const { setCountry } = useTranslatorStore();

    const handleChange = (value: string) => {
        const selectedCountry = countries.find(c => c.code === value);
        if (selectedCountry) {
            setCountry(selectedCountry);
        }
    }

    return (
        <Select onValueChange={handleChange}>
            <SelectTrigger className="w-[140px] md:w-[180px]">
                <SelectValue placeholder="Выберите страну" />
            </SelectTrigger>
            <SelectContent>
                {countries.map(c => (
                    <SelectItem key={c.code} value={c.code}>{c.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}