import { pageStateType, setPageStateType } from "../../(types)/pageStateType";
import styles from "./FilterOn.module.css";
import {FilterIc} from "public/svg";

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
      <FilterIc />
      <span>상세검색</span>
    </button>
  );
}
