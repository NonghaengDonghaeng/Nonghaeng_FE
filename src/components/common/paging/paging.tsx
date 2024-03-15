import styles from "./.module.css";
import tour_list from "@/db/tourdata/list.json";
import { pageStateType, setPageStateType } from "@/types/pageState";

type propsType = {
  pageState: pageStateType;
  setPageState: setPageStateType;
};

export default function Paging({ pageState, setPageState }: propsType) {
  const totalPages = tour_list.totalPages;

  function numbering(totalPages: number) {
    const pageNum = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNum.push(i);
    }
    return pageNum;
  }

  function onFilter(index: number) {
    setPageState({ ...pageState, page_index: `${index + 1}` });
  }

  const pageList = numbering(totalPages).map((item, index) => (
    <li
      key={index}
      className={`${
        pageState.page_index == `${index + 1}` ? styles.on : styles.off
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
