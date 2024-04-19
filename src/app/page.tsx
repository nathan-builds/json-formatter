import { Navbar } from '@/app/components/navbar';
import React from 'react';
import { JsonFormat } from '@/app/components/json-format';
import { Footer } from '@/app/components/footer';
import { Card } from '@/components/ui/card';

export default function Home() {
    return (
        <Card className="flex flex-col min-h-screen border-none rounded-none">
            <Navbar/>
            <JsonFormat/>
            <Footer/>
        </Card>
    );
}
