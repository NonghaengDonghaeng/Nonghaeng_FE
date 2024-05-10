"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import TourList from "@/common/components/TourList/TourList";
import Paging from "@/common/components/Paging/Paging";
import { getTourListApi } from "../../(api)/getTourListApi";
import styles from "./page.module.css";
import { tourListDataType } from "@/common/types/tourListDataType";
import { pageStateType } from "../../(types)/pageStateType";
import Filter from "../../(components)/Filter/Filter";
import FilterOn from "../../(components)/FilterOn/FilterOn";
import tourListPageResData from "@/db/tourdata/list.json";

export default function Page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();

  // pageState
  const [pageState, setPageState] = useState<pageStateType>({
    isClick: false,
    pageIndex: Number(searchParams.get("page_index")) || 1,
    state: false,
    pageType: "tour",
    searchWord: searchParams.get("search_word") || "",
    region: Array.from(new Set(searchParams.getAll("region"))) || [],
    category: Array.from(new Set(searchParams.getAll("category"))) || [],
  });

  const [resData, setResData] = useState<tourListDataType>();

  // api useEffect
  useEffect(() => {
    setUrl({ urlItem: pageState });
    getTourListApi({
      pageIndex: pageState.pageIndex,
      searchWord: pageState.searchWord,
    }).then((res) => {
      console.log(res, res?.data);
      setResData(res?.data);
    });
  }, [pageState.state, pageState.pageIndex]);

  return (
    <>
      <section className={styles.tour_main}>
        <div>
          <h1>농촌관광</h1>
          <FilterOn pageState={pageState} setPageState={setPageState} />
          {/* <Overlay isClick={pageState.isClick} /> */}
        </div>
        <hr></hr>
        <Filter pageState={pageState} setPageState={setPageState} />
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
