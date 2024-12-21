import { SettingsIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountrySelect } from "./CountrySelect";

const Header = () => {

    return (
        <div className="h-12 w-full py-6 mb-12 flex justify-between">
            <span className="text-blue-600 font-semibold">
                Trip Speak
            </span>
            <div className="flex gap-2">
                <CountrySelect />
                <Button variant="outline" size="icon">
                    <SunIcon />
                </Button>

                <Button variant="outline" size="icon">
                    <SettingsIcon />
                </Button>
            </div>


        </div>
    )
}
export default Header;