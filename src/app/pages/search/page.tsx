"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ScTotal from "@/components/common/search/sctotal/sctotal";
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
        {search_word}
      </section>
      <section className={styles.section2}></section>
    </main>
  );
}
