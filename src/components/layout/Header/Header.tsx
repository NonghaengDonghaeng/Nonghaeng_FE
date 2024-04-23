"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { menuHref } from "href/href";
import Nonghaeng_Ic from "icon/nonghaeng.svg";
import Sitemap_gray_Ic from "icon/sitemap_gray.svg";
import store from "@/redux/loginStateStore";
import { verifyJwtApi } from "@/api/loginApi";
import ScBase from "@/components/common/Searchs/Searchs";

type SubMenuType = { href: string; title: string };

function Header() {
  const pathName = usePathname();

  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    verifyJwtApi().then(() => {
      if (store.getState() == true) {
        setLoginState(true);
      } else setLoginState(false);
    });
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
  const mainMenuList = menuHref.map((item, index) => (
    <li key={index}>
      <Link href={item.href}>{item.title}</Link>
      {item.subMenu && subMenuList(item.subMenu)}
    </li>
  ));

  return (
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
        <ScBase />
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
        <div
          className={`${styles.subMenu_bg} ${isHover && styles.on}`}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        ></div>
      </div>
    </header>
  );
}

export default Header;
