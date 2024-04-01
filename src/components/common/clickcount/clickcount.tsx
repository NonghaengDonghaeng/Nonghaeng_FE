import styles from "./clickcount.module.css";
import { inputType } from "@/types/eventtype";

type PropsType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function ClickCount({ count, setCount }: PropsType) {
  return (
    <div className={styles.click_count}>
      <button
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          } else alert("0이하");
        }}
      >
        -
      </button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
