"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScMain } from "@/components/common/Searchs/Searchs";
import { ExpList, LodgList } from "@/components/common/Lists/Lists";
import styles from "./page.module.css";
import {
  expListContentDataType,
  lodgListContentDataType,
} from "@/types/dataType/listPageDataType";
import section1_bg from "img/bg/home_bg1.png";
import More_nonghang from "icon/more_nonghaeng_white.svg";
import more_green from "img/more_green.png";
import homePageResData from "@/db/homePageResData.json";

export default function Home() {
  const [resData, setResData] = useState<{
    expContent: expListContentDataType;
    lodgContent: lodgListContentDataType;
  }>();

  useEffect(() => {
    console.log("홈 페이지 api");
    setResData(homePageResData);
  }, []);

  return (
    <main id="main">
      <section className={styles.section1}>
        <Image src={section1_bg} alt="section1_bg" priority={true}></Image>
        <h1>
          똑같은 여행은 지루해...
          <br />
          농행동행이 도와드릴게요!
        </h1>
        <h2>
          테마별 숨은 명소를 모두 모아
          <br />더 편안한 여행계획을 만드는 똑똑한 플랫폼
        </h2>
        <Link href="/intro/nonghaeng">
          농행동행 알아보기
          <More_nonghang width={26} height={14} />
        </Link>
      </section>
      <ScMain />
      <section className={styles.section2}>
        <article>
          <h1>
            우수 체험
            <Link href="/trip/exp">
              더 많은 농촌체험 보러가기
              <Image src={more_green} alt="more_experience"></Image>
            </Link>
          </h1>
          <hr />
          <ExpList content={resData?.expContent} />
        </article>
        <article>
          <h1>
            우수 숙박
            <Link href="/trip/lodg">
              더 많은 농촌숙박 보러가기
              <Image src={more_green} alt="more_lodgement"></Image>
            </Link>
          </h1>
          <hr />
          <LodgList content={resData?.lodgContent} />
        </article>
      </section>
    </main>
  );
}
