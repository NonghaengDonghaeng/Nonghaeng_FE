"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";
import { bg_img1 } from "img/index";

type propsType = {
  href: {
    mainMenu: { href: string; title: string };
    subMenu: { href: string; title: string }[];
  };
};

export default function Nav({ href }: propsType) {
  const subMenuList = href.subMenu.map((item, index) => (
    <li key={index}>
      <Link href={item.href}>{item.title}</Link>
    </li>
  ));

  return (
    <nav id="nav">
      <div className={styles.nav_inner}>
        <Image
          src={bg_img1}
          alt="bg_img"
          width={800}
          height={800}
          priority={true}
        />
        <Link href={href.mainMenu.href}>
          <div></div>
          {href.mainMenu.title}
        </Link>
        <ul>{subMenuList}</ul>
      </div>
    </nav>
  );
}
