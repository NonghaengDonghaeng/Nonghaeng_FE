"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useMove from "@/hooks/useMove";
import NavDetail from "./(components)/NavDetail/NavDetail";
import SubList from "./(components)/SubList/SubList";
import styles from "./page.module.css";
import { tourDetailDataType } from "./(types)/tourDetailDataType";
import tourDetailPageResData from "@/db/tourdata/detail.json";
import {
  Lodg_orange_Ic,
  Grade_orange_Ic,
  Comment_orange_Ic,
  Location_orange_Ic,
  Email_orange_Ic,
  Tell_orange_Ic,
  Exp_orange_Ic,
} from "icon/index";
import DetailImg from "./(components)/DetailImg/DetailImg";
import { getTourDetailApi } from "./(api)/getTourDetailApi";

export default function Page() {
  const searchParams = useSearchParams();
  const { element, moveElement } = useMove();
  const [tourId, setTourId] = useState<number>(
    Number(searchParams.get("tour_id"))
  );

  const [pageState, setPageState] = useState<{
    isClick: { exp: boolean; lodg: boolean };
  }>({
    isClick: { exp: false, lodg: false },
  });

  const [resData, setResData] = useState<tourDetailDataType>();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getTourDetailApi({ tourId }).then((res) => {
      if (res?.status == 200) {
        setResData(res?.data);
        setVisible(true);
      }
    });
    // setResData(tourDetailPageResData);
    // setVisible(true);
  }, []);

  return (
    <section
      className={`${styles.tour_detail} ${
        visible ? "isvisible" : "isinvisible"
      }`}
    >
      <article>
        <DetailImg photoInfo={resData?.photo_info_dto_list} />
        <h1>
          {resData?.name}
          <span>
            <Grade_orange_Ic />
            {/* {resData?.grade} */}
          </span>
          <span>
            <Comment_orange_Ic />
            {/* {resData?.comment_count} */}
          </span>
        </h1>
        <h2>{resData?.introduction}</h2>
        <div>
          <ul>
            <li>
              <Tell_orange_Ic />
              {/* {resData?.tel} */}
            </li>
            <li>
              <Email_orange_Ic />
              {resData?.homepage_url}
            </li>
            <li>
              <Location_orange_Ic />
              {/* {resData?.address} */}
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
        </div>
        <SubList
          isClick={pageState.isClick}
          expSubListData={resData?.exp_summary_list}
          roomSubListData={resData?.room_summary_list}
        />
      </article>
      <article>
        <div ref={element[0]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "여행후기", "여행문의"]}
            nowRef={0}
          />
          기본정보
        </div>

        <div ref={element[1]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "여행후기", "여행문의"]}
            nowRef={1}
          />
          여행후기
        </div>
        <div ref={element[2]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "여행후기", "여행문의"]}
            nowRef={2}
          />
          여행문의
        </div>
      </article>
    </section>
  );
}
