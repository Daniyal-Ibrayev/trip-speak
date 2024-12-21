import { Snippet } from "@/components/Snippet";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { cn } from "@/lib/utils"
import { ClassValue } from "clsx";
import { ScrollArea } from "@/components/ui/scroll-area";
interface Props {
    styles?: ClassValue;
}

const popularPhrases = [
    {
        originalPhrase: "good morning",
        translatedPhrase: "доброе утро"
    },
    {
        originalPhrase: "how are you?",
        translatedPhrase: "как дела?"
    },
    {
        originalPhrase: "thank you",
        translatedPhrase: "спасибо"
    },
    {
        originalPhrase: "please",
        translatedPhrase: "пожалуйста"
    },
    {
        originalPhrase: "good night",
        translatedPhrase: "доброй ночи"
    },
    {
        originalPhrase: "see you later",
        translatedPhrase: "до встречи"
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
    },
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
        originalPhrase: "how are you doing?",
        translatedPhrase: "как ты?"
    },
    {
        originalPhrase: "what time is it?",
        translatedPhrase: "который час?"
    },
    {
        originalPhrase: "I'm sorry",
        translatedPhrase: "извини"
    },
    {
        originalPhrase: "it's okay",
        translatedPhrase: "всё в порядке"
    },
    {
        originalPhrase: "where are you from?",
        translatedPhrase: "откуда ты?"
    },
    {
        originalPhrase: "I'm fine",
        translatedPhrase: "я в порядке"
    },
    {
        originalPhrase: "what is your name?",
        translatedPhrase: "как тебя зовут?"
    },

];

export const PopularPhrasesCard = ({ styles }: Props) => {
    return (
        <Card className={cn("min-h-64 max-h-80", styles)}>
            <CardHeader>
                <CardTitle>Популярные фразы</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-56">
                    <div className="flex flex-wrap gap-3">
                        {popularPhrases.map((p, i) => (
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