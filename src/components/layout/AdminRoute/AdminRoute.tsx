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
      pathName !== "/acount/login" &&
      pathName !== "/acount/join" &&
      pathName !== "/acount/findid" &&
      pathName !== "/acount/findpass"
    ) {
      console.log("로그아웃 상태");
      router.replace("/acount/login");
    } else if (
      localStorage.getItem("jwt") &&
      (pathName == "/acount/login" ||
        pathName == "/acount/join" ||
        pathName == "/acount/findid" ||
        pathName == "/acount/finpass")
    ) {
      console.log("로그인 상태");
      router.replace("/mypage");
    }
  }, [pathName]);
  return null;
}
