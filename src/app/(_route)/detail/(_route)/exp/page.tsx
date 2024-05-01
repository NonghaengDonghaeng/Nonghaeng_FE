"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import useMove from "@/hooks/useMove";
import NavDetail from "../../(components)/NavDetail/NavDetail";
import styles from "./page.module.css";
import { expDetailDataType } from "../../(types)/expDetailDataType";
import Grade_orange_Ic from "icon/grade_orange.svg";
import Person_orange_Ic from "icon/person_orange.svg";
import Time_orange_Ic from "icon/time_orange.svg";
import Price_orange_Ic from "icon/price_orange.svg";
import Great_orange_Ic from "icon/great_orange.svg";
import Calendar_green_Ic from "icon/calendar_green.svg";
import expDetailPageResData from "@/db/expdata/detail.json";
import DetailImg from "../../(components)/DetailImg/DetailImg";
import { getExpDetailApi } from "../../(api)/getExpDetailApi";

export default function Page() {
  const { element, moveElement } = useMove();
  const searchParams = useSearchParams();

  const [resData, setResData] = useState<expDetailDataType | any>();
  const [expId, setExpId] = useState<number>(
    Number(searchParams.get("exp_id"))
  );

  // api useEffect
  useEffect(() => {
    console.log("체험 상세 api");
    // const res = getExpDetailApi({ expId });
    setResData(expDetailPageResData);
  }, []);

  return (
    <>
      <section className={styles.section1}>
        <article>
          <DetailImg imgUrl={resData?.img_url} />
        </article>
        <article>
          <span>
            <Link href={`/detail?tour_id=${resData?.tour_info.tourId}`}>
              {resData?.tour_info.tourName}
            </Link>
            {" > "}
            {resData?.experience_name}
          </span>
          <h1>
            {resData?.experience_name}
            <span>
              <Grade_orange_Ic />
              {resData?.grade.toFixed(1)}
            </span>
          </h1>
          <hr />
          <h2>{resData?.detail_introduction}</h2>
          <div>
            <p>
              <Person_orange_Ic />
              <label>참여인원</label>
              {resData?.min_participant}명{" ~ "}
              {resData?.max_participant}명
            </p>
            <p>
              <Time_orange_Ic />
              <label>소요시간</label>
              {resData?.duration_hours}시간
            </p>
            <p>
              <Price_orange_Ic />
              <label>체험비용</label>
              {resData?.price}원
            </p>
          </div>
          <ul>
            <li onClick={() => console.log("좋아요 api")}>
              좋아요
              <Great_orange_Ic />
            </li>
            <li>
              <Link href={`/reserve/exp?exp_id=${expId}`}>
                예약하기
                <Calendar_green_Ic />
              </Link>
            </li>
          </ul>
        </article>
      </section>
      <section className={styles.section2}>
        <article ref={element[0]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "체험후기", "체험문의"]}
            nowRef={0}
          />
          기본정보
        </article>
        <article ref={element[1]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "체험후기", "체험문의"]}
            nowRef={1}
          />
          여행후기
        </article>
        <article ref={element[2]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "체험후기", "체험문의"]}
            nowRef={2}
          />
          문의
        </article>
      </section>
    </>
  );
}
