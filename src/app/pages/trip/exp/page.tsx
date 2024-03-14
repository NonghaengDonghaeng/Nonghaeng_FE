"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import Nav from "@/components/layout/nav/nav";
import { tripHref } from "@/storage/href";
import styles from "./.module.css";
import ScDetail from "@/components/common/search/scdetail/scdetail";
import Overlay from "@/components/common/overlay/overlay";
import ScExp from "@/components/common/search/scexp/scexp";
import ExpList from "@/components/common/explist/explist";
import exp_list from "@/db/expdata/list.json";
import Paging from "@/components/common/paging/paging";

type selectItemType = {
  page_index: string;
  search_word: string;
  region: string[];
  category: string[];
  max_cost: string;
  min_cost: string;
};

export default function page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();
  const [isClick, setIsClick] = useState(false);

  function filter() {
    setUrl(selectItem);
    window.location.replace("");
  }

  const [selectItem, setSelectItem] = useState<selectItemType>({
    page_index: searchParams.get("page_index") || "1",
    search_word: searchParams.get("search_word") || "",
    region: Array.from(new Set(searchParams.getAll("region"))),
    category: searchParams.getAll("category"),
    max_cost: searchParams.get("max_cost") || "",
    min_cost: searchParams.get("min_cost") || "",
  });
  console.log(selectItem.region);

  // useEffect(() => filter(), [selectItem.page_index]);

  return (
    <>
      <Nav href={tripHref} />
      <main id="main">
        <section className={styles.exp_main}>
          <div>
            <h1>농촌체험</h1>
            <ScDetail setIsClick={setIsClick} />
            <ScExp
              isClick={isClick}
              setIsClick={setIsClick}
              selectItem={selectItem}
              setSelectItem={setSelectItem}
              filter={filter}
            />
            <Overlay isClick={isClick} />
          </div>
          <hr></hr>
          <article>
            <ExpList content={exp_list.content} />
          </article>
          <Paging
            selectItem={selectItem}
            setSelectItem={setSelectItem}
            filter={filter}
          />
        </section>
      </main>
    </>
  );
}
