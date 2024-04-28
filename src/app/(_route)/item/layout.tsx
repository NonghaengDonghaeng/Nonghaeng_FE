import Nav from "@/components/layout/Nav/Nav";
import { Metadata } from "next";
import { itemHref } from "@/model/href/href";

export const metadata: Metadata = {
  title: "농행동행 | 기획상품",
};

export default function ItemLayout({
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
