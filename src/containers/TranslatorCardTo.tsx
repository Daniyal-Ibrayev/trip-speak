import { LanguageSelect } from "@/components/LanguageSelect";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { cn } from "@/lib/utils"
import { ClassValue } from "clsx";
import { Textarea } from "@/components/ui/textarea"
import { useTranslatorStore } from "@/store/store";
import { Copy, Volume2 } from "lucide-react";

interface Props {
    styles?: ClassValue;
}

export const TranslatorCardTo = ({ styles }: Props) => {
    const { countryCodeTo: languageTo, country, setCountryCodeTo: setLanguageTo } = useTranslatorStore();

    return (
        <Card className={cn("flex flex-col", styles)}>
            <CardHeader>
                <LanguageSelect
                    value={languageTo || country?.code}
                    onChange={setLanguageTo}
                />
            </CardHeader>
            <CardContent className="grow">
                <Textarea className="h-full resize-none" placeholder="Начните писать текст" />
            </CardContent>
            <CardFooter className="flex justify-end gap-4 cursor-pointer">
                <Copy size={22} className="hover:text-blue-600"/>
                <Volume2 size={22} className="hover:text-blue-600"/>
            </CardFooter>
        </Card>
    )
};