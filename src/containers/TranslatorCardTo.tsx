import { LanguageSelect } from "@/components/LanguageSelect";
import {
    Card,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import { cn } from "@/lib/utils"
import { ClassValue } from "clsx";
import { Textarea } from "@/components/ui/textarea"
import { useTranslatorStore } from "@/store/store";

interface Props {
    styles?: ClassValue;
}

export const TranslatorCardTo = ({ styles }: Props) => {
    const { languageTo, country, setLanguageTo } = useTranslatorStore();

    return (
        <Card className={cn("min-h-52", styles)}>
            <CardHeader>
                <LanguageSelect
                    value={languageTo || country?.code}
                    onChange={setLanguageTo}
                />
            </CardHeader>
            <CardContent>
                <Textarea className="h-52 resize-none" placeholder="Начните писать текст" />
            </CardContent>

        </Card>
    )
};