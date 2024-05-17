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

  // api useEffect
  useEffect(() => {
    getTripMainApi().then((res) => setResData(res?.data));
  }, []);

  return (
    <>
      <section className={styles.trip_main}>
        <article>
          <ListTitle title="농촌관광" />
          <hr />
          <TourList content={resData?.tour_summary_dto_list} />
        </article>
        <article>
          <ListTitle title="농촌체험" />
          <hr />
          <ExpList content={resData?.exp_summary_dto_list} />
        </article>
        <article>
          <ListTitle title="농촌숙박" />
          <hr />
          <LodgList content={resData?.room_tour_summary_dto_list} />
        </article>
      </section>
    </>
  );
}
