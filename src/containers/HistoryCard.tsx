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
        originalPhrase: "what's up?",
        translatedPhrase: "что нового?"
    },
    {
        originalPhrase: "I love you",
        translatedPhrase: "я тебя люблю"
    },
    {
        originalPhrase: "happy birthday",
        translatedPhrase: "с днём рождения"
    },
    {
        originalPhrase: "how much is this?",
        translatedPhrase: "сколько это стоит?"
    },
    {
        originalPhrase: "I don't understand",
        translatedPhrase: "я не понимаю"
    },
    {
        originalPhrase: "where is the bathroom?",
        translatedPhrase: "где туалет?"
    },
    {
        originalPhrase: "I'm hungry",
        translatedPhrase: "я голоден"
    },
    {
        originalPhrase: "can you help me?",
        translatedPhrase: "можешь мне помочь?"
    },
    {
        originalPhrase: "congratulations",
        translatedPhrase: "поздравляю"
    },
    {
        originalPhrase: "good luck",
        translatedPhrase: "удачи"
    },
    {
        originalPhrase: "sorry",
        translatedPhrase: "извините"
    },
    {
        originalPhrase: "goodbye",
        translatedPhrase: "до свидания"
    },
    {
        originalPhrase: "yes",
        translatedPhrase: "да"
    },
    {
        originalPhrase: "no",
        translatedPhrase: "нет"
    }
];

export const HistoryCard = ({ styles }: Props) => {

    return (
        <Card className={cn("min-h-64", styles)}>
            <CardHeader>
                <CardTitle>История переводов</CardTitle>
            </CardHeader>
            <CardContent>
            <ScrollArea className="h-fit">
                <div className="flex flex-wrap gap-3">
                    {translationHistory.map(p => (
                        <Snippet
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