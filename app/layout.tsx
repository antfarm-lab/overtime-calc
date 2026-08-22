import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "残業代計算ツール【無料】時給・残業時間から自動計算",

  description:
    "時給と残業時間から残業代を無料で自動計算。25%・50%・60%の割増率に対応し、残業時給と残業代の目安を簡単に確認できます。",

  verification: {
    google: "miCxwdbgRhGe66W37cjiBB0MFNO1tB2WJxh9Dm_zTjc",
  },

  keywords: [
    "残業代計算",
    "残業計算",
    "残業 時給",
    "残業 割増",
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