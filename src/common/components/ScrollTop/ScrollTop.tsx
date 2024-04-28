"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScollTop() {
  const pathName = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return null;
}
