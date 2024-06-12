"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import { getUserDataApi } from "../../(api)/getUserDataApi";
import { userInfoDataType } from "../../(types)/userInfoDataType";
import UserInfo from "../../(components)/UserInfo/UserInfo";
import { roomReserveApi } from "../../(api)/roomReserveApi";
import { roomReserveInfoType } from "../../(types)/roomReserveInfoType";
import Overlay from "@/common/components/Overlay/Overlay";
import CheckReserve from "../../(components)/CheckReserve/CheckReserve";

export default function Page() {
  const searchParams = useSearchParams();

  const [isCheck, setIsCheck] = useState(false);
  const [roomId, setRoomId] = useState(Number(searchParams.get("room_id")));
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
  const [visible, setVisible] = useState(false);

  const [roomReserveInfo, setRoomReserveInfo] = useState<roomReserveInfoType>({
    room_id: roomId,
    num_of_room: roomCount,
    num_of_participant: personCount,
    reservation_dates: [checkIn],
    reservation_name: userResData?.reservation_person_name,
    number: userResData?.phone_number,
    email: userResData?.email,
    final_price: paymentPrice,
  });

  useEffect(() => {
    setRoomReserveInfo({
      room_id: roomId,
      num_of_room: roomCount,
      num_of_participant: personCount,
      reservation_dates: [checkIn],
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

  // user data api
  useEffect(() => {
    getUserDataApi().then((res) => setUserResData(res?.data));
  }, []);

  const checkRoomReserve = () => {
    if (paymentPrice > Number(userResData?.point)) {
      alert("포인트가 부족합니다.");
    } else setIsCheck(true);
  };

  const roomReserve = () => {
    roomReserveApi({ roomReserveInfo }).then((res) => console.log(res?.data));
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
      <button onClick={() => checkRoomReserve()}>결제진행</button>
      <Overlay isClick={isCheck}>
        <CheckReserve
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          roomReserveData={{
            roomReserveInfo: roomReserveInfo,
            roomName: roomName,
          }}
          reserveFuncion={roomReserve}
        />
      </Overlay>
    </section>
  );
}
