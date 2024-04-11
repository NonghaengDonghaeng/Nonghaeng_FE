"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function AdminRoute() {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      console.log("로그인이 안된 상태");
      router.replace("/pages/mypage/login");
    }
  }, [pathName]);
  return null;
}
