import Link from "next/link";
import styles from "./Footer.module.css";
import { footerHref } from "../../../../public/href/href";

export default function Footer() {
  const mainLink = footerHref.map((item, index) => (
    <Link href={item.href} key={index}>
      {item.title}
    </Link>
  ));
  return (
    <footer id="footer">
      <div className={styles.footer_inner}>
        <div></div>
        <hr></hr>
        <div>
          {mainLink}
          <p>사업자 소개</p>
          <p>저작권 관련 글</p>
        </div>
      </div>
    </footer>
  );
}
