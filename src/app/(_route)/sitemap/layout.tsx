import { Metadata } from "next";
import Nav from "@/components/Nav/Nav"
import { sitemapHref } from "@/models/href";

export const metadata: Metadata = {
  title: "농행동행 | 사이트맵",
};

export default function SitemapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav href={sitemapHref} />
      <main id="main">{children}</main>
    </>
  );
}
