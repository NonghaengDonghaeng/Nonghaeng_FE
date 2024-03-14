"use client";
import { useState } from "react";
import Nav from "@/components/layout/nav/nav";
import { tripHref } from "@/storage/href";
import ScDetail from "@/components/common/search/scdetail/scdetail";
import Overlay from "@/components/common/overlay/overlay";
import styles from "./.module.css";

export default function page() {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <Nav href={tripHref} />
      <main id="main">
        <section className={styles.lodg_main}>
          <div>
            <h1>농촌숙박</h1>
            <ScDetail setIsClick={setIsClick} />
            <Overlay isClick={isClick} />
          </div>
          <hr></hr>
          <article></article>
        </section>
      </main>
    </>
  );
}
