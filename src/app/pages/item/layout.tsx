import Nav from "@/components/layout/nav/nav";
import { Metadata } from "next";
import { itemHref } from "../../../../public/href/href";

export const metadata: Metadata = {
  title: "농행동행 | 기획상품",
};

export default function TripLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav href={itemHref} />
      <main id="main">{children}</main>
    </>
  );
}
