"use client";
import { useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { useChange } from "@/hooks/useChange";
import SearchButton from "@/components/SearchButton/SearchButton";
import styles from "./SearchMain.module.css";
import { inputType, formType } from "@/types/eventType";
import { searchItemType } from "@/types/searchItemType";
import { category, regionMap } from "@/models/name";
import {MoreUpDownIc} from "public/svg";

export default function SearchMain() {
  const search = useSearch();
  const change = useChange();

  const [searhcItem, setSearchItem] = useState<searchItemType>({
    searchWord: "",
    region: "지역선택",
    category: "유형선택",
  });
  const [isClick, setIsClick] = useState({ region: false, category: false });

  function onSubmit(e: formType) {
    e.preventDefault();
    search({ searchItem: searhcItem });
  }

  const regionList = regionMap.map((item, index) => (
    <li
      key={index}
      onClick={() => setSearchItem({ ...searhcItem, region: item.title })}
    >
      {item.title}
    </li>
  ));
  const categoryList = category.map((item, index) => (
    <li
      key={index}
      onClick={() => setSearchItem({ ...searhcItem, category: item })}
    >
      {item}
    </li>
  ));

  return (
    <form className={styles.search_main} onSubmit={onSubmit}>
      <div>
        <div
          className={
            isClick.region ? styles.search_main_on : styles.search_main_off
          }
          onClick={() => setIsClick({ ...isClick, region: !isClick.region })}
        >
          <label>
            {searhcItem.region}
            <MoreUpDownIc />
          </label>
          <ul>{regionList}</ul>
        </div>
        <div
          className={
            isClick.category ? styles.search_main_on : styles.search_main_off
          }
          onClick={() =>
            setIsClick({ ...isClick, category: !isClick.category })
          }
        >
          <label>
            {searhcItem.category}
            <MoreUpDownIc />
          </label>
          <ul>{categoryList}</ul>
        </div>
      </div>
      <div>
        <input
          placeholder="검색어를 입력해보세요."
          name="searchWord"
          onChange={(e: inputType) =>
            change({ changeItem: searhcItem, setChangeItem: setSearchItem, e })
          }
        ></input>
        <SearchButton />
      </div>
    </form>
  );
}
