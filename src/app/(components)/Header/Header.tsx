"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { headerMenuHref } from "@/model/href/href";
import store from "@/redux/loginStateStore";
import { verifyJwtApi } from "@/app/(_route)/acount/(api)/loginApi";
import SearchBasic from "@/common/components/SearchBasic/SearchBasic";
import Menu from "@/common/components/Menu/Menu";
import { useMediaQuery } from "react-responsive";
import { Nonghaeng_Ic, Sitemap_gray_Ic } from "icon/index";
import guestLoginApi from "@/app/(api)/guestLoginApi";

type SubMenuType = { href: string; title: string };

function Header() {
  const pathName = usePathname();
  const [loginState, setLoginState] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width:767px) ",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width:1024px) ",
  });
  useEffect(() => setIsClick(false), [isMobile, isDesktop, pathName]);

  // 로그인 상태관리
  useEffect(() => {
    // jwt가 없는경우 게스트로 로그인시킴
    if (!localStorage.getItem("jwt")) {
      // 게스트 로그인, 이미 로그인 중이라면 return이 오지 않음
      guestLoginApi().then((res) => {
        if (res?.status == 200) {
          store.dispatch({ type: "GUEST" });
          const jwtToken = res.headers.authorization;
          localStorage.setItem("jwt", "Bearer " + jwtToken);
        }
      });
    }
    //jwt 검증
    else {
      verifyJwtApi().then((res) => {
        if (res?.data.role == "USER") {
          setLoginState(true);
          store.dispatch({ type: "USER" });
        } else {
          store.dispatch({ type: "GUEST" });
          setLoginState(false);
        }
      });
    }
  }, [pathName]);

  function logout() {
    localStorage.removeItem("jwt");
    setLoginState(false);
    store.dispatch({ type: "LOGOUT" });
  }

  const [isHover, setIsHover] = useState(false);
  const subMenuList = (subMenu: SubMenuType[]) => (
    <ul className={`${styles.subMenu} ${isHover && styles.on}`}>
      {subMenu.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );

  const mainMenuList = headerMenuHref.map((item, index) => (
    <li key={index}>
      <Link href={item.href}>{item.title}</Link>
      {item.subMenu && subMenuList(item.subMenu)}
    </li>
  ));

  return (
    <>
      <header id="header">
        <div className={styles.header_inner}>
          <Link href="/">
            <Nonghaeng_Ic />
          </Link>
          <ul
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {mainMenuList}
          </ul>
          <SearchBasic />
          <div>
            {loginState ? (
              <button onClick={logout}>로그아웃</button>
            ) : (
              <Link href="/acount/login">로그인</Link>
            )}
            <Link href={loginState ? "/mypage" : "/acount/login"}>
              마이페이지
            </Link>
            <Link href="/sitemap">
              <Sitemap_gray_Ic />
            </Link>
          </div>
          <button onClick={() => setIsClick(!isClick)}>
            <Sitemap_gray_Ic />
          </button>
          <div
            className={`${styles.subMenu_bg} ${isHover && styles.on}`}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          ></div>
        </div>
      </header>
      {isClick && <Menu />}
    </>
  );
}

export default Header;
