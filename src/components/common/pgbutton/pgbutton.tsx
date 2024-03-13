import { useState } from "react";
import styles from "./.module.css";
import tour_list from "@/db/tourdata/list.json";

type page_indexType = any;

export default function PgButton({ page_index }: page_indexType) {
  const [pageIndex, setPageIndex] = useState(page_index);
  const totalPages = tour_list.totalPages;

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
      className={`${pageIndex == `${index + 1}` && styles.on}`}
      onClick={() => setPageIndex(index)}
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
