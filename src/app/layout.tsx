/* eslint-disable */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScollTop from "@/components/layout/scrolltop/scrolltop";
import Header from "../components/layout/header/header";
import Footer from "../components/layout/footer/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "농촌여행 농행동행",
  description: "Generated by create next app",
  icons: {
    icon: "/icon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScollTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
/* eslint-enable */
