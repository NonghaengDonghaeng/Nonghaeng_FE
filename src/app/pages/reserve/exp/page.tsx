"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { CustomCalendar } from "@/components/common/calendar/calendar";

export default function page() {
  const [day, setDay] = useState(null);

  useEffect(() => {
    console.log("체험 예약 api"), [];
  });
  useEffect(() => console.log(`${day}회차 api`), [day]);

  return (
    <section className={styles.reserve_exp}>
      <article>
        <h1>
          <div />
          예약하기
        </h1>
        <CustomCalendar day={day} setDay={setDay} />
        <hr />
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
    </section>
  );
}
