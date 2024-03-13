import { useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./.module.css";
import tour_list from "@/db/tourdata/list.json";

export default function PgButton() {
  const searchParams = useSearchParams();
  const [pageIndex, setPageIndex] = useState(searchParams.get("page_index"));
  const totalPages = tour_list.totalPages;

  function numbering(totalPages) {
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
