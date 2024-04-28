"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import Filter from "../../(components)/Filter/Filter";
import FilterOn from "../../(components)/FilterOn/FilterOn";
import Overlay from "@/components/common/Overlay/Overlay";
import { LodgList } from "@/components/common/Lists/Lists";
import Paging from "@/components/common/Paging/Paging";
import styles from "./page.module.css";
import { pageStateType } from "@/types/stateType";
import { lodgListPageDataType } from "@/types/dataType/listPageDataType";
import { getLodgListApi } from "@/api/getListDataApi";
import lodgListPageResData from "@/db/lodgdata/list.json";

export default function Page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();

  const [pageState, setPageState] = useState<pageStateType>({
    isClick: false,
    state: false,
    pageType: "lodg",
    pageIndex: Number(searchParams.get("page_index")) || 1,
    searchWord: searchParams.get("search_word") || "",
    region: Array.from(new Set(searchParams.getAll("region"))) || [],
    category: Array.from(new Set(searchParams.getAll("category"))) || [],
    maxCost: searchParams.get("max_cost") || "",
    minCost: searchParams.get("min_cost") || "",
  });

  const [resData, setResData] = useState<lodgListPageDataType>();

  // api useEffect1
  useEffect(() => {
    setUrl({ urlItem: pageState });
    // getLodgListApi({
    //   pageIndex:
    //     pageState.pageIndex !== undefined ? pageState.pageIndex - 1 : 0,
    //   searchWord: pageState.searchWord,
    //   setResData,
    // });
    setResData(lodgListPageResData);
  }, [pageState.state, pageState.pageIndex]);

  return (
    <>
      <section className={styles.lodg_main}>
        <div>
          <h1>농촌숙박</h1>
          <FilterOn pageState={pageState} setPageState={setPageState} />
          {/* <Overlay isClick={pageState.isClick} /> */}
        </div>
        <hr></hr>
        <Filter pageState={pageState} setPageState={setPageState} />
        <article>
          <LodgList content={resData?.content} />
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
