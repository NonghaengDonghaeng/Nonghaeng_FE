"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import ListTitle from "@/common/components/ListTitle/ListTitle";
import TourList from "@/common/components/TourList/TourList";
import Paging from "@/common/components/Paging/Paging";
import getTourListApi from "../../(api)/getTourListApi";
import styles from "./page.module.css";
import { tourListDataType } from "@/common/types/tourListDataType";
import { pageStateType } from "../../(types)/pageStateType";
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
  const [visible, setVisible] = useState(false);

  // api useEffect
  useEffect(() => {
    setUrl({ urlItem: pageState });
    getTourListApi({
      pageIndex: pageState.pageIndex,
      searchWord: pageState.searchWord,
    }).then((res) => {
      if (res?.status) {
        setResData(res?.data);
        setVisible(true);
      } else {
        window.location.replace("/trip/tour");
      }
    });
  }, [pageState.state, pageState.pageIndex]);

  return (
    <>
      <section className={styles.tour_main}>
        <ListTitle
          title="농촌관광"
          pageState={pageState}
          setPageState={setPageState}
        />
        <hr></hr>
        <article className={visible ? "isvisible" : "isinvisible"}>
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
