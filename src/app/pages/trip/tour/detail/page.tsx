"use client";
import { useState } from "react";
import Image from "next/image";
import useMove from "@/hooks/useMove";
import DetailNav from "@/components/common/detailnav/detailnav";
import styles from "./.module.css";
import tour_detail from "@/db/tourdata/detail.json";
import grade_img from "img/tour/grade_img.png";
import comment_img from "img/tour/comment_img.png";
import tell_img from "img/tour/tel_img.png";
import address_img from "img/tour/address-img.png";
import email_img from "img/tour/email_img.png";
import exp_img from "img/exp/orange.png";
import lodg_img from "img/lodg/orange.png";
import { region } from "@/storage/name";

export default function page() {
  const { element, moveElement } = useMove();
  const [pageState, setPageState] = useState({
    img_url: tour_detail.main_img_url,
  });
  const [isClick, setIsClick] = useState({ exp: false, lodg: false });

  const imgList = tour_detail.sub_img_url.map((item, index) => (
    <img
      className={`${
        pageState.img_url == item ? styles.img_on : styles.img_off
      }`}
      key={index}
      src={item}
      onClick={() => setPageState({ ...pageState, img_url: item })}
    />
  ));

  return (
    <main id="main">
      <section className={styles.section1}>
        <img src={pageState.img_url} />
        <div>
          <div>
            <h1>
              {tour_detail.name}
              <span>
                <Image src={grade_img} alt="star_img" />
                {tour_detail.grade}
              </span>
              <span>
                <Image src={comment_img} alt="comment_img" />
                {tour_detail.comment_count}
              </span>
            </h1>
            <h2>{tour_detail.introduction}</h2>
          </div>
          <div>{imgList}</div>
        </div>
        <div>
          <ul>
            <li>
              <Image src={tell_img} alt="tel_img" />
              {tour_detail.tel}
            </li>
            <li>
              <Image src={email_img} alt="email_img" />
              {tour_detail.homepage_url}
            </li>
            <li>
              <Image src={address_img} alt="address_img" />
              {tour_detail.address}
            </li>
          </ul>
          <ul>
            <li
              className={`${isClick.exp ? styles._on : styles._off}`}
              onClick={() => setIsClick({ exp: !isClick.exp, lodg: false })}
            >
              <Image src={exp_img} alt="exp_img" />
              <span>
                체험<label> {tour_detail.exp_summary_list.length}</label>
              </span>
            </li>
            <li
              className={`${isClick.lodg ? styles._on : styles._off}`}
              onClick={() => setIsClick({ exp: false, lodg: !isClick.lodg })}
            >
              <Image src={lodg_img} alt="lodg_img" />
              <span>
                숙박<label> {tour_detail.room_summary_list.length}</label>
              </span>
            </li>
          </ul>
        </div>
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
