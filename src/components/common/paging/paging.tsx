import styles from "./.module.css";
import tour_list from "@/db/tourdata/list.json";
import { useEffect } from "react";
import useSetUrl from "@/hooks/useSetUrl";
import { setAnyType } from "@/types/eventtype";

type PropsType = {
  selectItem: any;
  setSelectItem: any;
  state: boolean;
  setState: setAnyType;
};

export default function Paging({
  selectItem,
  setSelectItem,
  state,
  setState,
}: PropsType) {
  const setUrl = useSetUrl;
  const totalPages = tour_list.totalPages;

  function numbering(totalPages: number) {
    const pageNum = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNum.push(i);
    }
    return pageNum;
  }

  function onFilter(index: number) {
    setSelectItem({ ...selectItem, page_index: `${index + 1}` });
    setState(!state);
  }

  const pageList = numbering(totalPages).map((item, index) => (
    <li
      key={index}
      className={`${
        selectItem.page_index == `${index + 1}` ? styles.on : styles.off
      }`}
      onClick={() => onFilter(index)}
    >
      {item}
    </li>
  ));
  return (
    <div className={styles.page_button}>
      <ul>{pageList}</ul>
    </div>
  );
}
