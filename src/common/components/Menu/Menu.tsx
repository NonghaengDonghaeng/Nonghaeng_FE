import Link from "next/link";
import styles from "./Menu.module.css";
import { menuHref } from "@/model/href/href";
import More_Ic from "icon/more_gray.svg";
import SearchBasic from "../SearchBasic/SearchBasic";

type ItemType = {
  title: string;
  href: string;
  subMenu: {
    title: string;
    href: string;
  }[];
};

export default function Menu() {
  const subMenuList = (item: ItemType) => (
    <ul>
      <li>
        <Link href={item.href}>{item.title}</Link>
      </li>
      {item.subMenu.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
  const mainMenuList = menuHref.map((item, index) => (
    <div key={index}>
      <span>
        {item.title}
        <More_Ic />
      </span>
      {item.subMenu && subMenuList(item)}
    </div>
  ));

  return (
    <div className={styles.menu}>
      <SearchBasic />
      {mainMenuList}
    </div>
  );
}
