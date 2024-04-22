"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import Overlay from "@/components/common/Overlay/Overlay";
import { TourList } from "@/components/common/Lists/Lists";
import Paging from "@/components/common/Paging/Paging";
import { ScDetail, ScDetailOn } from "@/components/common/Searchs/Searchs";
import { getTourListApi } from "@/api/getListDataApi";
import styles from "./page.module.css";
import { tourListPageDataType } from "@/types/dataType/listPageDataType";
import tourListPageResData from "@/db/tourdata/list.json";
import { pageStateType } from "@/types/stateType";

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

  const [resData, setResData] = useState<tourListPageDataType>();

  // api useEffect
  useEffect(() => {
    setUrl({ urlItem: pageState });
    // getTourListApi({
    //   pageIndex:
    //     pageState.page_index !== undefined ? pageState.page_index - 1 : 0,
    //   searchWord: pageState.search_word,
    //   setResData,
    // });
    setResData(tourListPageResData);
  }, [pageState.state, pageState.pageIndex]);

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
