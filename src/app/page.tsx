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

export default function Home() {
  const [resData, setResData] = useState<{
    exp_summary_dto_list: expListContentDataType;
    room_tour_summary_dto_list: lodgListContentDataType;
  }>();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
