import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "残業代計算ツール【無料】残業代を自動計算",

  description:
    "時給と残業時間を入力するだけで残業代を自動計算できる無料ツール。25%割増計算に対応。",

  keywords: [
    "残業代計算",
    "残業計算",
    "給料計算",
    "時給計算",
    "残業代",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja"><script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7726060769550218"
  crossOrigin="anonymous"
/>

      <body>{children}</body>
    </html>
  );
}