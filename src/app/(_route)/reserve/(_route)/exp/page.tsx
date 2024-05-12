"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import CustomCalendar from "../../(components)/CustomCalendar/CustomCalendar";
import CheckReserve from "../../(components)/CheckReserve/CheckReserve";
import { getExpRoundApi } from "../../(api)/getExpRoundApi";
import { expRoundType } from "../../(types)/expRoundType";
import exp_round_info from "@/db/expdata/round_info.json";
import userData from "@/db/reservePageResData.json";
import { userInfoDataType } from "../../(types)/userInfoDataType";
import { getReserveDataApi } from "../../(api)/getResrveDataApi";

export default function Page() {
  const searchParams = useSearchParams();
  const today = new Date();
  const [day, setDay] = useState(
    `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`
  );
  const [expId, setExpId] = useState(Number(searchParams.get("exp_id")));
  const [isClick, setIsClick] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [userResData, setUserResData] = useState<userInfoDataType>();
  const [roundResData, setRoundResData] = useState<expRoundType>();
  const [selectedRound, setSelectedRound] = useState<any[]>([]);

  useEffect(() => {
    getReserveDataApi().then((res) => setUserResData(res?.data));
  }, []);
  useEffect(() => {
    getExpRoundApi({ date: day, id: expId }).then((res) =>
      setRoundResData(res?.data)
    );
  }, [day]);

  const round_list = roundResData?.content.map((item, index) => (
    <li
      key={index}
      onClick={() => {
        if (!selectedRound.includes(item.round_id))
          setSelectedRound([...selectedRound, item.round_id]);
        else {
          setSelectedRound(selectedRound.filter((id) => id !== item.round_id));
        }
      }}
      className={selectedRound.includes(item.round_id) ? styles.on : styles.off}
    >
      <label>
        {item.start_time} - {item.end_time}
      </label>
      <label>잔여 : {item.remain_participant}</label>
    </li>
  ));

  return (
    <section className={styles.reserve_exp}>
      <article>
        <h1>
          <div />
          예약하기
        </h1>
        <hr />
        <div onClick={() => setIsClick(!isClick)}>
          {day || "날짜를 선택해주세요."}
        </div>
        <CustomCalendar
          day={day}
          setDay={setDay}
          isClick={isClick}
          setIsClick={setIsClick}
        />
        <div>
          <ul>{round_list}</ul>
        </div>
      </article>
      <article>
        <h1>
          <div />
          예약자 정보
        </h1>
        <hr />
        <p>
          <label>예약자명 :</label>
          {userResData?.reservation_person_name}
        </p>
        <p>
          <label>전화번호 :</label>
          {userResData?.phone_number}
        </p>
        <p>
          <label>이메일 :</label>
          {userResData?.email}
        </p>
        <p>
          <label>보유포인트 :</label>
          {userResData?.point}
        </p>
      </article>
      <article>
        <h1>
          <div />
          결제수단
        </h1>
        <hr />
      </article>
      <button onClick={() => setIsCheck(true)}>결제진행</button>
      <CheckReserve isCheck={isCheck} setIsCheck={setIsCheck} day={day} />
    </section>
  );
}
