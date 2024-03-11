import { useChange } from "@/hooks/useChange";
import { inputType, setAnyType, setBooleanType } from "@/types/eventtype";
import styles from "./.module.css";
import { region, category_exp } from "@/storage/name";

export default function ScExp({
  isClick,
  setIsClick,
  selectItem,
  setSelectItem,
  onSubmit,
}: propsType) {
  const change = useChange();

  // list
  const regionList = region.map((item, index) => (
    <li key={index}>
      <input type="checkbox" name="region" value={item} />
      {item}
    </li>
  ));
  const categoryList = category_exp.map((item, index) => (
    <li key={index}>
      <input type="checkbox" name="category" value={item} />
      {item}
    </li>
  ));

  return (
    <div className={`${styles.search_exp} ${!isClick && styles.off}`}>
      <div>
        <span>상세검색</span>
        <button onClick={() => setIsClick(false)}>x</button>
      </div>
      <hr />
      <div
        onChange={(e: inputType) => change({ selectItem, setSelectItem, e })}
      >
        <div>
          <span>지역선택</span>
          <ul>{regionList}</ul>
        </div>
        <div>
          <span>체험유형선택</span>
          <ul>{categoryList}</ul>
        </div>
        <div>
          <span>상품가격</span>
          <div>
            <input placeholder="최소가격" name="minCost"></input>
            <label>-</label>
            <input placeholder="최대가격" name="maxCost"></input>
          </div>
        </div>
        <input placeholder="키워드 검색" name="search_word"></input>
      </div>
      <button onClick={onSubmit}>선택한 조건으로 검색하기</button>
    </div>
  );
}

type propsType = {
  isClick: boolean;
  setIsClick: setBooleanType;
  selectItem: {
    region: string[];
    category: string[];
    maxCost: string;
    minCost: string;
    search_word: string;
  };
  setSelectItem: setAnyType;
  onSubmit: () => void;
};
