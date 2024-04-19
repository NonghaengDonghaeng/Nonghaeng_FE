"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useChange } from "@/hooks/useChange";
import { useSearch } from "@/hooks/useSearch";
import styles from "./Header.module.css";
import { headerHref } from "../../../../public/href/href";
import Nonghaeng_Ic from "icon/nonghaeng.svg";
import Sitemap_gray_Ic from "icon/sitemap_gray.svg";
import Search_gray_Ic from "icon/search_gray.svg";
import { inputType } from "@/types/eventType";
import { pageStateType } from "@/types/pageStateType";
import { formType } from "@/types/eventType";
import store from "@/redux/loginStateStore";
import { VerifyJwtApi } from "@/api/getLoginStateApi";

type SubMenuType = { href: string; title: string };

function Header() {
  const change = useChange();
  const search = useSearch();
  const pathName = usePathname();

  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    VerifyJwtApi().then(() => {
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
          <Nonghaeng_Ic />
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
            <Search_gray_Ic />
          </button>
        </form>
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
