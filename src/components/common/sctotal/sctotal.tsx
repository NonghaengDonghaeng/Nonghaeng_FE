import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ScButton from "../scbutton/scbutton";
import styles from "./.module.css";
import { inputType, formType } from "@/types/eventtype";
import { stringify } from "querystring";

export default function ScTotal() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search_word, setSearch_word] = useState<string>(
    searchParams.get("search_word") || ""
  );

  function onChange(e: inputType) {
    setSearch_word(e.target.value);
  }

  function onSubmit(e: formType) {
    e.preventDefault();
    router.push(`/pages/search?search_word=${search_word}`);
  }

  return (
    <form className={styles.total_search} onSubmit={onSubmit}>
      <input
        placeholder="검색어를 입력해보세요."
        value={search_word}
        onChange={onChange}
      ></input>
      <ScButton />
    </form>
  );
}
