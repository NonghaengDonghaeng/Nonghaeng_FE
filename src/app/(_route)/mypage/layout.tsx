import { Metadata } from "next";
import Nav from "@/common/components/Nav/Nav";
import { mypageHref } from "@/model/href/href";
import AdminRoute from "@/common/components/AdminRoute/AdminRoute";

export const metadata: Metadata = {
  title: "농행동행 | 마이페이지",
};

export default function MypageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <AdminRoute /> */}
      <Nav href={mypageHref} />
      <main id="main">{children}</main>
    </>
  );
}
