import { SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountrySelect } from "./CountrySelect";
import { ThemeSwitch } from "./ThemeSwitch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export const Header = () => {
    return (
        <div className="h-12 w-full py-12 flex justify-between items-center">
            <span className="text-blue-600 font-semibold">
                Trip Speak
            </span>
            <div className="flex gap-2">
                <ThemeSwitch />
                <CountrySelect />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <SettingsIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40">
                        <DropdownMenuLabel>Мой профиль</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Редактировать
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Выход 
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};