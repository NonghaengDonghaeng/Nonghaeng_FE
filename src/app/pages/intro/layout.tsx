import Nav from "@/components/layout/nav/nav";
import { Metadata } from "next";
import { introHref } from "../../../../public/href/href";

export const metadata: Metadata = {
  title: "농행동행 | 소개",
};

export default function IntroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav href={introHref} />
      <main id="main">{children}</main>
    </>
  );
}
