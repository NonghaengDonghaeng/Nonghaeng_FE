"use client";
import { useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { useChange } from "@/hooks/useChange";
import SearchButton from "@/common/components/SearchButton/SearchButton";
import styles from "./SearchMain.module.css";
import { inputType, formType } from "@/common/types/eventType";
import { searchItemType } from "@/common/types/searchItemType";
import { region, category } from "@/model/name/name";
import More_gray_Ic from "icon/more_gray.svg";
import More_white_Ic from "icon/more_white.svg";

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

  const regionList = region.map((item, index) => (
    <li
      key={index}
      onClick={() => setSearchItem({ ...searhcItem, region: item })}
    >
      {item}
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
            {isClick.region ? <More_white_Ic /> : <More_gray_Ic />}
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
            {isClick.category ? <More_white_Ic /> : <More_gray_Ic />}
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
