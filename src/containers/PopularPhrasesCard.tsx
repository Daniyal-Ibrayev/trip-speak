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

const popularPhrasesEng = [
    {
        originalPhrase: "hello",
        translatedPhrase: "здравствуйте"
    },
    {
        originalPhrase: "good morning",
        translatedPhrase: "доброе утро"
    },
    {
        originalPhrase: "good afternoon",
        translatedPhrase: "добрый день"
    },
    {
        originalPhrase: "good evening",
        translatedPhrase: "добрый вечер"
    },
    {
        originalPhrase: "good night",
        translatedPhrase: "доброй ночи"
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
        originalPhrase: "sorry",
        translatedPhrase: "извините"
    },
    {
        originalPhrase: "excuse me",
        translatedPhrase: "прошу прощения"
    },
    {
        originalPhrase: "where is the bathroom?",
        translatedPhrase: "где находится туалет?"
    },
    {
        originalPhrase: "how much does it cost?",
        translatedPhrase: "сколько это стоит?"
    },
    {
        originalPhrase: "I don't understand",
        translatedPhrase: "я не понимаю"
    },
    {
        originalPhrase: "do you speak English?",
        translatedPhrase: "вы говорите по-английски?"
    },
    {
        originalPhrase: "can you help me?",
        translatedPhrase: "вы можете мне помочь?"
    },
    {
        originalPhrase: "I need a taxi",
        translatedPhrase: "мне нужен такси"
    },
    {
        originalPhrase: "what's your name?",
        translatedPhrase: "как вас зовут?"
    },
    {
        originalPhrase: "my name is...",
        translatedPhrase: "меня зовут..."
    },
    {
        originalPhrase: "where are you from?",
        translatedPhrase: "откуда вы?"
    },
    {
        originalPhrase: "I'm from...",
        translatedPhrase: "я из..."
    },
    {
        originalPhrase: "nice to meet you",
        translatedPhrase: "приятно познакомиться"
    },
    {
        originalPhrase: "goodbye",
        translatedPhrase: "до свидания"
    },
    {
        originalPhrase: "see you later",
        translatedPhrase: "до встречи"
    },
    {
        originalPhrase: "yes",
        translatedPhrase: "да"
    },
    {
        originalPhrase: "no",
        translatedPhrase: "нет"
    },
];

const popularPhrasesJap = [
    {
        originalPhrase: "こんにちは",
        translatedPhrase: "здравствуйте"
    },
    {
        originalPhrase: "おはようございます",
        translatedPhrase: "доброе утро"
    },
    {
        originalPhrase: "こんにちは",
        translatedPhrase: "добрый день"
    },
    {
        originalPhrase: "こんばんは",
        translatedPhrase: "добрый вечер"
    },
    {
        originalPhrase: "おやすみなさい",
        translatedPhrase: "доброй ночи"
    },
    {
        originalPhrase: "お元気ですか？",
        translatedPhrase: "как дела?"
    },
    {
        originalPhrase: "ありがとうございます",
        translatedPhrase: "спасибо"
    },
    {
        originalPhrase: "お願いします",
        translatedPhrase: "пожалуйста"
    },
    {
        originalPhrase: "すみません",
        translatedPhrase: "извините"
    },
    {
        originalPhrase: "すみません",
        translatedPhrase: "прошу прощения"
    },
    {
        originalPhrase: "トイレはどこですか？",
        translatedPhrase: "где находится туалет?"
    },
    {
        originalPhrase: "いくらですか？",
        translatedPhrase: "сколько это стоит?"
    },
    {
        originalPhrase: "わかりません",
        translatedPhrase: "я не понимаю"
    },
    {
        originalPhrase: "英語を話せますか？",
        translatedPhrase: "вы говорите по-английски?"
    },
    {
        originalPhrase: "助けてくれますか？",
        translatedPhrase: "вы можете мне помочь?"
    },
    {
        originalPhrase: "タクシーが必要です",
        translatedPhrase: "мне нужен такси"
    },
    {
        originalPhrase: "お名前は何ですか？",
        translatedPhrase: "как вас зовут?"
    },
    {
        originalPhrase: "私の名前は...です",
        translatedPhrase: "меня зовут..."
    },
    {
        originalPhrase: "どこから来ましたか？",
        translatedPhrase: "откуда вы?"
    },
    {
        originalPhrase: "私は...から来ました",
        translatedPhrase: "я из..."
    },
    {
        originalPhrase: "はじめまして",
        translatedPhrase: "приятно познакомиться"
    },
    {
        originalPhrase: "さようなら",
        translatedPhrase: "до свидания"
    },
    {
        originalPhrase: "じゃね",
        translatedPhrase: "до встречи"
    },
    {
        originalPhrase: "はい",
        translatedPhrase: "да"
    },
    {
        originalPhrase: "いいえ",
        translatedPhrase: "нет"
    },
];

export const PopularPhrasesCard = ({ styles }: Props) => {
    return (
        <Card className={cn("", styles)}>
            <CardHeader>
                <CardTitle>Популярные фразы</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-56">
                    <div className="flex flex-wrap gap-3">
                        {popularPhrasesEng?.map((p, i) => (
                            <Snippet
                                key={i}
                                originalPhrase={p?.originalPhrase}
                                translatedPhrase={p?.translatedPhrase}
                            />
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>

        </Card>
    )
};