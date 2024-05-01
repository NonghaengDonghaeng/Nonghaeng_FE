"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function AdminRoute() {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      // 로그인하지 않고 예약
      if (pathName == "/reserve/exp" || pathName == "/reserve/lodg") {
        alert("로그인되지 않음");
        router.replace("/acount/login");
      }
      // 로그인하지 않고 마이페이지
      else if (
        pathName == "/mypage" ||
        pathName == "/mypage/edit" ||
        pathName == "/mypage/reserve"
      ) {
        console.log("로그아웃 상태");
        router.replace("/acount/login");
      }
    } else if (localStorage.getItem("jwt")) {
      // 로그인하고 acount
      if (
        pathName == "/acount/login" ||
        pathName == "/acount/join" ||
        pathName == "/acount/join/user" ||
        pathName == "/acount/join/seller" ||
        pathName == "/acount/findid" ||
        pathName == "/acount/finpass"
      ) {
        console.log("로그인 상태");
        router.replace("/mypage");
      }
    }
  }, [pathName]);
  return null;
}