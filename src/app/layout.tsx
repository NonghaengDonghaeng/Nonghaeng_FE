import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import ScollTop from "./(components)/ScrollTop/ScrollTop";
import Header from "./(components)/Header/Header";
import Footer from "./(components)/Footer/Footer";
import Loading from "./(components)/Loading/Loading";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "농행동행",
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
        <Suspense fallback={<Loading />}>
          <ScollTop />
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
