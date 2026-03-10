import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
