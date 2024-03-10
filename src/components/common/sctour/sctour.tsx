import { useChange } from "@/hooks/useChange";
import { inputType, setAnyType, setBooleanType } from "@/types/eventtype";
import styles from "./.module.css";
import { region, category_tour } from "@/storage/name";

export default function ScTour({
  isClick,
  setIsClick,
  selectItem,
  setSelectItem,
  onSubmit,
}: propsType) {
  const change = useChange();
  // list
  const categoryList = category_tour.map((item, index) => (
    <li key={index}>
      <input type="checkbox" name="category" value={item} />
      {item}
    </li>
  ));

  const regionList = region.map((item, index) => (
    <li key={index}>
      <input type="checkbox" name="region" value={item} />
      {item}
    </li>
  ));
  return (
    <div className={`${styles.search_tour} ${!isClick && styles.off}`}>
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
          <span>유형선택</span>
          <ul>{categoryList}</ul>
        </div>
        <input placeholder="키워드 검색" name="search_word"></input>
      </div>
      <button onClick={onSubmit}>선택한 조건으로 검색하기</button>
    </div>
  );
}

export type propsType = {
  isClick: boolean;
  setIsClick: setBooleanType;
  selectItem: {
    region: string[];
    category: string[];
    search_word: string;
  };
  setSelectItem: setAnyType;
  onSubmit: () => void;
};
