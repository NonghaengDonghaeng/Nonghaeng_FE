"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "./Searchs.module.css";
import { useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { useChange } from "@/hooks/useChange";
import { inputType, formType } from "@/types/eventType";
import { pageStateType, setPageStateType } from "@/types/pageStateType";
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
    search_word: "",
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
          name="search_word"
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
    search_word: searchParams.get("search_word") || "",
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
        name="search_word"
        onChange={(e: inputType) =>
          change({ changeItem: searchItem, setChangeItem: setSearchItem, e })
        }
      ></input>
      <ScButton />
    </form>
  );
}

/*-------------------------------------------------------------
ScDetail 
--------------------------------------------------------------*/
type ScDetailPropsType = {
  pageState: pageStateType;
  setPageState: setPageStateType;
};

export function ScDetail({ pageState, setPageState }: ScDetailPropsType) {
  const change = useChange();

  const regionList = region.map((item, index) => (
    <li key={index}>
      <input
        type="checkbox"
        name="region"
        value={item}
        defaultChecked={
          Array.isArray(pageState.region) && pageState.region.includes(item)
        }
      />
      {item}
    </li>
  ));
  const categoryList_lodg = category_lodg.map((item, index) => (
    <li key={index}>
      <input
        type="checkbox"
        name="category"
        value={item}
        defaultChecked={
          Array.isArray(pageState.category) && pageState.category.includes(item)
        }
      />
      {item}
    </li>
  ));
  const categoryList_exp = category_exp.map((item, index) => (
    <li key={index}>
      <input
        type="checkbox"
        name="category"
        value={item}
        defaultChecked={
          Array.isArray(pageState.category) && pageState.category.includes(item)
        }
      />
      {item}
    </li>
  ));
  const categoryList_tour = category_tour.map((item, index) => (
    <li key={index}>
      <input
        type="checkbox"
        name="category"
        value={item}
        defaultChecked={
          Array.isArray(pageState.category) && pageState.category.includes(item)
        }
      />
      {item}
    </li>
  ));

  return (
    <div
      className={`${styles.search_detail} ${
        !pageState.isClick && styles.searhc_detail_off
      }`}
    >
      <span>
        상세검색
        <button onClick={() => setPageState({ ...pageState, isClick: false })}>
          x
        </button>
      </span>
      <hr></hr>
      <div
        onChange={(e: inputType) =>
          change({ changeItem: pageState, setChangeItem: setPageState, e })
        }
      >
        <div>
          <span>지역선택</span>
          <ul>{regionList}</ul>
        </div>
        {pageState.page_type == "tour" && (
          <div>
            <span>관광유형선택</span>
            <ul>{categoryList_tour}</ul>
          </div>
        )}
        {pageState.page_type == "exp" && (
          <div>
            <span>체험유형선택</span>
            <ul>{categoryList_exp}</ul>
          </div>
        )}
        {pageState.page_type == "lodg" && (
          <div>
            <span>숙박유형선택</span>
            <ul>{categoryList_lodg}</ul>
          </div>
        )}
        <div
          className={`${
            pageState.page_type == "tour" && styles.searhc_detail_off
          }`}
        >
          <span>상품가격</span>
          <input placeholder="최소가격" name="min_cost" />
          <label>-</label>
          <input placeholder="최대가격" name="max_cost" />
        </div>
        <input placeholder="키워드 검색" name="search_word" />
      </div>
      <button
        onClick={() =>
          setPageState({
            ...pageState,
            page_index: 1,
            state: !pageState.state,
            isClick: false,
          })
        }
      >
        선택한 조건으로 검색하기
      </button>
    </div>
  );
}

/*-------------------------------------------------------------
ScDetailOn 
--------------------------------------------------------------*/
export function ScDetailOn({ pageState, setPageState }: ScDetailPropsType) {
  return (
    <button
      className={styles.search_detail_on}
      onClick={() => setPageState({ ...pageState, isClick: true })}
    >
      <Sitemap_gray_Ic />
      <span>상세검색</span>
    </button>
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
          name="search_word"
        ></input>
        <button type="submit">
          <Search_gray_Ic />
        </button>
      </form>
    </div>
  );
}
