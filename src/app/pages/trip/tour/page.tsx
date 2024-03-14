"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import Nav from "@/components/layout/nav/nav";
import ScDetail from "@/components/common/search/scdetail/scdetail";
import ScTour from "@/components/common/search/sctour/sctour";
import Overlay from "@/components/common/overlay/overlay";
import TourList from "@/components/common/tourlist/tourlist";
import styles from "./.module.css";
import { tripHref } from "@/storage/href";
import tour_list from "@/db/tourdata/list.json";
import PgButton from "@/components/common/paging/paging";

// type
type selectItemType = {
  page_index: string;
  search_word: any;
  region: any;
  category: string[];
};

export default function page() {
  const setUrl = useSetUrl();
  const searchParams = useSearchParams();

  const [isClick, setIsClick] = useState(false);

  function filter() {
    setUrl(selectItem);
  }

  const [selectItem, setSelectItem] = useState<selectItemType>({
    page_index: searchParams.get("page_index") || "1",
    search_word: searchParams.get("search_word") || "",
    region: searchParams.getAll("region"),
    category: searchParams.getAll("category"),
  });

  useEffect(() => filter(), [selectItem]);

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
              filter={filter}
            />
            <Overlay isClick={isClick} />
          </div>
          <hr></hr>
          <article>
            <TourList content={tour_list.content} />
          </article>
          <PgButton selectItem={selectItem} setSelectItem={setSelectItem} />
        </section>
      </main>
    </>
  );
}
