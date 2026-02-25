import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "@/shared/components/shared/";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "ChatFlow",
  // TODO description of app
  description: "Cool messenger",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/light_icon.svg",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/dark_icon.svg",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${interSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}