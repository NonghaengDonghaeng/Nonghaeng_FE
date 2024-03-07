"use client";
import { useEffect, useState } from "react";
import Nav from "@/components/layout/nav/nav";
import { tripHref } from "@/storage/href";
import styles from "./.module.css";
import ScTour from "@/components/common/sctour/sctour";

export default function page() {
  function onSubmit() {
    alert("api요청" + selectItem.region);
    window.location.replace("");
  }
  const [selectItem, setSelectItem] = useState({
    region: [],
    category: [],
    search_word: "",
  });

  return (
    <>
      <Nav href={tripHref} />
      <main id="main">
        <section className={styles.tour_list}>
          <div>
            <h1>농촌관광</h1>
            <ScTour
              selectItem={selectItem}
              setSelectItem={setSelectItem}
              onSubmit={onSubmit}
            />
          </div>
          <hr></hr>
          <article>
            <div></div>
            <div></div>
          </article>
        </section>
      </main>
    </>
  );
}
