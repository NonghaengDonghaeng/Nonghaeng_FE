import { Metadata } from "next";
import Nav from "@/common/components/Nav/Nav";
import { adminHref, mypageHref } from "@/model/href/href";

export const metadata: Metadata = {
  title: "농행동행 | 관리자페이지",
};

export default function AdminLayout({
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
