"use client";
import { useState } from "react";
import Nav from "@/components/layout/nav/nav";
import { tripHref } from "@/storage/href";
import styles from "./.module.css";
import ScDetail from "@/components/common/scdetail/scdetail";
import ScTour from "@/components/common/sctour/sctour";

export default function page() {
  const [isClick, setIsClick] = useState(false);
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
            <ScDetail setIsClick={setIsClick} />
            <ScTour isClick={isClick} setIsClick={setIsClick} />
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
