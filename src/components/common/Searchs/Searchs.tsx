"use client";
import { useSearchParams } from "next/navigation";
import styles from "./Searchs.module.css";
import { useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { useChange } from "@/hooks/useChange";
import { inputType, formType } from "@/types/eventType";
import { pageStateType } from "@/types/stateType";
import { setPageStateType } from "@/types/setStateType";
import {
  region,
  category,
  category_exp,
  category_tour,
  category_lodg,
} from "../../../../public/name/name";
import Sitemap_gray_Ic from "icon/sitemap_gray.svg";
import Search_white_Ic from "icon/search_white.svg";
import More_gray_Ic from "icon/more_gray.svg";
import More_white_Ic from "icon/more_white.svg";
import Search_gray_Ic from "icon/search_gray.svg";

/*
1.ScButton
2.ScMain
3.ScTotal
4.ScDetail
5.ScDetailOn
 */

/*-------------------------------------------------------------
SchButton 
--------------------------------------------------------------*/
export function ScButton() {
  return (
    <button className={styles.search_button} type="submit">
      검색
      <Search_white_Ic />
    </button>
  );
}

/*-------------------------------------------------------------
ScMain 
--------------------------------------------------------------*/
export function ScMain() {
  const search = useSearch();
  const change = useChange();

  const [searhcItem, setSearchItem] = useState<pageStateType>({
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
        <ScButton />
      </div>
    </form>
  );
}

/*-------------------------------------------------------------
ScTotal 
--------------------------------------------------------------*/
export function ScTotal() {
  const searchParams = useSearchParams();
  const search = useSearch();
  const change = useChange();

  const [searchItem, setSearchItem] = useState<pageStateType>({
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
      <ScButton />
    </form>
  );
}

export default function ScBase() {
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
