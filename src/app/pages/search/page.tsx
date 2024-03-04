"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import ScTotal from "@/components/common/sctotal/sctotal";
import styles from "./.module.css";

export default function page() {
  const searchParams = useSearchParams();

  const [search_word, setSearch_word] = useState(
    searchParams.get("search_word")
  );

  return (
    <main id="main">
      <section className={styles.section1}>
        <h1>통합검색</h1>
        <ScTotal />
        {searchParams.get("search_word")}
      </section>
      <section className={styles.section2}></section>
    </main>
  );
}
