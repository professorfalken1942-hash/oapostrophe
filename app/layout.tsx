import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-inter",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
