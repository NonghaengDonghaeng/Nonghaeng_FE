"use client";
import { useState } from "react";
import Nav from "@/components/layout/nav/nav";
import { tripHref } from "@/storage/href";
import styles from "./.module.css";
import ScDetail from "@/components/common/search/scdetail/scdetail";
import Overlay from "@/components/common/overlay/overlay";
import ScExp from "@/components/common/search/scexp/scexp";
import ExpList from "@/components/common/explist/explist";
import exp_list from "@/db/expdata/list.json";

type selectItemType = {
  region: string[];
  category: string[];
  maxCost: string;
  minCost: string;
  search_word: string;
};

export default function page() {
  const [isClick, setIsClick] = useState(false);

  function onSubmit() {
    console.log("농촌체험 api요청", selectItem);
  }

  const [selectItem, setSelectItem] = useState<selectItemType>({
    region: [],
    category: [],
    maxCost: "",
    minCost: "",
    search_word: "",
  });

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
              onSubmit={onSubmit}
            />
            <Overlay isClick={isClick} />
          </div>
          <hr></hr>
          <article>
            <ExpList content={exp_list.content} />
          </article>
        </section>
      </main>
    </>
  );
}
