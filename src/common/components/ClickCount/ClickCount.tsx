import styles from "./ClickCount.module.css";

type PropsType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  limitCount?: number;
};

export default function ClickCount({ count, setCount, limitCount }: PropsType) {
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
      <button
        onClick={() => {
          if (limitCount) {
            if (count < limitCount) setCount(count + 1);
          } else setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
