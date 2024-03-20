"use client";
import { useRef } from "react";
import useMove from "@/hooks/useMove";
import styles from "./.module.css";
import DetailNav from "@/components/common/detailnav/detailnav";

export default function page() {
  const { element, moveElement } = useMove();

  return (
    <main id="main">
      <section className={styles.section1}></section>
      <section className={styles.section2}>
        <article ref={element[0]}>
          <DetailNav moveElement={moveElement} nowRef={"기본정보"} />
          기본정보
        </article>
        <article ref={element[1]}>
          <DetailNav moveElement={moveElement} nowRef={"여행후기"} />
          여행후기
        </article>
        <article ref={element[2]}>
          <DetailNav moveElement={moveElement} nowRef={"고객문의"} />
          문의
        </article>
      </section>
    </main>
  );
}
