import Nav from "@/components/layout/Nav/Nav";
import { Metadata } from "next";
import { tripHref } from "../../../../public/href/href";

export const metadata: Metadata = {
  title: "농행동행 | 농촌여행",
};

export default function TripLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav href={tripHref} />
      <main id="main">{children}</main>
    </>
  );
}
