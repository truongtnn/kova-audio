import type { Metadata } from "next";
import { Archivo, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "The Dial One — KOVA AUDIO",
  description:
    "Tai nghe không dây với núm vặn analog thật. Âm thanh Hi-Fi, điều khiển bằng tay, không cần chạm màn hình.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-base text-cream antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
