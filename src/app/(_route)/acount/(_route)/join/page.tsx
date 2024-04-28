import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.join_main}>
      <article>
        <h1>소비자 회원가입</h1>
        <h2>농촌관광 여행 이용자들을 위한 회원가입 절차입니다.</h2>
        <Link href="/acount/join/user">회원가입</Link>
      </article>
      <article>
        <h1>판매자 회원가입</h1>
        <h2>농촌관광 여행 판매자를 위한 회원가입 절차입니다</h2>
        <Link href="/acount/join/seller">회원가입</Link>
      </article>
    </section>
  );
}
