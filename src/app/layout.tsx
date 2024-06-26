import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/app/providers';
import { GoogleAnalytics } from '@next/third-parties/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'JSON Formatter',
    description: 'JSON formatter and validator'
};

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
        <Providers>
            <main className="">{children}</main>
            <Toaster/>
        </Providers>
        </body>
        <GoogleAnalytics gaId="G-LVCJB2DME7"/>
        </html>
    );
}
