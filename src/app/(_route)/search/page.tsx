"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SearchTotal from "./(components)/SearchTotal/SearchTotal";
import styles from "./page.module.css";

export default function Page() {
  const searchParams = useSearchParams();

  const [search_word, setSearch_word] = useState(
    searchParams.get("search_word")
  );

  return (
    <>
      <section className={styles.section1}>
        <h1>통합검색</h1>
        <SearchTotal />
        {search_word}
      </section>
      <section className={styles.section2}></section>
    </>
  );
}
