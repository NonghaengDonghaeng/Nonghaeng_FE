import { useChange } from "@/hooks/useChange";
import Image from "next/image";
import styles from "./scdetail.module.css";
import { pageStateType, setPageStateType } from "@/types/pageState";
import { inputType } from "@/types/eventtype";
import {
  region,
  category_exp,
  category_tour,
  category_lodg,
} from "../../../../../public/name/name";
import search_img from "img/header/sitemapImg.png";

type propsType = {
  pageState: pageStateType;
  setPageState: setPageStateType;
};

export function ScDetail({ pageState, setPageState }: propsType) {
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
      className={`${styles.search_detail} ${!pageState.isClick && styles.off}`}
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
        <div className={`${pageState.page_type == "tour" && styles.off}`}>
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

export function ScDetailOn({ pageState, setPageState }: propsType) {
  return (
    <button
      className={styles.search_detail_on}
      onClick={() => setPageState({ ...pageState, isClick: true })}
    >
      <Image src={search_img} alt="filter_img" />
      <span>상세검색</span>
    </button>
  );
}
