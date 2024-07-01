"use client";
import { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Footer from "@/app/(components)/Footer/Footer";
import Header from "@/app/(components)/Header/Header";
import Loading from "@/app/(components)/Loading/Loading";
import store from "@/redux/loginStateStore";
import guestLoginApi from "@/common/api/guestLoginApi";
import verifyJwtApi from "@/common/api/verifyJwtApi";

export default function AdminProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathName = usePathname();

  const [loginState, setLoginState] = useState({
    state: false,
    href: "",
    role: "",
  });

  useEffect(() => {
    //jwt가 없는 경우 -> 게스트로 로그인시킴
    if (!localStorage.getItem("jwt")) {
      // 게스트 로그인, 이미 로그인 중이라면 return이 오지 않음
      guestLoginApi().then((res) => {
        if (res?.status == 200) {
          // store.dispatch({ type: "GUEST" });
          const jwtToken = res.headers.authorization;
          localStorage.setItem("jwt", "Bearer " + jwtToken);
          window.location.replace("/");
        }
      });
    }
    //jwt가 있는경우 jwt검증 -> 로그인 유지 or 로그인 종료
    else if (localStorage.getItem("jwt")) {
      verifyJwtApi().then((res) => {
        console.log("로그인 검증", res?.data.role);
        const path = pathName.split("/")[1];
        const role = res?.data.role;
        // 로그인이 되어있는 경우
        switch (role) {
          case "GUEST_USER":
            setLoginState({ state: false, href: "/acount/login", role: role });
            if (path == "reserve" || path == "mypage") {
              alert("로그인되지 않음");
              router.replace("/acount/login");
            }
            break;
          case "USER":
            setLoginState({ state: true, href: "/mypage", role: role });
            if (path == "acount") {
              console.log("유저 로그인 상태");
              router.replace("/mypage");
            }
            break;
          case "SELLER":
            setLoginState({ state: true, href: "/sellerpage", role: role });
            if (path == "acount" || path == "mypage") {
              console.log("판매자 로그인 상태");
              router.replace("/sellerpage");
            }
            break;
          case "ADMIN":
        }
      });
    }
  }, [pathName]);

  return (
    <>
      <Header loginState={loginState} />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </>
  );
}
