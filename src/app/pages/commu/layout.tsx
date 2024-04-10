import Nav from "@/components/layout/Nav/Nav";
import { Metadata } from "next";
import { commuHref } from "../../../../public/href/href";

export const metadata: Metadata = {
  title: "농행동행 | 커뮤니티",
};

export default function TripLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav href={commuHref} />
      <main id="main">{children}</main>
    </>
  );
}
