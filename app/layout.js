import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400", 
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hassnain Dev | Full Stack Developer & Designer",
  description: "Explore the portfolio of Hassnain — a creative full stack developer and UI/UX designer building modern web experiences using Next.js, React, and tailwind CSS.",
  icons: {
    icon: "/logo.svg",  // or "/favicon.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
