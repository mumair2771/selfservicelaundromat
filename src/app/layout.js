import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import WhatsAppChat from "@/components/WhatsApp";
import SmoothScroll from "@/components/SmoothScroll";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-roboto",
});

export const metadata = {
  title: "Self-Service Laundromat",
  description: "Professional laundry services that fit your schedule. Drop off dirty, pick up perfect every single time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${roboto.variable} font-sans antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <WhatsAppChat />
        </SmoothScroll>
      </body>
    </html>
  );
}
