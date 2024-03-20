"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./.module.css";
import bg_img1 from "img/nav/nav_bg1.png";

type hrefType = {
  href: {
    mainMenu: { href: string; title: string };
    subMenu: { href: string; title: string }[];
  };
};

export default function Nav({ href }: hrefType) {
  const subMenuList = href.subMenu.map((item, index) => (
    <li key={index}>
      <Link href={item.href}>{item.title}</Link>
    </li>
  ));

  return (
    <nav id="nav">
      <div className={styles.nav_inner}>
        <Image src={bg_img1} alt="bg_img" width={1000} priority={true} />
        <Link href={href.mainMenu.href}>
          <div></div>
          {href.mainMenu.title}
        </Link>
        <ul>{subMenuList}</ul>
      </div>
    </nav>
  );
}
