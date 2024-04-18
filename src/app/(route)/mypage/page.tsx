import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import person_img from "img/participant_orange.png";

export default function Page() {
  return (
    <section className={styles.mypage_main}>
      <article>
        <div>
          <h1>김선인의 마이페이지</h1>
          <Link href="/mypage/edit">
            <Image src={person_img} alt="person_img" />
            회원정보 관리
          </Link>
        </div>
        <div>
          <h1>나의 예약</h1>
        </div>
        <div>
          <h1>나의 작성글</h1>
        </div>
      </article>
      <article>
        <h1>나의 예약</h1>
        <hr />
      </article>
      <article>
        <h1>나의 작성글</h1>
        <hr />
      </article>
    </section>
  );
}
