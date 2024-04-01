import styles from "./paging.module.css";
import { pageStateType, setPageStateType } from "@/types/pageState";

type propsType = {
  pageState: pageStateType;
  setPageState: setPageStateType;
  totalPages: number;
};

export default function Paging({
  pageState,
  setPageState,
  totalPages,
}: propsType) {
  function numbering(totalPages: number) {
    const pageNum = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNum.push(i);
    }
    return pageNum;
  }

  const pageList = numbering(totalPages).map((item, index) => (
    <li
      key={index}
      className={`${
        pageState.page_index == `${index + 1}` ? styles.on : styles.off
      }`}
      onClick={() => setPageState({ ...pageState, page_index: `${index + 1}` })}
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
