"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TourList, ExpList, LodgList } from "@/components/common/List/List";
import styles from "./page.module.css";
import {
  expListContentDataType,
  lodgListContentDataType,
  tourListContentDataType,
} from "@/types/dataType/listPageDataType";
import more_green from "img/more_green.png";
import tripPageResData from "@/db/tripPageResData.json";

export default function Page() {
  const [resData, setResData] = useState<{
    tourContent: tourListContentDataType;
    expContent: expListContentDataType;
    lodgContent: lodgListContentDataType;
  }>();

  // api useEffect
  useEffect(() => {
    console.log("농촌여행 메인 api");
    setResData(tripPageResData);
  }, []);

  return (
    <>
      <section className={styles.trip_main}>
        <article>
          <h1>
            농촌관광
            <Link href="trip/tour">
              더 많은 농촌관광 보러가기
              <Image src={more_green} alt="more_green" />
            </Link>
          </h1>
          <hr />
          <TourList content={resData?.tourContent} />
        </article>
        <article>
          <h1>
            농촌체험
            <Link href="trip/exp">
              더 많은 농촌체험 보러가기
              <Image src={more_green} alt="more_green" />
            </Link>
          </h1>
          <hr />
          <ExpList content={resData?.expContent} />
        </article>
        <article>
          <h1>
            농촌숙박
            <Link href="trip/exp">
              더 많은 농촌숙박 보러가기
              <Image src={more_green} alt="more_green" />
            </Link>
          </h1>
          <hr />
          <LodgList content={resData?.lodgContent} />
        </article>
      </section>
    </>
  );
}
