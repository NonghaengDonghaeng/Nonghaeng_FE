"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { headerMenuHref } from "@/model/href/href";
import SearchBasic from "@/common/components/SearchBasic/SearchBasic";
import Menu from "@/common/components/Menu/Menu";
import { useMediaQuery } from "react-responsive";
import { Nonghaeng_Ic, Sitemap_gray_Ic } from "icon/index";

type PropsType = { loginState: boolean };
type SubMenuType = { href: string; title: string };

function Header({ loginState }: PropsType) {
  const pathName = usePathname();
  const [isLogin, setIsLogin] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width:767px) ",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width:1024px) ",
  });
  useEffect(() => setIsClick(false), [isMobile, isDesktop, pathName]);

  useEffect(() => {
    setIsLogin(loginState);
  }, [loginState]);

  function logout() {
    localStorage.removeItem("jwt");
    setIsLogin(false);
    window.location.replace("/");
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
            {isLogin ? (
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
