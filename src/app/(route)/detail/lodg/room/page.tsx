"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useMove from "@/hooks/useMove";
import Link from "next/link";
import Image from "next/image";
import ClickCount from "@/components/common/ClickCount/ClickCount";
import { CustomRangeCalendar } from "@/components/common/Calendars/Calendars";
import NavDetail from "@/components/common/NavDetail/NavDetail";
import styles from "./page.module.css";
import { roomDetailPageDataType } from "@/types/dataType/detailPageDataType";
import room_img from "img/room_orange.png";
import person_img from "img/participant_orange.png";
import calenda_img from "img/calendar_orange.png";
import great_img from "img/great_orange.png";
import reservation_img from "img/calendar_green.png";
import roomDetailPageResData from "@/db/roomdata/detail.json";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { element, moveElement } = useMove();

  const [room_id, setRoom_id] = useState(searchParams.get("room_id"));
  const [isClick, setIsClick] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | any>();
  const [person_count, setPerson_count] = useState(1);
  const [room_count, setRoom_count] = useState(1);
  const [check_in, setCheck_in] = useState(null);
  const [check_out, setCheck_out] = useState(null);

  const [resData, setResData] = useState<roomDetailPageDataType>();

  useEffect(() => {
    console.log("농촌숙박 상세 api");
    setResData(roomDetailPageResData);
  }, []);

  useEffect(() => setImgUrl(resData?.main_img_url), [resData?.main_img_url]);

  function routeReservation() {
    if (!check_in || !check_out) {
      alert("날짜를 선택해주세요.");
    } else {
      router.push(
        `/reserve/lodg?room_id=${room_id}&person_count=${person_count}&room_count=${room_count}&check_in=${check_in}&check_out=${check_out}`
      );
    }
  }

  const imgList = resData?.sub_img_url.map((item, index) => (
    <li key={index} onClick={() => setImgUrl(item)}>
      <Image
        src={item}
        className={`${imgUrl == item ? styles.img_on : styles.img_off}`}
        alt="sub_img"
        width={800}
        height={800}
      />
    </li>
  ));
  return (
    <>
      <section className={styles.section1}>
        <article>
          <Image src={imgUrl} alt="main_img" width={800} height={800} />
          <ul>{imgList}</ul>
        </article>
        <article>
          <span>
            <Link href={`/detail?tour_id=${resData?.tour_id}`}>
              {resData?.tour_name}
            </Link>
            {" > "}
            {resData?.room_name}
          </span>
          <h1>
            {resData?.room_name}
            <span>잔여객실 : {resData?.current_num_of_room}</span>
          </h1>
          <hr />
          <p>
            <label>인원</label>
            {`${resData?.standard_capacity}인기준(최대${resData?.max_capacity}인)`}
          </p>
          <p>
            <label>체크인 / 체크아웃</label>
            {`${resData?.checkin_time} / ${resData?.checkout_time}`}
          </p>
          <p>
            <label>가격</label>
            {`${resData?.price_off_peak}원(주말, 공휴일 ${resData?.price_holiday}원)`}
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
