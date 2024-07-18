"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import {usePathname} from "next/navigation";
import {useLogin} from "@/hooks/useLogin";
import SearchBasic from "@/components/SearchBasic/SearchBasic";
import Menu from "@/components/Menu/Menu";
import {useMediaQuery} from "react-responsive";
import styles from "./Header.module.css";
import {headerMenuHref} from "@/models/href";
import {MenuIc, NongHaengIc} from "public/svg";

type SubMenuType = { href: string; title: string };

function Header() {
  const pathName = usePathname();
  const [isClick, setIsClick] = useState(false);

  const { login, setLogin } = useLogin();

  const isMobile = useMediaQuery({
    query: "(max-width:767px) ",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width:1024px) ",
  });
  useEffect(() => setIsClick(false), [isMobile, isDesktop, pathName]);

  function logout() {
    setLogin(false);
    localStorage.removeItem("jwt");
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
            <NongHaengIc />
          </Link>
          <ul
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {mainMenuList}
          </ul>
          <SearchBasic />
          <div>
            {login ? (
              <button onClick={logout}>로그아웃</button>
            ) : (
              <Link href="/acount/login">로그인</Link>
            )}
            <Link href={login ? "/mypage" : "/acount/login"}>마이페이지</Link>
            <Link href="/sitemap">
              <MenuIc />
            </Link>
          </div>
          <button onClick={() => setIsClick(!isClick)}>
            <MenuIc />
          </button>
          <div
            className={`${styles.subMenu_bg} ${isHover && styles.on}`}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          ></div>
        </div>
      </header>
      <Menu isClick={isClick} />
    </>
  );
}

export default Header;
