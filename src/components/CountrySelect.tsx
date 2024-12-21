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

export const CountrySelect = () => {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Выберите страну" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Страна</SelectLabel>
                    {countries.map(c => (
                        <SelectItem key={c.code} value={c.code}>{c.nameRussian}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}