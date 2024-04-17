import { Navbar } from '@/app/components/navbar';
import React from 'react';
import { JsonFormat } from '@/app/components/json-format';
import { Footer } from '@/app/components/footer';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <JsonFormat/>
            <Footer/>
        </div>
    );
}
