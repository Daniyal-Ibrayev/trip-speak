import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { countries } from "@/data/countries"

export const LanguageSelect = () => {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Выберите язык" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {countries.map(c => (
                        <SelectItem key={c.code} value={c.code}>{c.language}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}