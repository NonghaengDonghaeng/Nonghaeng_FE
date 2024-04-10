"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import { ScDetail, ScDetailOn } from "@/components/common/Search/Search";
import Overlay from "@/components/common/Overlay/Overlay";
import { LodgList } from "@/components/common/List/List";
import Paging from "@/components/common/Paging/Paging";
import styles from "./page.module.css";
import { pageStateType } from "@/types/pageStateType";
import { lodgListPageDataType } from "@/types/dataType/listPageDataType";
import lodgListPageResData from "@/db/lodgdata/list.json";

export default function page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();

  const [pageState, setPageState] = useState<pageStateType>({
    isClick: false,
    state: false,
    page_type: "lodg",
    page_index: Number(searchParams.get("page_index")) || 1,
    search_word: searchParams.get("search_word") || "",
    region: Array.from(new Set(searchParams.getAll("region"))) || [],
    category: Array.from(new Set(searchParams.getAll("category"))) || [],
    max_cost: searchParams.get("max_cost") || "",
    min_cost: searchParams.get("min_cost") || "",
  });

  const [resData, setResData] = useState<lodgListPageDataType>();

  // api useEffect1
  useEffect(() => {
    setUrl({ urlItem: pageState });
    console.log("농촌숙박 메인 api");
    setResData(lodgListPageResData);
  }, [pageState.state, pageState.page_index]);

  return (
    <>
      <section className={styles.lodg_main}>
        <div>
          <h1>농촌숙박</h1>
          <ScDetailOn pageState={pageState} setPageState={setPageState} />
          <ScDetail pageState={pageState} setPageState={setPageState} />
          <Overlay isClick={pageState.isClick} />
        </div>
        <hr></hr>
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
