"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useMove from "@/hooks/useMove";
import ClickCount from "@/common/components/ClickCount/ClickCount";
import { CustomRangeCalendar } from "../../../(components)/CustomRoundCalendar/CustomRangeCalendar";
import NavDetail from "../../../(components)/NavDetail/NavDetail";
import styles from "./page.module.css";
import { roomDetailDataType } from "../../../(types)/roomDetailDataType";
import Room_orange_Ic from "icon/room_orange.svg";
import Person_orange_Ic from "icon/person_orange.svg";
import Calendar_orange_Ic from "icon/calendar_orange.svg";
import roomDetailPageResData from "@/db/roomdata/detail.json";
import DetailImg from "../../../(components)/DetailImg/DetailImg";
import { getRoomDetailApi } from "../../../(api)/getRoomDetailApi";
import LikeAndReserve from "../../../(components)/LikeAndReserve/LikeAndReserve";
import RoomInfo from "../../../(components)/RoomInfo/RoomInfo";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { element, moveElement } = useMove();

  const [roomId, setRoomId] = useState(Number(searchParams.get("room_id")));
  const [isClick, setIsClick] = useState(false);
  const [person_count, setPerson_count] = useState(1);
  const [room_count, setRoom_count] = useState(1);
  const [check_in, setCheck_in] = useState(null);
  const [check_out, setCheck_out] = useState(null);

  const [resData, setResData] = useState<roomDetailDataType>();

  useEffect(() => {
    getRoomDetailApi({ roomId }).then((res) => {
      console.log(res, res?.data);
      setResData(res?.data);
    });
  }, []);

  function routeReservation() {
    if (!check_in || !check_out) {
      alert("날짜를 선택해주세요.");
    } else {
      router.push(
        `/reserve/lodg?room_id=${roomId}&person_count=${person_count}&room_count=${room_count}&check_in=${check_in}&check_out=${check_out}`
      );
    }
  }

  return (
    <>
      <section className={styles.section1}>
        <article>
          <DetailImg photoInfo={resData?.photo_info_dto_list} />
        </article>
        <article>
          <RoomInfo roomData={resData} />
          <div>
            <div>
              <Room_orange_Ic />
              <ClickCount count={room_count} setCount={setRoom_count} />
            </div>
            <div>
              <Person_orange_Ic />
              <ClickCount count={person_count} setCount={setPerson_count} />
            </div>
          </div>
          <div>
            <Calendar_orange_Ic />
            <div onClick={() => setIsClick(!isClick)}>
              {check_in || "체크인"}
              {" - "}
              {check_out || "체크아웃"}
            </div>
          </div>
          <CustomRangeCalendar
            setCheck_in={setCheck_in}
            setCheck_out={setCheck_out}
            isClick={isClick}
            setIsClick={setIsClick}
          />
          <LikeAndReserve
            type="room"
            id={roomId}
            routerFunction={routeReservation}
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
