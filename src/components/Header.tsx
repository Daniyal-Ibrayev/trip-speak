import { SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {

    return (
        <div className="h-12 w-full flex justify-end">
             <Button variant="outline" size="icon">
             <SettingsIcon />
    </Button>
          
        </div>
    )
}
export default Header;