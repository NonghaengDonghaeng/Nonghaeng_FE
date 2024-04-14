"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useChange } from "@/hooks/useChange";
import { useSearch } from "@/hooks/useSearch";
import styles from "./Header.module.css";
import { headerHref } from "href/href";
import homeImg from "img/header/homeImg.png";
import sitemapImg from "img/header/sitemapImg.png";
import searchImg from "img/header/searchImg.png";
import { inputType } from "@/types/eventType";
import { pageStateType } from "@/types/pageStateType";
import { formType } from "@/types/eventType";
import store from "@/redux/loginStateStore";

type SubMenuType = { href: string; title: string };

function Header() {
  const change = useChange();
  const search = useSearch();

  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      store.dispatch({ type: "LOGIN" });
      setLoginState(true);
    } else {
      setLoginState(false);
    }
  }, []);

  function logout() {
    localStorage.removeItem("jwt");
    setLoginState(false);
    store.dispatch({ type: "LOGOUT" });
  }

  const [searchItem, setSearchItem] = useState<pageStateType>({
    search_word: "",
  });

  function onSubmit(e: formType) {
    e.preventDefault();
    search({ searchItem: searchItem });
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
  const mainMenuList = headerHref.map((item, index) => (
    <li key={index}>
      <Link href={item.href}>{item.title}</Link>
      {item.subMenu && subMenuList(item.subMenu)}
    </li>
  ));

  return (
    <header id="header">
      <div className={styles.header_inner}>
        <Link href="/">
          <Image src={homeImg} alt="homeImg" priority={true}></Image>
        </Link>
        <ul
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {mainMenuList}
        </ul>
        <form className={styles.header_search} onSubmit={onSubmit}>
          <input
            onChange={(e: inputType) =>
              change({
                changeItem: searchItem,
                setChangeItem: setSearchItem,
                e,
              })
            }
            placeholder="알고 싶은 정보가 있으세요?"
            name="search_word"
          ></input>
          <button type="submit">
            <Image src={searchImg} alt="searchImg"></Image>
          </button>
        </form>
        <div>
          {loginState ? (
            <button onClick={logout}>로그아웃</button>
          ) : (
            <Link href="/pages/mypage/login">로그인</Link>
          )}

          <Link href="/pages/mypage">마이페이지</Link>
          <Link href="/pages/sitemap">
            <Image src={sitemapImg} alt="sitemapImg" priority={true}></Image>
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