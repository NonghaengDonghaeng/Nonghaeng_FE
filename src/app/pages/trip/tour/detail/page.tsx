"use client";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();
  return <main id="main">{searchParams.get("tour_id")}</main>;
}
