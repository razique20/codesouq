import { FloatingNavDemo } from "@/components/ui/FloatingNavbarDemo";
import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Chatbot from "@/components/Chatbot";

const Navbar = dynamic(() => import("../components/Navbar"));
const Footer = dynamic(() => import("../components/Footer"));
const CookieConsent = dynamic(() => import("../components/CookieConsent"));
const WhatsAppIcon = dynamic(() => import("../components/WhatsAppIcon"));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Algrithinn",
  description: "Intelligence,Innovated,",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="black" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* <Navbar /> */}
        <FloatingNavDemo />
        <main className="flex-grow">{children}</main>
        {/* <Chatbot/> */}
        <Footer />
        <CookieConsent />
        {/* <WhatsAppIcon /> */}
      </body>
    </html>
  );
}
