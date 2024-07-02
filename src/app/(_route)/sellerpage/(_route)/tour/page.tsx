"use client";
import { useCallback, useState } from "react";
import Editor from "@/common/components/Editor/Editor";
import Title from "@/common/components/Title/Title";
import styles from "./page.module.css";

function Page() {
  const [value, setValue] = useState<string | undefined>();

  const handleChange = useCallback((value: string | undefined) => {
    setValue(value);
  }, []);

  return (
    <section className={styles.tour_regist}>
      <Title title="관광등록" />
      <hr />
      <article>
        <Editor value={value} onChange={handleChange} />
      </article>
    </section>
  );
}

export default Page;
