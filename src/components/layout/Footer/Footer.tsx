"use client";
import Link from "next/link";
import styles from "./Footer.module.css";
import { footerHref } from "../../../../public/href/href";
import Home_Ic from "icon/home.svg";
import Menu_Ic from "icon/sitemap_gray.svg";
import Search_Ic from "icon/search_gray.svg";
import Person_Ic from "icon/person_gray.svg";
import Back_Ic from "icon/back_gray.svg";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Menu from "@/components/common/Menu/Menu";
import ScBase from "@/components/common/Searchs/Searchs";

export default function Footer() {
  const pathName = usePathname();
  const router = useRouter();

  const [isClick, setIsClick] = useState({ menu: false, search: false });

  useEffect(() => setIsClick({ menu: false, search: false }), [pathName]);

  const routeBack = () => {
    router.back();
  };

  const mainLink = footerHref.map((item, index) => (
    <Link href={item.href} key={index}>
      {item.title}
    </Link>
  ));
  return (
    <>
      <footer id="footer">
        <div className={styles.footer_inner}>
          <div></div>
          <hr></hr>
          <div>
            {mainLink}
            <p>사업자 소개</p>
            <p>저작권 관련 글</p>
          </div>
          <ul>
            <li
              onClick={() =>
                setIsClick({ ...isClick, menu: !isClick.menu, search: false })
              }
            >
              <Menu_Ic />
            </li>
            <li
              onClick={() =>
                setIsClick({ ...isClick, search: !isClick.search, menu: false })
              }
            >
              <Search_Ic />
            </li>
            <li>
              <Link href="/">
                <Home_Ic />
              </Link>
            </li>
            <li>
              <Link href="/mypage">
                <Person_Ic />
              </Link>
            </li>
            <li onClick={routeBack}>
              <Back_Ic />
            </li>
          </ul>
        </div>
      </footer>
      {isClick.menu && <Menu />}
      {isClick.search && <ScBase />}
    </>
  );
}
