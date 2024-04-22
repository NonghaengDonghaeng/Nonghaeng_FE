"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import { Filter, FilterOn } from "@/components/common/Filters/Filters";
import Overlay from "@/components/common/Overlay/Overlay";
import { ExpList } from "@/components/common/Lists/Lists";
import Paging from "@/components/common/Paging/Paging";
import styles from "./page.module.css";
import { pageStateType } from "@/types/stateType";
import { expListPageDatatype } from "@/types/dataType/listPageDataType";
import { getExpListApi } from "@/api/getListDataApi";
import expListPageResData from "@/db/expdata/list.json";

export default function Page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();

  const [pageState, setPageState] = useState<pageStateType>({
    isClick: false,
    state: false,
    pageType: "exp",
    pageIndex: Number(searchParams.get("page_index")) || 1,
    searchWord: searchParams.get("search_word") || "",
    region: Array.from(new Set(searchParams.getAll("region"))) || [],
    category: Array.from(new Set(searchParams.getAll("category"))) || [],
    maxCost: searchParams.get("max_cost") || "",
    minCost: searchParams.get("min_cost") || "",
  });

  const [resData, setResData] = useState<expListPageDatatype>();

  // api useEffect
  useEffect(() => {
    setUrl({ urlItem: pageState });
    // getExpListApi({
    //   pageIndex:
    //     pageState.pageIndex !== undefined ? pageState.pageIndex - 1 : 0,
    //   searchWord: pageState.searchWord,
    //   setResData,
    // });
    setResData(expListPageResData);
  }, [pageState.state, pageState.pageIndex]);

  return (
    <>
      <section className={styles.exp_main}>
        <div>
          <h1>농촌체험</h1>
          <FilterOn pageState={pageState} setPageState={setPageState} />
          {/* <Overlay isClick={pageState.isClick} /> */}
        </div>
        <hr></hr>
        <Filter pageState={pageState} setPageState={setPageState} />
        <article>
          <ExpList content={resData?.content} />
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
