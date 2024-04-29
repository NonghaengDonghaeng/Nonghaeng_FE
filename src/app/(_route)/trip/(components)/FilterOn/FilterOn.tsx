import { pageStateType, setPageStateType } from "../../(types)/pageStateType";
import styles from "./FilterOn.module.css";
import Filter_Ic from "icon/sitemap_gray.svg";

type FilterOnPropsType = {
  pageState: pageStateType;
  setPageState: setPageStateType;
};

export default function FilterOn({
  pageState,
  setPageState,
}: FilterOnPropsType) {
  return (
    <button
      className={styles.filter_on}
      onClick={() => setPageState({ ...pageState, isClick: true })}
    >
      <Filter_Ic />
      <span>상세검색</span>
    </button>
  );
}
