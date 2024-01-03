import type {Metadata} from 'next'
import {IBM_Plex_Mono} from "next/font/google";
import './globals.css'
import Navbar from '@/app/components/navbar/navbar';

const ibmPlexMono = IBM_Plex_Mono({weight: ['100', '200', '300', '400', '500', '600', '700'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body id="body" className={`${ibmPlexMono.className} [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']`}>
        <Navbar/>
       {children}
      </body>
    </html>
  )
}
