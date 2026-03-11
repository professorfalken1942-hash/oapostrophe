import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "oapostrophe — Digital Studio",
  description: "Boutique web development, full-stack engineering, and consulting. AI-assisted. Fast. High-touch.",
  openGraph: {
    title: "oapostrophe",
    description: "Boutique web development, full-stack engineering, and consulting.",
    url: "https://oapostrophe.com",
    siteName: "oapostrophe",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
