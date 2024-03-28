import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import styles from "./.module.css";
import ClickCount from "../../clickcount/clickcount";
import { DayRange } from "react-modern-calendar-datepicker";
import room_img from "img/lodg/room.png";
import calendar_img from "img/lodg/calendar.png";
import person_img from "img/lodg/person.png";
import Link from "next/link";

type PropsType = {
  sub_lodg_list_props: {
    img_url: string;
    room_id: number;
    room_name: string;
    num_of_room: number;
    price: number;
    price_holiday: number;
    standard_capacity: number;
    max_capacity: number;
    checkin_time: string;
    checkout_time: string;
    room_configuration: string;
  }[];
};

export default function SubLodgList({ sub_lodg_list_props }: PropsType) {
  const sub_lodg_list = sub_lodg_list_props;
  const [isClick, setIsClick] = useState(false);
  const [dayRange, setDayRange] = React.useState<DayRange>({
    from: null,
    to: null,
  });
  const [personCount, setPersonCount] = useState<number>(0);
  const [roomCount, setRoomCount] = useState(0);

  function handleSubLodgList() {
    console.log("숙박중간페이지 리스트 api");
    // const sub_lodg_list = api로 받아온 숙박 중간페이지 리스트
  }

  const subLodgList = sub_lodg_list.map((item, index) => (
    <li key={index}>
      <Link href={`/pages/trip/lodg/sublist/detail?lodg_id=${item.room_id}`}>
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
    <div className={styles.sub_lodg_list}>
      <ul>
        <li>
          <div onClick={() => setIsClick(!isClick)}>
            {dayRange.from
              ? `${dayRange.from?.year}, ${dayRange.from?.month}, ${dayRange.from?.day} `
              : "체크인"}
            {" ~ "}
            {dayRange.to
              ? `${dayRange.to?.year}, ${dayRange.to?.month}, ${dayRange.to?.day}`
              : "체크아웃"}
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
          <button onClick={handleSubLodgList}>검색</button>
        </li>
      </ul>
      <Calendar
        calendarClassName={`${isClick ? styles.on : styles.off}`}
        value={dayRange}
        onChange={setDayRange}
        shouldHighlightWeekends
      />
      <ul>{subLodgList}</ul>
    </div>
  );
}
