"use client";
import { useSearchParams } from "next/navigation";
import styles from "./.module.css";
import Link from "next/link";

export default function page() {
  return (
    <main id="main">
      <section className={styles.section1}></section>
      <Link href="#1">1</Link>
      <a href="#2">2</a>
      <a href="#3">3</a>
      <section className={styles.section2}>
        <article id="1">1.기본정보</article>
        <article id="2">2.여행후기</article>
        <article id="3">3.문의</article>
      </section>
    </main>
  );
}
