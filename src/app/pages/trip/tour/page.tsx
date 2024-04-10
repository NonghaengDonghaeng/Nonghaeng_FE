"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import Overlay from "@/components/common/Overlay/Overlay";
import { TourList } from "@/components/common/List/List";
import Paging from "@/components/common/Paging/Paging";
import { ScDetail, ScDetailOn } from "@/components/common/Search/Search";
import styles from "./page.module.css";
import { pageStateType } from "@/types/pageStateType";
import { tourListPageDataType } from "@/types/dataType/listPageDataType";
import tourListPageResData from "@/db/tourdata/list.json";
import axios from "axios";

export default function page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();

  const [pageState, setPageState] = useState<pageStateType>({
    isClick: false,
    state: false,
    page_type: "tour",
    page_index: Number(searchParams.get("page_index")) || 1,
    search_word: searchParams.get("search_word") || "",
    region: Array.from(new Set(searchParams.getAll("region"))) || [],
    category: Array.from(new Set(searchParams.getAll("category"))) || [],
  });

  const [resData, setResData] = useState<tourListPageDataType>();

  // api useEffect
  useEffect(() => {
    setUrl({ urlItem: pageState });
    console.log("농촌관광 메인 api");
    async () => {
      try {
        const res = await axios.get(`http://localhost:8080/tours?page=${pageState.page_index}&keyword=${pageState.search_word}`)
        setResData(res)
      }
    };
    setResData(tourListPageResData);
  }, [pageState.state, pageState.page_index]);

  return (
    <>
      <section className={styles.tour_main}>
        <div>
          <h1>농촌관광</h1>
          <ScDetailOn pageState={pageState} setPageState={setPageState} />
          <ScDetail pageState={pageState} setPageState={setPageState} />
          <Overlay isClick={pageState.isClick} />
        </div>
        <hr></hr>
        <article>
          <TourList content={resData?.content} />
        </article>
        <Paging
          pageState={pageState}
          setPageState={setPageState}
          totalPages={resData?.totalPages}
        />
      </section>
    </>
  );
}
