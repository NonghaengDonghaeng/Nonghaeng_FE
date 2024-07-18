"use client";
import Link from "next/link";
import styles from "./Footer.module.css";
import { footerHref } from "@/models/href";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Menu from "@/components/Menu/Menu"
import SearchBasic from "@/components/SearchBasic/SearchBasic";
import {SearchIc, MoreLeftIc, HomeIc, MenuIc, PersonIc} from "public/svg";

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
              <MenuIc />
            </li>
            <li
              onClick={() =>
                setIsClick({ ...isClick, search: !isClick.search, menu: false })
              }
            >
              <SearchIc />
            </li>
            <li onClick={() => window.location.replace("/")}>
              <HomeIc />
            </li>
            <li>
              <Link href="/mypage">
                <PersonIc />
              </Link>
            </li>
            <li onClick={routeBack}>
              <MoreLeftIc />
            </li>
          </ul>
        </div>
      </footer>
      {isClick.menu && <Menu isClick={isClick.menu} />}
      {isClick.search && <SearchBasic />}
    </>
  );
}
