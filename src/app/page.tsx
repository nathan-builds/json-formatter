import { Navbar } from '@/components/navbar';
import React from 'react';
import { JsonFormat } from '@/components/json-format';
import { Footer } from '@/components/footer';
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
