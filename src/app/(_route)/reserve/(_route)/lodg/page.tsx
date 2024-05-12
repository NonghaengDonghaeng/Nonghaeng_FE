"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import userData from "@/db/reservePageResData.json";

export default function Page() {
  const searchParams = useSearchParams();

  const [room_id, setRoom_id] = useState(searchParams.get("room_id"));
  const [person_count, setPerson_count] = useState(
    searchParams.get("person_count")
  );
  const [room_count, setRoom_count] = useState(searchParams.get("room_count"));
  const [check_in, setCheck_in] = useState(searchParams.get("check_in"));
  const [check_out, setCheck_out] = useState(searchParams.get("check_out"));

  useEffect(() => console.log("숙박예약페이지 api"), []);

  return (
    <section className={styles.reserve_lodg}>
      <article>
        <h1>
          <div />
          예약하기
        </h1>
        <hr />
        <p>
          <label>체크인 / 체크아웃</label>
          {check_in} / {check_out}
        </p>
        <p>
          <label>객실</label>
          {room_count}개
        </p>
        <p>
          <label>인원</label>
          {person_count}명
        </p>
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
