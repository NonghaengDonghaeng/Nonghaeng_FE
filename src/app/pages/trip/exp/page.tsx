"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import Nav from "@/components/layout/nav/nav";
import { tripHref } from "@/storage/href";
import styles from "./.module.css";
import ScDetailOn from "@/components/common/search/scdetailon/scdetailon";
import Overlay from "@/components/common/overlay/overlay";
import ExpList from "@/components/common/explist/explist";
import exp_list from "@/db/expdata/list.json";
import Paging from "@/components/common/paging/paging";
import { pageStateType } from "@/types/pageState";
import ScDetail from "@/components/common/search/scdetail/scdetail";

export default function page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();

  const [pageState, setPageState] = useState<pageStateType>({
    isClick: false,
    state: false,
    page_type: "exp",
    page_index: searchParams.get("page_index") || "1",
    search_word: searchParams.get("search_word") || "",
    region: Array.from(new Set(searchParams.getAll("region"))) || [],
    category: searchParams.getAll("category") || [],

    max_cost: searchParams.get("max_cost") || "",
    min_cost: searchParams.get("min_cost") || "",
  });

  useEffect(() => {
    setUrl({ pageState });
  }, [pageState.state, pageState.page_index]);

  return (
    <>
      <Nav href={tripHref} />
      <main id="main">
        <section className={styles.exp_main}>
          <div>
            <h1>농촌체험</h1>
            <ScDetailOn pageState={pageState} setPageState={setPageState} />
            <ScDetail pageState={pageState} setPageState={setPageState} />
            <Overlay pageState={pageState} />
          </div>
          <hr></hr>
          <article>
            <ExpList content={exp_list.content} />
          </article>
          <Paging pageState={pageState} setPageState={setPageState} />
        </section>
      </main>
    </>
  );
}
