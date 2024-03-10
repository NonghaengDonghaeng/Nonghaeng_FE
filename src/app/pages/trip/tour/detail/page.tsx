"use client";
import { useSearchParams } from "next/navigation";
import styles from "./.module.css";

export default function page() {
  const searchParams = useSearchParams();

  return (
    <main id="main">
      <section className={styles.section1}>
        <h1>{searchParams.get("tour_id")}</h1>
      </section>
    </main>
  );
}
