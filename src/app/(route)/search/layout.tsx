import { Metadata } from "next";

export const metadata: Metadata = {
  title: "농행동행 | 통합검색",
};

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main id="main">{children}</main>;
}
