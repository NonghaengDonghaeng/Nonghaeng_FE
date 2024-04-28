import { Metadata } from "next";
import Nav from "@/common/components/Nav/Nav";
import { acountHref } from "@/model/href/href";
import AdminRoute from "@/common/components/AdminRoute/AdminRoute";

export const metadata: Metadata = {
  title: "농행동행 | 마이페이지",
};

export default function AcountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminRoute />
      <Nav href={acountHref} />
      <main id="main">{children}</main>
    </>
  );
}
