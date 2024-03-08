import { useState } from "react";
import { useSearchParams } from "next/navigation";
import ScButton from "../scbutton/scbutton";
import { useSearch } from "@/hooks/useHook";
import styles from "./.module.css";
import { inputType, formType } from "@/types/eventtype";

export default function ScTotal() {
  const searchParams = useSearchParams();
  const search = useSearch();

  const [search_word, setSearch_word] = useState<string>(
    searchParams.get("search_word") || ""
  );
  function onChange(e: inputType) {
    setSearch_word(e.target.value);
  }

  function onSubmit(e: formType) {
    e.preventDefault();
    search({ region: "", category: "", search_word: search_word });
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
