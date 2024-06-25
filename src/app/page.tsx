"use client";
import { useEffect, useState } from "react";
import SearchMain from "./(components)/SearchMain/SearchMain";
import ListTitle from "@/common/components/ListTitle/ListTitle";
import ExpList from "@/common/components/ExpList/ExpList";
import LodgList from "@/common/components/LodgList/LodgList";
import getMainApi from "./(api)/getMainApi";
import styles from "./page.module.css";
import { expListContentDataType } from "@/common/types/expListDataType";
import { lodgListContentDataType } from "@/common/types/lodgListDataType";
import MainSection from "@/app/(components)/MainSection/MainSection";
import homePageResData from "@/db/homePageResData.json";
import guestLoginApi from "./(api)/guestLoginApi";

export default function Home() {
  const [resData, setResData] = useState<{
    exp_summary_dto_list: expListContentDataType;
    room_tour_summary_dto_list: lodgListContentDataType;
  }>();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 게스트 로그인, 이미 로그인 중이라면 return이 오지 않음
    guestLoginApi().then((res) => {
      if (res?.status == 200) {
        const jwtToken = res.headers.authorization;
        localStorage.setItem("jwt", "Bearer " + jwtToken);
      }
    });
    //홈페이지 우수체험, 우수숙박 데이터 받아오기
    getMainApi().then((res) => {
      if (res?.status == 200) {
        setResData(res?.data);
        setVisible(true);
      }
    });
    // setResData(homePageResData);
    // setVisible(true);
  }, []);

  return (
    <main id="main">
      <MainSection />
      <SearchMain />
      <section className={styles.section2}>
        <article>
          <ListTitle title="우수체험" />
          <hr />
          <div className={visible ? "isvisible" : "isinvisible"}>
            <ExpList content={resData?.exp_summary_dto_list} />
          </div>
        </article>
        <article>
          <ListTitle title="우수숙박" />
          <hr />
          <div className={visible ? "isvisible" : "isinvisible"}>
            <LodgList content={resData?.room_tour_summary_dto_list} />
          </div>
        </article>
      </section>
    </main>
  );
}
