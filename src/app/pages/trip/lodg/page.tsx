"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import {
  ScDetail,
  ScDetailOn,
} from "@/components/common/search/scdetail/scdetail";
import Overlay from "@/components/common/overlay/overlay";
import LodgList from "@/components/common/list/lodglist/lodglist";
import Paging from "@/components/common/paging/paging";
import styles from "./page.module.css";
import { pageStateType } from "@/types/pageState";
import lodg_list from "@/db/lodgdata/list.json";

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

  // api useEffect
  useEffect(() => {
    setUrl({ urlItem: pageState });
    console.log("농촌숙박 메인 api");
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
          <LodgList content={lodg_list.content} />
        </article>
        <Paging
          pageState={pageState}
          setPageState={setPageState}
          totalPages={lodg_list.totalPages}
        />
      </section>
    </>
  );
}
