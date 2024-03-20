import styles from "./.module.css";

export default function DetailNav({ moveElement, nowRef }: any) {
  return (
    <ul className={styles.nav_detail}>
      <li
        className={`${nowRef == "기본정보" ? styles.on : styles.off}`}
        onClick={() => moveElement(0)}
      >
        <span>기본정보</span>
        <hr />
      </li>
      <li
        className={`${nowRef == "여행후기" ? styles.on : styles.off}`}
        onClick={() => moveElement(1)}
      >
        <span>여행후기</span>
        <hr />
      </li>
      <li
        className={`${nowRef == "고객문의" ? styles.on : styles.off}`}
        onClick={() => moveElement(2)}
      >
        <span>고객문의</span>
        <hr />
      </li>
    </ul>
  );
}
