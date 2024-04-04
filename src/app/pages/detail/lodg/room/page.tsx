"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useMove from "@/hooks/useMove";
import Link from "next/link";
import Image from "next/image";
import ClickCount from "@/components/common/clickcount/clickcount";
import { CustomRangeCalendar } from "@/components/common/calendar/calendar";
import NavDetail from "@/components/common/navdetail/navdetail";
import styles from "./page.module.css";
import lodg_detail from "@/db/lodgdata/detail.json";
import room_img from "img/lodg/room.png";
import person_img from "img/lodg/person.png";
import calenda_img from "img/lodg/calendar.png";
import great_img from "img/exp/great.png";
import reservation_img from "img/exp/reservation.png";

export default function page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { element, moveElement } = useMove();

  const [room_id, setRoom_id] = useState(searchParams.get("room_id"));
  const [isClick, setIsClick] = useState(false);
  const [img_url, setImg_url] = useState(lodg_detail.main_img_url);
  const [person_count, setPerson_count] = useState(1);
  const [room_count, setRoom_count] = useState(1);
  const [check_in, setCheck_in] = useState(null);
  const [check_out, setCheck_out] = useState(null);

  function routeReservation() {
    if (!check_in || !check_out) {
      alert("날짜를 선택해주세요.");
    } else {
      router.push(
        `/pages/reserve/lodg?room_id=${room_id}&person_count=${person_count}&room_count=${room_count}&check_in=${check_in}&check_out=${check_out}`
      );
    }
  }

  const imgList = lodg_detail.sub_img_url.map((item, index) => (
    <li key={index} onClick={() => setImg_url(item)}>
      <img
        src={item}
        className={`${img_url == item ? styles.img_on : styles.img_off}`}
      />
    </li>
  ));

  useEffect(() => console.log("농촌숙박 상세 api"), []);

  return (
    <>
      <section className={styles.section1}>
        <article>
          <img src={img_url} />
          <ul>{imgList}</ul>
        </article>
        <article>
          <span>
            <Link href={`/pages/detail?tour_id=${lodg_detail.tour_id}`}>
              {lodg_detail.tour_name}
            </Link>
            {" > "}
            {lodg_detail.room_name}
          </span>
          <h1>
            {lodg_detail.room_name}
            <span>잔여객실 : {lodg_detail.current_num_of_room}</span>
          </h1>
          <hr />
          <p>
            <label>인원</label>
            {`${lodg_detail.standard_capacity}인기준(최대${lodg_detail.max_capacity}인)`}
          </p>
          <p>
            <label>체크인 / 체크아웃</label>
            {`${lodg_detail.checkin_time} / ${lodg_detail.checkout_time}`}
          </p>
          <p>
            <label>가격</label>
            {`${lodg_detail.price_off_peak}원(주말, 공휴일 ${lodg_detail.price_holiday}원)`}
          </p>
          <ul>
            <li>
              <Image src={room_img} alt="room_img" />
              <ClickCount count={room_count} setCount={setRoom_count} />
            </li>
            <li>
              <Image src={person_img} alt="person_img" />
              <ClickCount count={person_count} setCount={setPerson_count} />
            </li>
            <li>
              <Image src={calenda_img} alt="calenda_img" />
              <div onClick={() => setIsClick(!isClick)}>
                {check_in || "체크인"}
                {" - "}
                {check_out || "체크아웃"}
              </div>
            </li>
          </ul>
          <ul>
            <li onClick={() => console.log("좋아요 api")}>
              좋아요
              <Image src={great_img} alt="great_img" />
            </li>
            <li onClick={routeReservation}>
              예약하기
              <Image src={reservation_img} alt="reservation_img" />
            </li>
          </ul>
          <CustomRangeCalendar
            setCheck_in={setCheck_in}
            setCheck_out={setCheck_out}
            isClick={isClick}
          />
        </article>
      </section>
      <section className={styles.section2}>
        <article ref={element[0]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "숙박후기", "숙박문의"]}
            nowRef={0}
          />
          기본정보
        </article>
        <article ref={element[1]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "숙박후기", "숙박문의"]}
            nowRef={1}
          />
          여행후기
        </article>
        <article ref={element[2]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "숙박후기", "숙박문의"]}
            nowRef={2}
          />
          문의
        </article>
      </section>
    </>
  );
}
