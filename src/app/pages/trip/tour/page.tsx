"use client";
import { useState } from "react";
import Nav from "@/components/layout/nav/nav";
import ScDetail from "@/components/common/search/scdetail/scdetail";
import ScTour from "@/components/common/search/sctour/sctour";
import Overlay from "@/components/common/overlay/overlay";
import TourList from "@/components/common/tourlist/tourlist";
import styles from "./.module.css";
import { tripHref } from "@/storage/href";
import tour_list from "@/db/tourdata/list.json";

// type
type selectItemType = {
  region: string[];
  category: string[];
  search_word: string;
};

export default function page() {
  const [isClick, setIsClick] = useState(false);

  function onSubmit() {
    console.log("농촌관광 api요청", selectItem);
  }

  const [selectItem, setSelectItem] = useState<selectItemType>({
    region: [],
    category: [],
    search_word: "",
  });

  return (
    <>
      <Nav href={tripHref} />
      <main id="main">
        <section className={styles.tour_main}>
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
            <TourList content={tour_list.content} />
          </article>
        </section>
      </main>
    </>
  );
}
