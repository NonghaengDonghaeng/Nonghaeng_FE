import styles from "./.module.css";
import tour_list from "@/db/tourdata/list.json";

type PropsType = { selectItem: any; setSelectItem: any };

export default function PgButton({ selectItem, setSelectItem }: PropsType) {
  const totalPages = tour_list.totalPages;

  function numbering(totalPages: number) {
    const pageNum = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNum.push(i);
    }
    return pageNum;
  }

  function onFilter(index: number) {
    setSelectItem({ ...selectItem, page_index: index + 1 });
  }

  const pageList = numbering(totalPages).map((item, index) => (
    <li
      key={index}
      className={`${selectItem.page_index == `${index + 1}` && styles.on}`}
      onClick={() => onFilter(index)}
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
