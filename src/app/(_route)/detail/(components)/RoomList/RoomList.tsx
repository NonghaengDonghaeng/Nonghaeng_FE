"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./RoomList.module.css";
import { CustomRangeCalendar } from "../CustomRoundCalendar/CustomRangeCalendar";
import ClickCount from "@/common/components/ClickCount/ClickCount";
import { roomListDataType } from "../../(types)/lodgDetailDataType";
import Room_orange_Ic from "icon/room_orange.svg";
import Calendar_orange_Ic from "icon/calendar_orange.svg";
import Person_orange_Ic from "icon/person_orange.svg";
import roomListResData from "@/db/roomdata/list.json";

// RoomList -----------------------------------------------------
type RoomListPropsType = {
  roomListData: roomListDataType | undefined;
};

export default function RoomList({ roomListData }: RoomListPropsType) {
  const [isClick, setIsClick] = useState(false);
  const [personCount, setPersonCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
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
      <Link href={`/detail/lodg/room?room_id=${item.room_id}`}>
        <Image
          src={item.img_url}
          alt="room_list_img"
          width={800}
          height={800}
        />
        <div>
          <h1>
            {item.room_name}
            <span>
              <Room_orange_Ic />
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
      <div>
        <div>
          <div onClick={() => setIsClick(!isClick)}>
            {check_in || "체크인"}
            {" - "}
            {check_out || "체크아웃"}
          </div>
          <Calendar_orange_Ic />
        </div>
        <div>
          <div>
            <ClickCount count={personCount} setCount={setPersonCount} />
            <label>인원수</label>
            <Person_orange_Ic />
          </div>
          <div>
            <ClickCount count={roomCount} setCount={setRoomCount} />
            <label>객실수</label>
            <Room_orange_Ic />
          </div>
          <button onClick={getRoomList}>검색</button>
        </div>
      </div>
      <CustomRangeCalendar
        setCheck_in={setCheck_in}
        setCheck_out={setCheck_out}
        isClick={isClick}
      />
      <ul>{roomList}</ul>
    </div>
  );
}
