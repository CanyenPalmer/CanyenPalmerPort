import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CanyenPalmerPort",
  description: "Play through my portfolio — one shot at a time.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-emerald-50 to-sky-50 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
