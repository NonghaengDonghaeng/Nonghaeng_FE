import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import styles from "./roomlist.module.css";
import ClickCount from "../../clickcount/clickcount";
import room_img from "img/lodg/room.png";
import calendar_img from "img/lodg/calendar.png";
import person_img from "img/lodg/person.png";
import Link from "next/link";
import { CustomRangeCalendar } from "../../calendar/calendar";
import { roomListDataType } from "@/types/dataType/listPageDataType";
import roomListResData from "@/db/roomdata/list.json";

type PropsType = {
  roomListData: roomListDataType | undefined;
};

export default function RoomList({ roomListData }: PropsType) {
  const [isClick, setIsClick] = useState(false);
  const [state, setState] = useState(false);
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
