"use client";
import { useEffect, useState } from "react";
import useMove from "@/hooks/useMove";
import NavDetail from "@/components/common/NavDetail/NavDetail";
import { SubList } from "@/components/common/Lists/Lists";
import styles from "./page.module.css";
import { tourDetailPageDataType } from "@/types/dataType/detailPageDataType";
import tourDetailPageResData from "@/db/tourdata/detail.json";
import Grade_orange_Ic from "icon/grade_orange.svg";
import Comment_orange_Ic from "icon/commnet_orange.svg";
import Location_orange_Ic from "icon/location_orange.svg";
import Email_orange_Ic from "icon/email_orange.svg";
import Tell_orange_Ic from "icon/tell_orange.svg";
import Exp_orange_Ic from "icon/exp_orange.svg";
import Lodg_orange_Ic from "icon/lodg_orange.svg";
import DetailImg from "@/components/common/DetailImg/DetailImg";

export default function Page() {
  const { element, moveElement } = useMove();
  const [pageState, setPageState] = useState<{
    isClick: { exp: boolean; lodg: boolean };
  }>({
    isClick: { exp: false, lodg: false },
  });

  const [resData, setResData] = useState<tourDetailPageDataType>();

  useEffect(() => {
    console.log("농촌관광 상세 api");
    setResData(tourDetailPageResData);
  }, []);

  return (
    <>
      <section className={styles.section1}>
        <DetailImg imgUrl={resData?.img_url} />
        <h1>
          {resData?.name}
          <span>
            <Grade_orange_Ic />
            {resData?.grade}
          </span>
          <span>
            <Comment_orange_Ic />
            {resData?.comment_count}
          </span>
        </h1>
        <h2>{resData?.introduction}</h2>
        <div>
          <ul>
            <li>
              <Tell_orange_Ic />
              {resData?.tel}
            </li>
            <li>
              <Email_orange_Ic />
              {resData?.homepage_url}
            </li>
            <li>
              <Location_orange_Ic />
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
              <Exp_orange_Ic />
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
              <Lodg_orange_Ic />
              <span>
                숙박<label> {resData?.room_summary_list.length}</label>
              </span>
            </li>
          </ul>
          <SubList
            isClick={pageState.isClick}
            expSubListData={resData?.exp_summary_list}
            lodgSubListData={resData?.room_summary_list}
          />
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
