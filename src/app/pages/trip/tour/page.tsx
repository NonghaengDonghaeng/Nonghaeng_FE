"use client";
import { useState } from "react";
import Nav from "@/components/layout/nav/nav";
import { tripHref } from "@/storage/href";
import styles from "./.module.css";
import ScDetail from "@/components/common/scdetail/scdetail";
import ScTour from "@/components/common/sctour/sctour";
import Overlay from "@/components/common/overlay/overlay";
import Link from "next/link";

export default function page() {
  const [isClick, setIsClick] = useState(false);

  function onSubmit() {
    console.log("농촌관광 api요청", selectItem);
  }

  const [selectItem, setSelectItem] = useState<{
    region: string[];
    category: string[];
    search_word: string;
  }>({
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
            <ScTour
              isClick={isClick}
              setIsClick={setIsClick}
              selectItem={selectItem}
              setSelectItem={setSelectItem}
              onSubmit={onSubmit}
            />
            <Overlay isClick={isClick} />
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
