import React from 'react';
import { ThemeSwitcher } from '@/app/components/theme-switcher';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export const Navbar = () => {
    const title = '{JSON: dev}';


    return (
        <Card
            className={`flex items-center justify-between p-6  mb-10 border-b-[1px]  border-none h-[30px]`}>
            <Label className='text-2xl'>{title}</Label>
            <ul className="flex space-x-4">
                <ThemeSwitcher/>
                <li><a href="#" className="text-gray-400">About</a></li>
                <li><a href="#" className="text-gray-400">Contact</a></li>


            </ul>
        </Card>
    );
};