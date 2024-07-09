"use client";
import {useEffect, useState, Suspense, ReactNode} from "react";
import {useRouter} from "next/navigation";
import {usePathname} from "next/navigation";
import guestLoginApi from "@/common/api/guestLoginApi";
import verifyJwtApi from "@/common/api/verifyJwtApi";
import useStickyState from "@/hooks/useStickyState";
import {LoginContext} from "@/hooks/useLogin";

interface PropsType {
  children: ReactNode;
  initialLoginState?: boolean;
}

function AdminProvider({children, initialLoginState = false}: PropsType) {
  const router = useRouter();
  const pathName = usePathname();
  const [login, setLogin] = useStickyState(initialLoginState, "login");

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
            setLogin(false);
            if (path == "reserve" || path == "mypage") {
              alert("로그인되지 않음");
              router.replace("/acount/login");
            }
            break;
          case "USER":
            setLogin(true);
            if (path == "acount") {
              console.log("유저 로그인 상태");
              router.replace("/mypage");
            }
            break;
          case "SELLER":
            setLogin(true);
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
    <LoginContext.Provider value={{login, setLogin}}>
      {children}
    </LoginContext.Provider>
  );
}

export default AdminProvider;
