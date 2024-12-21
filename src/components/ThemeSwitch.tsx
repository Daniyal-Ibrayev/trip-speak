import { Switch } from "@/components/ui/switch"; 
import { useTheme } from "@/providers/theme-provider";
import { Sun, Moon } from 'lucide-react'; 

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-500' : 'text-yellow-500'}`} />
      <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
      <Moon className={`h-5 w-5 ${theme === 'dark' ? 'text-blue-500' : 'text-gray-500'}`} />
    </div>
  );
};
