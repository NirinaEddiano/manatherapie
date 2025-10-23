'use client'; 

import { Poppins } from "next/font/google"; 
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from 'next/navigation'; 

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'] 
});


export default function RootLayout({ children }) {
   const pathname = usePathname(); 
  const isAuthPage = pathname.startsWith('/auth');
  return (
    <html lang="fr">
      <body className={poppins.className}> 
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