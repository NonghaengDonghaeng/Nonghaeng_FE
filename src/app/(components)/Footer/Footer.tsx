"use client";
import Link from "next/link";
import styles from "./Footer.module.css";
import { footerHref } from "@/model/href/href";
import { Home_Ic, Menu_Ic, Search_Ic, Person_Ic, Back_Ic } from "icon/index";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Menu from "@/common/components/Menu/Menu";
import SearchBasic from "@/common/components/SearchBasic/SearchBasic";

export default function Footer() {
  const pathName = usePathname();
  const router = useRouter();

  const [isClick, setIsClick] = useState({ menu: false, search: false });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });

  useEffect(() => setIsClick({ menu: false, search: false }), [
    pathName,
    isTablet,
  ]);

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
            <li onClick={() => window.location.replace("/")}>
              <Home_Ic />
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
      {isClick.search && <SearchBasic />}
    </>
  );
}
