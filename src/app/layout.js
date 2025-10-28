'use client'; 

import { League_Spartan } from "next/font/google"; 
import Image from "next/image";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from 'next/navigation'; 
import SiteBackground from "./components/SiteBackground"; 

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ['400', '600', '700', '800']
});


export default function RootLayout({ children }) {
   const pathname = usePathname(); 
  const isAuthPage = pathname.startsWith('/auth');
  return (
    <html lang="fr">
      <body className={leagueSpartan.className}> 
        <SiteBackground />
       <div className="flex flex-col min-h-screen">
           {!isAuthPage && <Navbar />}
          <main className="flex-grow"> 
            {children}
          </main>
           {!isAuthPage && <Footer />}
        </div>
      </body>
    </html>
  );
}