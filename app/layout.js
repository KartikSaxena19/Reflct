import { Baloo_Bhaijaan_2} from "next/font/google";

import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const baloo = Baloo_Bhaijaan_2({ 
  subsets: ['latin'],
  weight: ['400', '800'],
  variable: '--font-baloo'
});


export const metadata = {
  title: "Reflct",
  description: "A Journaling App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    
    <html lang="en">
      <body
        className={`${baloo.variable}`}
      >
        <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0"/>

        <Header/>
        <main className="txt min-h-screen">
        {children}

        </main>
        <Toaster richColors/>

        <footer className="bg-orange-300/10 py-12 txt">
            <div className="text-xl container mx-auto px-4 text-center text-gray-900">
              <p>Made with 💗 by Kartik Saxena</p>
            </div>
          </footer>

      </body>
    </html>
    </ClerkProvider>
  );
}
