import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useChange } from "@/hooks/useChange";
import { useSearch } from "@/hooks/useSearch";
import ScButton from "../scbutton/scbutton";
import styles from "./sctotal.module.css";
import { inputType, formType } from "@/types/eventtype";
import { pageStateType } from "@/types/pageState";

export default function ScTotal() {
  const searchParams = useSearchParams();
  const search = useSearch();
  const change = useChange();

  const [pageState, setPageState] = useState<pageStateType>({
    search_word: searchParams.get("search_word") || "",
    region: "",
    category: "",
  });

  function onSubmit(e: formType) {
    e.preventDefault();
    search({ pageState });
  }

  return (
    <form className={styles.total_search} onSubmit={onSubmit}>
      <input
        placeholder="검색어를 입력해보세요."
        name="search_word"
        onChange={(e: inputType) => change({ pageState, setPageState, e })}
      ></input>
      <ScButton />
    </form>
  );
}
