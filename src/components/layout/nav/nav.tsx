import Link from "next/link";
import styles from "./.module.css";

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
        <Link href={href.mainMenu.href}>
          <div></div>
          {href.mainMenu.title}
        </Link>
        <ul>{subMenuList}</ul>
      </div>
    </nav>
  );
}
