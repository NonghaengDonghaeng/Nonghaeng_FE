import { Metadata } from "next";

export const metadata: Metadata = {
  title: "농행동행 | 상세보기",
};

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main id="main">{children}</main>;
}
