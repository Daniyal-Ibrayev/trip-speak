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


export const HistoryCard = ({ styles }: Props) => {

    return (
        <Card className={cn("min-h-64", styles)}>
            <CardHeader>
                <CardTitle>История переводов</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>

        </Card>
    )
};