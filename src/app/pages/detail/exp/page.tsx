"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useMove from "@/hooks/useMove";
import NavDetail from "@/components/common/navdetail/navdetail";
import styles from "./page.module.css";
import exp_detail from "@/db/expdata/detail.json";
import grade_img from "img/tour/grade_img.png";
import participant_img from "img/exp/participant.png";
import time_img from "img/exp/time.png";
import price_img from "img/exp/price.png";
import great_img from "img/exp/great.png";
import reservation_img from "img/exp/reservation.png";

export default function page() {
  const { element, moveElement } = useMove();

  const [pageState, setPageState] = useState({
    img_url: exp_detail.main_img_url,
  });

  useEffect(() => {
    // api요청
  }, []);

  const imgList = exp_detail.sub_img_url.map((item, index) => (
    <li
      key={index}
      onClick={() => setPageState({ ...pageState, img_url: item })}
    >
      <img
        src={item}
        className={`${
          pageState.img_url == item ? styles.img_on : styles.img_off
        }`}
      />
    </li>
  ));
  return (
    <>
      <section className={styles.section1}>
        <article>
          <img src={pageState.img_url} />
          <ul>{imgList}</ul>
        </article>
        <article>
          <span>
            <Link
              href={`/pages/detail/tour?tour_id=${exp_detail.tour_info.tourId}`}
            >
              {exp_detail.tour_info.tourName}
            </Link>
            {" > "}
            {exp_detail.experience_name}
          </span>
          <h1>
            {exp_detail.experience_name}
            <span>
              <Image src={grade_img} alt="grade_img" />
              {exp_detail.grade.toFixed(1)}
            </span>
          </h1>
          <hr />
          <p>
            <Image src={participant_img} alt="participant_img" />
            <label>참여인원</label>
            {exp_detail.min_participant}명{" ~ "}
            {exp_detail.max_participant}명
          </p>
          <p>
            <Image src={time_img} alt="time_img" />
            <label>소요시간</label>
            {exp_detail.duration_hours}시간
          </p>
          <p>
            <Image src={price_img} alt="price_img" />
            <label>체험비용</label>
            {exp_detail.price}원
          </p>
          <ul>
            <li onClick={() => console.log("좋아요 api")}>
              좋아요
              <Image src={great_img} alt="great_img" />
            </li>
            <li>
              예약하기
              <Image src={reservation_img} alt="reservation_img" />
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
