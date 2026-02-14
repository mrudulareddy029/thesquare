export const runtime = "edge";
export const dynamic = "force-static";
export const revalidate = 3600;

import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ContactProvider from '@/components/ContactProvider'
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-gotham',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Premium 4 BHK Villas in Adibatla Hyderabad | The Square by IRA Realty',
  description: 'Luxury 4 BHK Villas in Adibatla',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/fonts/GothamBook.ttf" as="font" type="font/truetype" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/GothamMedium.ttf" as="font" type="font/truetype" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} ${montserrat.variable} antialiased`}>
        
        {/* CORRECTION: 
           ContactProvider must WRAP the Navbar and Main content.
           This allows Navbar to access the 'openModal' function.
        */}
        <ContactProvider>
          <Navbar />
          <main>{children}</main>
        </ContactProvider>
        <WhatsAppWidget />

      </body>
    </html>
  )
}