interface Props {
    originalPhrase: string;
    translatedPhrase: string;
}

export const Snippet = ({ originalPhrase, translatedPhrase }: Props) => {
    return (
        <div className="min-w-20 cursor-pointer flex flex-col justify-start rounded-3xl border py-2 px-6 hover:border-blue-600">
            <p className="text-sm font-medium">
                {originalPhrase}
            </p>
            <p className="text-sm text-muted-foreground ">
                {translatedPhrase}
            </p>
        </div>
    )
}