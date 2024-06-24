"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import { getUserDataApi } from "../../../(api)/getUserDataApi";
import { userInfoDataType } from "../../../(types)/userInfoDataType";
import UserInfo from "../../../(components)/UserInfo/UserInfo";
import { reserveApi } from "../../../(api)/reserveApi";
import {
  ReturnRoomReserveType,
  roomReserveInfoType,
} from "../../../(types)/roomReserveInfoType";
import Overlay from "@/common/components/Overlay/Overlay";
import CheckReserve from "../../../(components)/CheckReserve/CheckReserve";

export default function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();

  const [roomId, setRoomId] = useState(Number(params.id));
  const [roomName, setRoomName] = useState(searchParams.get("room_name"));
  const [personCount, setPersonCount] = useState(
    Number(searchParams.get("person_count"))
  );
  const [roomCount, setRoomCount] = useState(
    Number(searchParams.get("room_count"))
  );
  const [checkIn, setCheckIn] = useState(searchParams.get("check_in"));
  const [checkOut, setCheckOut] = useState(searchParams.get("check_out"));
  const [roomPrice, setRoomPrice] = useState(
    Number(searchParams.get("room_price"))
  );
  const [paymentPrice, setPaymentPrice] = useState(roomPrice * roomCount);

  const [userResData, setUserResData] = useState<userInfoDataType>();
  const [returnReserveData, setReturnReserveData] = useState<
    ReturnRoomReserveType
  >();
  const [isCheck, setIsCheck] = useState(false);
  const [visible, setVisible] = useState(false);

  const [roomReserveInfo, setRoomReserveInfo] = useState<roomReserveInfoType>();

  useEffect(() => {
    setRoomReserveInfo({
      type: "room",
      room_id: roomId,
      num_of_room: roomCount,
      num_of_participant: personCount,
      start_date: checkIn,
      end_date: checkOut,
      reservation_name: userResData?.reservation_person_name,
      number: userResData?.phone_number,
      email: userResData?.email,
      final_price: paymentPrice,
    });
  }, [
    roomId,
    roomCount,
    personCount,
    checkIn,
    checkOut,
    paymentPrice,
    userResData,
  ]);

  // 유저 데이터 받아오기
  useEffect(() => {
    getUserDataApi().then((res) => {
      if (res?.status == 200) {
        setUserResData(res?.data);
        setVisible(true);
      }
    });
  }, []);

  const checkReserve = () => {
    reserveApi({ reserveInfo: roomReserveInfo }).then((res) => {
      if (res?.status == 200) {
        setReturnReserveData(res.data);
        setIsCheck(true);
      }
    });
  };

  return (
    <section
      className={`${styles.reserve_room} ${
        visible ? "isvisible" : "isinvisible"
      }`}
    >
      <article>
        <h1>
          <div />
          예약하기
        </h1>
        <hr />
        <p>
          <label>숙박이름</label>
          <span>{roomName}</span>
        </p>
        <p>
          <label>체크인</label>
          <span>{checkIn}</span>
        </p>
        <p>
          <label>체크아웃</label>
          <span>{checkIn}</span>
        </p>
        <p>
          <label>객실</label>
          <span>{roomCount}개</span>
        </p>
        <p>
          <label>인원</label>
          <span>{personCount}명</span>
        </p>
      </article>
      <article>
        <h1>
          <div />
          예약자 정보
        </h1>
        <hr />
        <UserInfo userData={userResData} />
      </article>
      <article>
        <h1>
          <div />
          결제수단
        </h1>
        <hr />
        <p>
          <label>결제금액</label>
          <span>{paymentPrice}</span>
        </p>
      </article>
      <button onClick={() => checkReserve()}>결제진행</button>
      <Overlay isClick={isCheck}>
        <CheckReserve
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          roomReserveData={returnReserveData}
        />
      </Overlay>
    </section>
  );
}
