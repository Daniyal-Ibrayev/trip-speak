import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { cn } from "@/lib/utils"
import { ClassValue } from "clsx";
import { Snippet } from "@/components/Snippet";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
    styles?: ClassValue;
}

const translationHistory = [
    {
        originalPhrase: "hello where i can find the Hollywood street?",
        translatedPhrase: "здравствуйте, где я могу найти Голливудскую улицу?"
    },
    {
        originalPhrase: "where can I find a good restaurant?",
        translatedPhrase: "где я могу найти хороший ресторан?"
    },
    {
        originalPhrase: "how do I get to Hollywood?",
        translatedPhrase: "как мне добраться до Голливуда?"
    },
    {
        originalPhrase: "is this the way to the beach?",
        translatedPhrase: "это дорога на пляж?"
    },
    {
        originalPhrase: "what time does the last train leave?",
        translatedPhrase: "во сколько отправляется последний поезд?"
    },
    {
        originalPhrase: "can you recommend a good place to visit?",
        translatedPhrase: "можешь порекомендовать хорошее место для посещения?"
    },
    {
        originalPhrase: "how far is it to the airport?",
        translatedPhrase: "как далеко до аэропорта?"
    },
    {
        originalPhrase: "is it safe to walk around at night?",
        translatedPhrase: "безопасно ли гулять ночью?"
    },
    {
        originalPhrase: "what's the weather like today?",
        translatedPhrase: "какая сегодня погода?"
    },
    {
        originalPhrase: "where can I buy tickets for the movie?",
        translatedPhrase: "где я могу купить билеты в кино?"
    },
    {
        originalPhrase: "do I need a reservation for this restaurant?",
        translatedPhrase: "мне нужно забронировать столик в этом ресторане?"
    },
];

export const HistoryCard = ({ styles }: Props) => {

    return (
        <Card className={cn("", styles)}>
            <CardHeader>
                <CardTitle>История переводов</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[70vh]">
                    <div className="flex flex-wrap gap-3">
                        {translationHistory.map((p, i) => (
                            <Snippet
                                key={i}
                                originalPhrase={p.originalPhrase}
                                translatedPhrase={p.translatedPhrase}
                            />
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>

        </Card>
    )
};