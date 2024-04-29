"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { useChange } from "@/hooks/useChange";
import SearchButton from "@/common/components/SearchButton/SearchButton";
import styles from "./SearchTotal.module.css";
import { inputType, formType } from "@/types/eventType";
import { searchItemType } from "@/types/searchItemType";

export default function SearchTotal() {
  const searchParams = useSearchParams();
  const search = useSearch();
  const change = useChange();

  const [searchItem, setSearchItem] = useState<searchItemType>({
    searchWord: searchParams.get("search_word") || "",
    region: "",
    category: "",
  });

  function onSubmit(e: formType) {
    e.preventDefault();
    search({ searchItem: searchItem });
  }

  return (
    <form className={styles.total_search} onSubmit={onSubmit}>
      <input
        placeholder="검색어를 입력해보세요."
        name="searchWord"
        onChange={(e: inputType) =>
          change({ changeItem: searchItem, setChangeItem: setSearchItem, e })
        }
      ></input>
      <SearchButton />
    </form>
  );
}
