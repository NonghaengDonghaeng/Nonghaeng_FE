import Image from "next/image";
import styles from "./.module.css";
import search_img from "img/main/search.png";

export default function ScButton() {
  return (
    <button className={styles.search_button} type="submit">
      검색
      <Image src={search_img} alt="search_img"></Image>
    </button>
  );
}
