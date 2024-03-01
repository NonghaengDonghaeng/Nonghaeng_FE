"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./.module.css";
import { headerHref } from "@/storage/href";
import ScHead from "@/components/common/schead/schead";
import homeImg from "img/header/homeImg.png";
import sitemapImg from "img/header/sitemapImg.png";

type SubMenuType = { href: string; title: string };

export default function Header() {
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
        <ScHead />
        <div>
          <Link href="/pages/mypage/login">로그인</Link>
          <Link href="/pages/mypage">마이페이지</Link>
          <Link href="pages/sitemap">
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
