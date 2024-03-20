"use client";
import Image from "next/image";
import useMove from "@/hooks/useMove";
import DetailNav from "@/components/common/detailnav/detailnav";
import styles from "./.module.css";
import tour_detail from "@/db/tourdata/detail.json";
import star_img from "img/tour/star.png";

export default function page() {
  const { element, moveElement } = useMove();

  return (
    <main id="main">
      <section className={styles.section1}>
        <img src={tour_detail.main_img_url} />
        <div>
          <div>
            <h1>
              {tour_detail.name}
              <Image src={star_img} alt="star_img" />
            </h1>
            <h2></h2>
          </div>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
        </div>
        <div></div>
      </section>
      <section className={styles.section2}>
        <article ref={element[0]}>
          <DetailNav moveElement={moveElement} nowRef={"기본정보"} />
          기본정보
        </article>
        <article ref={element[1]}>
          <DetailNav moveElement={moveElement} nowRef={"여행후기"} />
          여행후기
        </article>
        <article ref={element[2]}>
          <DetailNav moveElement={moveElement} nowRef={"고객문의"} />
          문의
        </article>
      </section>
    </main>
  );
}
