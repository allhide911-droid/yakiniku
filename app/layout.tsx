import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "炎牛 | 大阪・鶴橋の焼肉",
  description: "大阪・鶴橋の焼肉店「炎牛（えんぎゅう）」。黒毛和牛を備長炭で焼く、至高の一皿。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-engyu-black text-engyu-cream">
        {children}
      </body>
    </html>
  );
}
