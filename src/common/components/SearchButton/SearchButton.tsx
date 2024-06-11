import styles from "./SearchButton.module.css";
import { Search_white_Ic } from "icon/index";

export default function SearchButton() {
  return (
    <button className={styles.search_button} type="submit">
      검색
      <Search_white_Ic />
    </button>
  );
}
