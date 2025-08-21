import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CanyenPalmerPort",
  description: "Interactive monthly-report style portfolio by Canyen Palmer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
