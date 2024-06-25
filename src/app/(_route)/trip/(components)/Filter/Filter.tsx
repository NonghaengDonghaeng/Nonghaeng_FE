import { useChange } from "@/hooks/useChange";
import { pageStateType, setPageStateType } from "../../(types)/pageStateType";
import styles from "./Filter.module.css";
import {
  regionMap,
  tourCategoryMap,
  lodgCategoryMap,
  expCategoryMap,
} from "@/model/name/name";
import { inputType } from "@/common/types/eventType";
import X_Ic from "icon/x_gray.svg";

type FilterPropsType = {
  pageState: pageStateType;
  setPageState: setPageStateType;
};

export default function Filter({ pageState, setPageState }: FilterPropsType) {
  const change = useChange();

  const lodgCategoryList = lodgCategoryMap.map((item, index) => (
    <li
      key={index}
      className={
        Array.isArray(pageState.category) &&
        pageState.category.includes(item.code)
          ? styles.selected
          : styles.unselected
      }
    >
      <label>
        <input type="checkbox" name="category" value={item.code}></input>
        {item.title}
      </label>
    </li>
  ));

  const expCategoryList = expCategoryMap.map((item, index) => (
    <li
      key={index}
      className={
        Array.isArray(pageState.category) &&
        pageState.category.includes(item.code)
          ? styles.selected
          : styles.unselected
      }
    >
      <label>
        <input type="checkbox" name="category" value={item.code}></input>
        {item.title}
      </label>
    </li>
  ));

  //
  const tourCategoryList = tourCategoryMap.map((item, index) => (
    <li
      key={index}
      className={
        Array.isArray(pageState.category) &&
        pageState.category.includes(item.code)
          ? styles.selected
          : styles.unselected
      }
    >
      <label>
        <input type="checkbox" name="category" value={item.code}></input>
        {item.title}
      </label>
    </li>
  ));

  //
  const regionList = regionMap.map((item, index) => (
    <li
      key={index}
      className={
        Array.isArray(pageState.region) && pageState.region.includes(item.code)
          ? styles.selected
          : styles.unselected
      }
    >
      <label>
        <input type="checkbox" name="region" value={item.code}></input>
        {item.title}
      </label>
    </li>
  ));

  return (
    <div
      className={pageState.isClick ? styles.filter : styles.filter_off}
      onChange={(e: inputType) =>
        change({ changeItem: pageState, setChangeItem: setPageState, e })
      }
    >
      <h1>
        상세검색
        <button onClick={() => setPageState({ ...pageState, isClick: false })}>
          <X_Ic />
        </button>
      </h1>
      {(pageState.pageType == "tour" ||
        pageState.pageType == "exp" ||
        pageState.pageType == "lodg") && (
        <>
          <div>
            <span>지역선택</span>
            <hr />
            <ul>{regionList}</ul>
          </div>
          <div>
            <span>
              {pageState.pageType == "tour" && "관광유형선택"}
              {pageState.pageType == "exp" && "체험유형선택"}
              {pageState.pageType == "lodg" && "숙박유형선택"}
            </span>
            <hr />
            <ul>
              {pageState.pageType == "tour" && tourCategoryList}
              {pageState.pageType == "exp" && expCategoryList}
              {pageState.pageType == "lodg" && lodgCategoryList}
            </ul>
          </div>
        </>
      )}
      <input name="searchWord" placeholder="검색어를 입력하세요."></input>
      <button
        onClick={() =>
          setPageState({
            ...pageState,
            pageIndex: 1,
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
