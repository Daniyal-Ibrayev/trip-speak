import { SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountrySelect } from "./CountrySelect";
import { ThemeSwitch } from "./ThemeSwitch";

export const Header = () => {
    return (
        <div className="h-12 w-full py-12 flex justify-between items-center">
            <span className="text-blue-600 font-semibold">
                Trip Speak
            </span>
            <div className="flex gap-2">
                <ThemeSwitch />
                <CountrySelect />
                <Button variant="outline" size="icon">
                    <SettingsIcon />
                </Button>
            </div>
        </div>
    );
};