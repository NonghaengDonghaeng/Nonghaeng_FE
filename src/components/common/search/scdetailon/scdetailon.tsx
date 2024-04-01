import Image from "next/image";
import search_img from "img/header/sitemapImg.png";
import styles from "./scdetailon.module.css";
import { pageStateType, setPageStateType } from "@/types/pageState";

type propsType = {
  pageState: pageStateType;
  setPageState: setPageStateType;
};

export default function ScDetailOn({ pageState, setPageState }: propsType) {
  return (
    <button
      className={styles.search_detailon}
      onClick={() => setPageState({ ...pageState, isClick: true })}
    >
      <Image src={search_img} alt="filter_img" />
      <span>상세검색</span>
    </button>
  );
}
