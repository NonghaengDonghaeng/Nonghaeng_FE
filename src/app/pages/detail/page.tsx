"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import useMove from "@/hooks/useMove";
import NavDetail from "@/components/common/NavDetail/NavDetail";
import { SubList } from "@/components/common/List/List";
import styles from "./page.module.css";
import { tourDetailPageDataType } from "@/types/dataType/detailPageDataType";
import tourDetailPageResData from "@/db/tourdata/detail.json";
import grade_img from "img/tour/grade_img.png";
import comment_img from "img/tour/comment_img.png";
import tell_img from "img/tour/tel_img.png";
import address_img from "img/tour/address-img.png";
import email_img from "img/tour/email_img.png";
import exp_img from "img/exp/orange.png";
import lodg_img from "img/lodg/orange.png";

export default function Page() {
  const { element, moveElement } = useMove();
  const [pageState, setPageState] = useState<{
    isClick: { exp: boolean; lodg: boolean };
    img_url: string | any;
  }>({
    isClick: { exp: false, lodg: false },
    img_url: "",
  });

  const [resData, setResData] = useState<tourDetailPageDataType>();

  useEffect(() => {
    console.log("농촌관광 상세 api");
    setResData(tourDetailPageResData);
  }, []);

  useEffect(
    () => setPageState({ ...pageState, img_url: resData?.main_img_url }),
    [resData?.main_img_url]
  );

  const imgList = resData?.sub_img_url.map((item, index) => (
    <Image
      className={`${
        pageState.img_url == item ? styles.img_on : styles.img_off
      }`}
      key={index}
      src={item}
      onClick={() => setPageState({ ...pageState, img_url: item })}
      alt="sub_img"
      width={800}
      height={800}
    />
  ));

  return (
    <>
      <section className={styles.section1}>
        <Image
          src={pageState.img_url}
          alt="main_img"
          width={800}
          height={800}
        />
        <div>
          <div>
            <h1>
              {resData?.name}
              <span>
                <Image src={grade_img} alt="star_img" />
                {resData?.grade}
              </span>
              <span>
                <Image src={comment_img} alt="comment_img" />
                {resData?.comment_count}
              </span>
            </h1>
            <h2>{resData?.introduction}</h2>
          </div>
          <div>{imgList}</div>
        </div>
        <div>
          <ul>
            <li>
              <Image src={tell_img} alt="tel_img" />
              {resData?.tel}
            </li>
            <li>
              <Image src={email_img} alt="email_img" />
              {resData?.homepage_url}
            </li>
            <li>
              <Image src={address_img} alt="address_img" />
              {resData?.address}
            </li>
          </ul>
          <ul>
            <li
              className={`${pageState.isClick.exp ? styles._on : styles._off}`}
              onClick={() =>
                setPageState({
                  ...pageState,
                  isClick: { exp: !pageState.isClick.exp, lodg: false },
                })
              }
            >
              <Image src={exp_img} alt="exp_img" />
              <span>
                체험<label> {resData?.exp_summary_list.length}</label>
              </span>
            </li>
            <li
              className={`${pageState.isClick.lodg ? styles._on : styles._off}`}
              onClick={() =>
                setPageState({
                  ...pageState,
                  isClick: { exp: false, lodg: !pageState.isClick.lodg },
                })
              }
            >
              <Image src={lodg_img} alt="lodg_img" />
              <span>
                숙박<label> {resData?.room_summary_list.length}</label>
              </span>
            </li>
            <SubList
              isClick={pageState.isClick}
              expSubListData={resData?.exp_summary_list}
              lodgSubListData={resData?.room_summary_list}
            />
          </ul>
        </div>
      </section>
      <section className={styles.section2}>
        <article ref={element[0]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "여행후기", "여행문의"]}
            nowRef={0}
          />
          기본정보
        </article>
        <article ref={element[1]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "여행후기", "여행문의"]}
            nowRef={1}
          />
          여행후기
        </article>
        <article ref={element[2]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "여행후기", "여행문의"]}
            nowRef={2}
          />
          문의
        </article>
      </section>
    </>
  );
}
