"use client";
import { useEffect, useState } from "react";
import ListTitle from "@/common/components/ListTitle/ListTitle";
import TourList from "@/common/components/TourList/TourList";
import ExpList from "@/common/components/ExpList/ExpList";
import LodgList from "@/common/components/LodgList/LodgList";
import styles from "./page.module.css";
import { tourListContentDataType } from "@/common/types/tourListDataType";
import { expListContentDataType } from "@/common/types/expListDataType";
import { lodgListContentDataType } from "@/common/types/lodgListDataType";
import tripPageResData from "@/db/tripPageResData.json";
import getTripMainApi from "./(api)/getTripMainApi";

export default function Page() {
  const [resData, setResData] = useState<{
    tour_summary_dto_list: tourListContentDataType;
    exp_summary_dto_list: expListContentDataType;
    room_tour_summary_dto_list: lodgListContentDataType;
  }>();
  const [visible, setVisible] = useState(false);

  // api useEffect
  useEffect(() => {
    getTripMainApi().then((res) => {
      if (res?.status == 200) {
        setResData(res.data);
        setVisible(true);
      }
    });
    // setResData(tripPageResData);
    // setVisible(true);
  }, []);

  return (
    <section className={styles.trip_main}>
      <article>
        <ListTitle title="농촌관광" />
        <hr />
        <div className={visible ? "isvisible" : "isinvisible"}>
          <TourList content={resData?.tour_summary_dto_list} />
        </div>
      </article>
      <article>
        <ListTitle title="농촌체험" />
        <hr />
        <div className={visible ? "isvisible" : "isinvisible"}>
          <ExpList content={resData?.exp_summary_dto_list} />
        </div>
      </article>
      <article>
        <ListTitle title="농촌숙박" />
        <hr />
        <div className={visible ? "isvisible" : "isinvisible"}>
          <LodgList content={resData?.room_tour_summary_dto_list} />
        </div>
      </article>
    </section>
  );
}
