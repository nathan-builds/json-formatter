import React from 'react';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export const Navbar = () => {
    const title = '{JSON: dev}';


    return (
        <Card
            className={`flex items-center justify-between p-6  mb-10 border-b-[1px]  border-none h-[30px]`}>
            <Link href={'/'}>
                <h1 className="text-2xl">{title}</h1>
            </Link>
            <div className="flex space-x-4">
                <ThemeSwitcher/>
                <Link href={'/about'} className="text-gray-400">About</Link>
                <Link href={'/contact'} className="text-gray-400">Contact</Link>
            </div>
        </Card>
    );
};