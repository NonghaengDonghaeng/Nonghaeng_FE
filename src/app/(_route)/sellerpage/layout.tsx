import { Metadata } from "next";
import Nav from "@/common/components/Nav/Nav";
import { sellerPageHref } from "@/model/href/href";

export const metadata: Metadata = {
  title: "농행동행 | 판매자페이지",
};

export default function sellerPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav href={sellerPageHref} />
      <main id="main">{children}</main>
    </>
  );
}
