import Nav from "@/components/layout/nav/nav";
import { tripHref } from "../../../../public/href/href";

export default function TripLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav href={tripHref} />
      {children}
    </>
  );
}
