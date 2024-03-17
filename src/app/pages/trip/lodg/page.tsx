"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import Nav from "@/components/layout/nav/nav";
import ScDetailOn from "@/components/common/search/scdetailon/scdetailon";
import ScDetail from "@/components/common/search/scdetail/scdetail";
import Overlay from "@/components/common/overlay/overlay";
import LodgList from "@/components/common/lodglist/lodglist";
import Paging from "@/components/common/paging/paging";
import styles from "./.module.css";
import { pageStateType } from "@/types/pageState";
import { tripHref } from "@/storage/href";
import lodg_list from "@/db/lodgdata/list.json";

export default function page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();

  const [pageState, setPageState] = useState<pageStateType>({
    isClick: false,
    state: false,
    page_type: "lodg",
    page_index: searchParams.get("page_index") || "1",
    search_word: searchParams.get("search_word") || "",
    region: Array.from(new Set(searchParams.getAll("region"))) || [],
    category: Array.from(new Set(searchParams.getAll("category"))) || [],
    max_cost: searchParams.get("max_cost") || "",
    min_cost: searchParams.get("min_cost") || "",
  });

  useEffect(() => {
    setUrl({ pageState });
    // lodg_list api 요청
  }, [pageState.state, pageState.page_index]);

  return (
    <>
      <Nav href={tripHref} />
      <main id="main">
        <section className={styles.lodg_main}>
          <div>
            <h1>농촌숙박</h1>
            <ScDetailOn pageState={pageState} setPageState={setPageState} />
            <ScDetail pageState={pageState} setPageState={setPageState} />
            <Overlay pageState={pageState} />
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
      </main>
    </>
  );
}
