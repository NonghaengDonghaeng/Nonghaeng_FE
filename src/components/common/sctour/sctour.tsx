import { isClickType, setIsClickType } from "@/types/eventtype";
import styles from "./.module.css";

export default function ScTour({ isClick, setIsClick }: isClickType) {
  return (
    <div className={`${styles.search_tour} ${!isClick && styles.off}`}>
      <div>
        <span>상세검색</span>
        <button onClick={() => setIsClick(false)}>x</button>
      </div>
      <hr />
      <span></span>
    </div>
  );
}
