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
      pathName !== "/pages/acount/login" &&
      pathName !== "/pages/acount/join" &&
      pathName !== "/pages/acount/findid" &&
      pathName !== "/pages/acount/findpass"
    ) {
      console.log("로그아웃 상태");
      router.replace("/pages/acount/login");
    } else if (
      localStorage.getItem("jwt") &&
      (pathName == "/pages/acount/login" ||
        pathName == "/pages/acount/join" ||
        pathName == "/pages/acount/findid" ||
        pathName == "/pages/acount/finpass")
    ) {
      console.log("로그인 상태");
      router.replace("/pages/mypage");
    }
  }, [pathName]);
  return null;
}
