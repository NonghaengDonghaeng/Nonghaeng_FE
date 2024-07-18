import styles from "./SearchButton.module.css";
import {SearchIc} from "public/svg";

export default function SearchButton() {
  return (
    <button className={styles.search_button} type="submit">
      검색
      <SearchIc />
    </button>
  );
}
