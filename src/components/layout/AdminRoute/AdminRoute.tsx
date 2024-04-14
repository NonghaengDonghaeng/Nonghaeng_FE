"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function AdminRoute() {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
    if (
      !localStorage.getItem("jwt") &&
      (pathName !== "/pages/acount/join" ||
        "/pages/acount/login" ||
        "/pages/acount/findid" ||
        "/pages/acount/findpass")
    ) {
      console.log("로그아웃 상태");
      router.replace("/pages/acount/login");
    } else if (
      (localStorage.getItem("jwt") && pathName == "/pages/acount/login") ||
      "/pages/acount/join" ||
      "/pages/acount/findid" ||
      "/pages/acount/findpass"
    ) {
      console.log("로그인 상태");
      router.replace("/pages/mypage");
    }
  }, [pathName]);
  return null;
}
