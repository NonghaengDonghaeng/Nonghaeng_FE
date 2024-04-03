"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import {
  ScDetail,
  ScDetailOn,
} from "@/components/common/search/scdetail/scdetail";
import Overlay from "@/components/common/overlay/overlay";
import ExpList from "@/components/common/list/explist/explist";
import exp_list from "@/db/expdata/list.json";
import Paging from "@/components/common/paging/paging";
import styles from "./page.module.css";
import { pageStateType } from "@/types/pageState";

export default function page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();

  const [pageState, setPageState] = useState<pageStateType>({
    isClick: false,
    state: false,
    page_type: "exp",
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
    console.log("농촌체험 메인 api");
    // exp_list api 요청
  }, [pageState.state, pageState.page_index]);

  return (
    <main id="main">
      <section className={styles.exp_main}>
        <div>
          <h1>농촌체험</h1>
          <ScDetailOn pageState={pageState} setPageState={setPageState} />
          <ScDetail pageState={pageState} setPageState={setPageState} />
          <Overlay isClick={pageState.isClick} />
        </div>
        <hr></hr>
        <article>
          <ExpList content={exp_list.content} />
        </article>
        <Paging
          pageState={pageState}
          setPageState={setPageState}
          totalPages={exp_list.totalPages}
        />
      </section>
    </main>
  );
}
