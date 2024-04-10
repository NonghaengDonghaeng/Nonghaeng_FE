import { Metadata } from "next";
import Nav from "@/components/layout/Nav/Nav";
import { adminHref, mypageHref } from "../../../../public/href/href";

export const metadata: Metadata = {
  title: "농행동행 | 마이페이지",
};

export default function TripLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav href={adminHref} />
      <main id="main">{children}</main>
    </>
  );
}
