"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import Nav from "@/components/layout/nav/nav";
import Overlay from "@/components/common/overlay/overlay";
import TourList from "@/components/common/tourlist/tourlist";
import styles from "./.module.css";
import { tripHref } from "@/storage/href";
import tour_list from "@/db/tourdata/list.json";
import Paging from "@/components/common/paging/paging";
import { pageStateType } from "@/types/pageState";
import ScDetailOn from "@/components/common/search/scdetailon/scdetailon";
import ScDetail from "@/components/common/search/scdetail/scdetail";

export default function page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();

  const [pageState, setPageState] = useState<pageStateType>({
    isClick: false,
    state: false,
    page_type: "tour",
    page_index: searchParams.get("page_index") || "1",
    search_word: searchParams.get("search_word") || "",
    region: Array.from(new Set(searchParams.getAll("region"))) || [],
    category: Array.from(new Set(searchParams.getAll("category"))) || [],
  });

  useEffect(() => {
    setUrl({ pageState });
    // tour_list api요청
  }, [pageState.state, pageState.page_index]);

  return (
    <>
      <Nav href={tripHref} />
      <main id="main">
        <section className={styles.tour_main}>
          <div>
            <h1>농촌관광</h1>
            <ScDetailOn pageState={pageState} setPageState={setPageState} />
            <ScDetail pageState={pageState} setPageState={setPageState} />
            <Overlay pageState={pageState} />
          </div>
          <hr></hr>
          <article>
            <TourList content={tour_list.content} />
          </article>
          <Paging
            pageState={pageState}
            setPageState={setPageState}
            totalPages={tour_list.totalPages}
          />
        </section>
      </main>
    </>
  );
}
