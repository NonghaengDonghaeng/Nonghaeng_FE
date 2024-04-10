import Image from "next/image";
import Link from "next/link";
import styles from "./list.module.css";
import region_img from "img/region/orange.png";
import exp_img from "img/exp/orange.png";
import lodg_img from "img/lodg/orange.png";
import ClickCount from "../ClickCount/ClickCount";
import {
  tourListContentDataType,
  expListContentDataType,
  lodgListContentDataType,
  roomListDataType,
} from "@/types/dataType/listPageDataType";
import { useEffect, useState } from "react";
import React from "react";
import room_img from "img/lodg/room.png";
import calendar_img from "img/lodg/calendar.png";
import person_img from "img/lodg/person.png";
import { CustomRangeCalendar } from "../Calendar/Calendar";
import roomListResData from "@/db/roomdata/list.json";

// TourList -----------------------------------------------------

type TourListPropsType = {
  content: tourListContentDataType | undefined;
};

export function TourList({ content }: TourListPropsType) {
  const tourList = content?.map((item, index) => (
    <li key={index}>
      <Link href={`/pages/detail?tour_id=${item.tour_id}`}>
        <div>
          <img src={item.img_url} />
          <span>
            <Image src={region_img} alt="region_img" />
            {item.area_name}
          </span>
        </div>
        <div>
          <h1>
            {item.name}
            <span>{item.tour_type}</span>
          </h1>
          <h2>{item.one_line_intro}</h2>
          <div>
            <span>
              <Image src={exp_img} alt="exp_img" />
              체험:{item.count_experience}
            </span>
            <span>
              <Image src={lodg_img} alt="lodg_img" />
              숙박:{item.count_room}
            </span>
          </div>
        </div>
      </Link>
    </li>
  ));
  return <ul className={styles.tour_list}>{tourList}</ul>;
}

// ExpList -----------------------------------------------------

type ExpListPropsType = {
  content: expListContentDataType | undefined;
};

export function ExpList({ content }: ExpListPropsType) {
  const expList = content?.map((item, index) => (
    <li key={index}>
      <Link href={`/pages/detail/exp?exp_id=${item.experience_id}`}>
        <div>
          <img src={item.img_url} />
          <span>
            <Image src={region_img} alt="region_img" />
            {item.area_name}
          </span>
        </div>
        <div>
          <h1>
            {item.experience_name}
            <span>{item.tour_name}</span>
          </h1>
          <h2>{item.summary}</h2>
          <p>
            <label>인원:</label>
            최소{item.min_participant}명~최대{item.max_participant}명
          </p>
          <p>{item.price}원</p>
        </div>
      </Link>
    </li>
  ));
  return <ul className={styles.exp_list}>{expList}</ul>;
}

// LodgList -----------------------------------------------------
type LodgListPropsType = {
  content: lodgListContentDataType | undefined;
};

export function LodgList({ content }: LodgListPropsType) {
  const lodgList = content?.map((item, index) => (
    <li key={index}>
      <Link href={`/pages/detail/lodg?lodg_id=${item.tour_id}`}>
        <div>
          <img src={item.img_url} />
          <span>
            <Image src={region_img} alt="region_img" />
            {item.area_name}
          </span>
        </div>
        <div>
          <h1>
            {item.tour_name}
            <span>{item.room_type_name}</span>
          </h1>
          <h2>{item.one_line_intro}</h2>
          <p>{item.min_price}원 ~</p>
          <span>객실보기</span>
        </div>
      </Link>
    </li>
  ));
  return <ul className={styles.lodg_list}>{lodgList}</ul>;
}

// SubList -----------------------------------------------------
type SubListPropsType = {
  isClick: { exp: boolean; lodg: boolean };
  expSubListData:
    | { expId: number; expName: string; price: number; img_url: string }[]
    | undefined;
  lodgSubListData:
    | { roomId: number; roomName: string; price: number; img_url: string }[]
    | undefined;
};

export function SubList({
  isClick,
  expSubListData,
  lodgSubListData,
}: SubListPropsType) {
  const expList = expSubListData?.map((item, index) => (
    <li key={index}>
      <Link href={`/pages/detail/exp?exp_id=${item.expId}`}>
        <img src={item.img_url}></img>
        <div>
          <span>{item.expName}</span>
          {item.price}원
        </div>
      </Link>
    </li>
  ));
  const lodgList = lodgSubListData?.map((item, index) => (
    <li key={index}>
      <Link href={`/pages/detail/lodg?lodg_id=${item.roomId}`}>
        <img src={item.img_url}></img>
        <div>
          <span>{item.roomName}</span>
          {item.price}원
        </div>
      </Link>
    </li>
  ));

  return (
    <ul
      className={`${
        isClick.exp || isClick.lodg ? styles.sub_list : styles.sub_list_off
      }`}
    >
      <p>
        {isClick.exp && "농촌체험"}
        {isClick.lodg && "농촌숙박"}
      </p>
      {isClick.exp && expList}
      {isClick.lodg && lodgList}
    </ul>
  );
}

// RoomList -----------------------------------------------------
type RoomListPropsType = {
  roomListData: roomListDataType | undefined;
};

export function RoomList({ roomListData }: RoomListPropsType) {
  const [isClick, setIsClick] = useState(false);
  const [personCount, setPersonCount] = useState<number>(0);
  const [roomCount, setRoomCount] = useState(0);
  const [check_in, setCheck_in] = useState(null);
  const [check_out, setCheck_out] = useState(null);

  const [resData, setResData] = useState<roomListDataType | undefined>();

  useEffect(() => {
    setResData(roomListData);
  }, [roomListData]);

  function getRoomList() {
    console.log("방 리스트 api");
    setResData(roomListResData);
  }

  const roomList = resData?.map((item, index) => (
    <li key={index}>
      <Link href={`/pages/detail/lodg/room?room_id=${item.room_id}`}>
        <img src={item.img_url} />
        <div>
          <h1>
            {item.room_name}
            <span>
              <Image src={room_img} alt="room_img" />
              {"객실수 : "}
              {item.num_of_room}
            </span>
          </h1>
          <p>
            {item.price}
            {"원 / 1박"}
          </p>
          <div>
            <p>
              <label>인원</label>
              {`${item.standard_capacity}인 기준(최대 ${item.max_capacity}인)`}
            </p>
            <p>
              <label>체크인 / 체크아웃</label>
              {`${item.checkin_time} / ${item.checkout_time}`}
            </p>
            <p>
              <label>방구성</label>
              {item.room_configuration}
            </p>
          </div>
        </div>
      </Link>
    </li>
  ));

  return (
    <div className={styles.room_list}>
      <ul>
        <li>
          <div onClick={() => setIsClick(!isClick)}>
            {check_in || "체크인"}
            {" - "}
            {check_out || "체크아웃"}
          </div>
          <Image src={calendar_img} alt="calendar_img" />
        </li>
        <li>
          <ClickCount count={personCount} setCount={setPersonCount} />
          {"인원수"}
          <Image src={person_img} alt="person_img" />
          <ClickCount count={roomCount} setCount={setRoomCount} />
          {"객실수"}
          <Image src={room_img} alt="room_img" />
          <button onClick={getRoomList}>검색</button>
        </li>
      </ul>
      <CustomRangeCalendar
        setCheck_in={setCheck_in}
        setCheck_out={setCheck_out}
        isClick={isClick}
      />
      <ul>{roomList}</ul>
    </div>
  );
}
