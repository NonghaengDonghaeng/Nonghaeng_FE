import AdminRoute from "@/common/components/AdminRoute/AdminRoute";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "농행동행 | 예약하기",
};

export default function ReserveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <AdminRoute /> */}
      <main id="main">{children}</main>
    </>
  );
}
