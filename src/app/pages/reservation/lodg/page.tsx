"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import reservation_info from "@/db/lodgdata/reservatoin_info.json";

export default function page() {
  const searchParams = useSearchParams();

  const [lodg_id, setLodg_id] = useState(searchParams.get("lodg_id"));

  useEffect(() => console.log(`숙박예약페이지 api, lodg_id=${lodg_id}`));
  return (
    <main id="main">
      <section className={styles.reservation_lodg}>
        <article>
          <h1>
            <div />
            {reservation_info.room_name}
          </h1>
        </article>
        <article></article>
      </section>
    </main>
  );
}
