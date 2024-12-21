import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from "@/components/ui/card";
import { cn } from "@/lib/utils"
import { ClassValue } from "clsx";
interface Props {
    styles?: ClassValue;
}

export const PopularPhrasesCard = ({ styles }: Props) => {
    return (
        <Card className={cn("min-h-64", styles)}>
            <CardHeader>
                <CardTitle>Популярные фразы</CardTitle>
                <CardDescription>Начните писать текст</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>

        </Card>
    )
};