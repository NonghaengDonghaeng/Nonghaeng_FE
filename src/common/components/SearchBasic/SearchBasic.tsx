"use client";
import { useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { useChange } from "@/hooks/useChange";
import styles from "./SearchBasic.module.css";
import { inputType, formType } from "@/common/types/eventType";
import { Search_gray_Ic } from "icon/index";

export default function SearchBasic() {
  const search = useSearch();
  const change = useChange();

  const [searchItem, setSearchItem] = useState<{
    searchWord?: string;
  }>({
    searchWord: "",
  });

  function onSubmit(e: formType) {
    e.preventDefault();
    search({ searchItem: searchItem });
  }

  return (
    <div className={styles.search_base}>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e: inputType) =>
            change({
              changeItem: searchItem,
              setChangeItem: setSearchItem,
              e,
            })
          }
          placeholder="알고 싶은 정보가 있으세요?"
          name="searchWord"
        ></input>
        <button type="submit">
          <Search_gray_Ic />
        </button>
      </form>
    </div>
  );
}
