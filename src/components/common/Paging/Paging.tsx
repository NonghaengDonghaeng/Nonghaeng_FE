import styles from "./Paging.module.css";
import { pageStateType } from "@/types/stateType";
import { setPageStateType } from "@/types/setStateType";

type propsType = {
  pageState: pageStateType;
  setPageState: setPageStateType;
  totalPages: number | undefined;
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

  const pageList = numbering(totalPages || 1).map((item, index) => (
    <li
      key={index}
      className={`${pageState.pageIndex == index + 1 ? styles.on : styles.off}`}
      onClick={() => setPageState({ ...pageState, pageIndex: index + 1 })}
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
