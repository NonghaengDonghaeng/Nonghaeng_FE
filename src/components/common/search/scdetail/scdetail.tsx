import Image from "next/image";
import search_img from "img/header/sitemapImg.png";
import styles from "./.module.css";
import { setIsClickType } from "@/types/eventtype";

export default function ScDetail({ setIsClick }: setIsClickType) {
  return (
    <button className={styles.search_detail} onClick={() => setIsClick(true)}>
      <Image src={search_img} alt="filter_img" />
      <span>상세검색</span>
    </button>
  );
}
