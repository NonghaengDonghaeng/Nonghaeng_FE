import Link from "next/link";
import styles from "./Menu.module.css";
import { introHref, tripHref } from "href/href";
import More_Ic from "icon/more_gray.svg";

export default function Menu() {
  const introHrefList = introHref.subMenu.map((item, index) => (
    <li key={index}>
      <Link href={item.href}>{item.title}</Link>
    </li>
  ));
  const tripHrefList = tripHref.subMenu.map((item, index) => (
    <li key={index}>
      <Link href={item.href}>{item.title}</Link>
    </li>
  ));
  return (
    <div className={styles.menu}>
      <div>
        <span>
          농행동행
          <More_Ic />
        </span>
        <ul>
          <li>
            <Link href={introHref.mainMenu.href}>
              {introHref.mainMenu.title}
            </Link>
          </li>
          {introHrefList}
        </ul>
      </div>
      <div>
        <span>
          농촌여행
          <More_Ic />
        </span>
        <ul>
          <li>
            <Link href={tripHref.mainMenu.href}>{tripHref.mainMenu.title}</Link>
          </li>
          {tripHrefList}
        </ul>
      </div>
    </div>
  );
}
