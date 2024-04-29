"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import CustomCalendar from "../../(components)/CustomCalendar/CustomCalendar";
import exp_round_info from "@/db/expdata/round_info.json";
import CheckReserve from "../../(components)/CheckReserve/CheckReserve";

export default function Page() {
  const [day, setDay] = useState(null);
  const [isClick, setIsClick] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [round_info, setRound_info] = useState<any[]>([]);

  useEffect(() => {
    console.log("체험 예약 api");
  }, []);
  useEffect(() => console.log(`${day}회차 api`), [day]);
  useEffect(() => console.log(round_info), [round_info]);

  const round_list = exp_round_info.content.map((item, index) => (
    <li
      key={index}
      onClick={() => {
        if (!round_info.includes(item.round_id))
          setRound_info([...round_info, item.round_id]);
        else {
          setRound_info(round_info.filter((id) => id !== item.round_id));
        }
      }}
      className={round_info.includes(item.round_id) ? styles.on : styles.off}
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
