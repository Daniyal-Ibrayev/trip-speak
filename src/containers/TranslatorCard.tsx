import { LanguageSelect } from "@/components/LanguageSelect";
import {
    Card,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import { cn } from "@/lib/utils"
import { ClassValue } from "clsx";
import { Textarea } from "@/components/ui/textarea"
interface Props {
    styles?: ClassValue;
}

export const TranslatorCard = ({ styles }: Props) => {
    return (
        <Card className={cn("min-h-52", styles)}>
            <CardHeader>
                <LanguageSelect />
            </CardHeader>
            <CardContent>
                <Textarea className="h-52 resize-none" placeholder="Начните писать текст" />
            </CardContent>

        </Card>
    )
};