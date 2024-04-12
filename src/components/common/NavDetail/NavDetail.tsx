import styles from "./navdetail.module.css";
/**
 *
 * @param moveElement useMove훅을 통해 moveElement(넘버)형태로 넣으면 됨
 * @param title 스트링타입의 네비게이션 타이틀
 * @param nowRef 컴포넌트가 사용된 위치를 확인하기 위한용으로 컴포넌트가 몇번째로 사용되었는지 넘버타입으로 넣으면 됨
 */

export default function NavDetail({ moveElement, title, nowRef }: any) {
  const navList = title.map((item: string, index: number) => (
    <li
      key={index}
      className={`${nowRef == index ? styles.on : styles.off}`}
      onClick={() => moveElement(index)}
    >
      <span>{item}</span>
      <hr />
    </li>
  ));
  return <ul className={styles.nav_detail}>{navList}</ul>;
}
