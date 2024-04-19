'use client';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();


    if (theme === 'dark') {
        return (<div className="hover:cursor-pointer">
            <SunIcon size={24} onClick={() => setTheme('light')}/>
        </div>);
    }
    return (<div className="hover:cursor-pointer">
        <MoonIcon size={24} onClick={() => setTheme('dark')}/>
    </div>);

};