import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <section className={styles.sitemap}>
      <article>
        <div>
          <span>
            <Link href="/intro">농행동행</Link>
          </span>
          <Link href="/intro/nonghaeng">- 농행동행 소개</Link>
          <Link href="/intro/tour">- 농촌관광 소개</Link>
        </div>
        <div>
          <span>
            <Link href="/trip">농촌여행</Link>
          </span>
          <Link href="/trip/tour">- 농촌관광</Link>
          <Link href="/trip/exp">- 농촌체험</Link>
          <Link href="/trip/lodg">- 농촌숙박</Link>
        </div>
        <div>
          <span>
            <Link href="/item">기획상품</Link>
          </span>
        </div>
      </article>
      <article>
        <div>
          <span>
            <Link href="/commu">커뮤니티</Link>
          </span>
          <Link href="/commu/notice">- 공지사항</Link>
          <Link href="/commu/review">- 농행후기</Link>
          <Link href="/commu/inquiry">- 고객문의</Link>
        </div>
        <div>
          <span>
            <Link href="/mypage">마이페이지</Link>
          </span>
          <Link href="/mypage/reserve">- 최근예약</Link>
          <Link href="/mypage/edit">- 회원정보수정</Link>
        </div>
        <div>
          <span>사이트맵</span>
        </div>
      </article>
    </section>
  );
}
