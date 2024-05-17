"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchMain from "./(components)/SearchMain/SearchMain";
import ListTitle from "@/common/components/ListTitle/ListTitle";
import ExpList from "@/common/components/ExpList/ExpList";
import LodgList from "@/common/components/LodgList/LodgList";
import getMainApi from "./(api)/getMainApi";
import styles from "./page.module.css";
import { expListContentDataType } from "@/common/types/expListDataType";
import { lodgListContentDataType } from "@/common/types/lodgListDataType";
import section1_bg from "img/bg/home_bg1.png";
import More_nonghang_Ic from "icon/more_nonghaeng_white.svg";
import homePageResData from "@/db/homePageResData.json";

export default function Home() {
  const [resData, setResData] = useState<{
    exp_summary_dto_list: expListContentDataType;
    room_tour_summary_dto_list: lodgListContentDataType;
  }>();

  useEffect(() => {
    getMainApi().then((res) => setResData(res?.data));
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
          <More_nonghang_Ic />
        </Link>
      </section>
      <SearchMain />
      <section className={styles.section2}>
        <article>
          <ListTitle title="우수체험" />
          <hr />
          <ExpList content={resData?.exp_summary_dto_list} />
        </article>
        <article>
          <ListTitle title="우수숙박" />
          <hr />
          <LodgList content={resData?.room_tour_summary_dto_list} />
        </article>
      </section>
    </main>
  );
}
