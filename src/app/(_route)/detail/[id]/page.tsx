"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useMove from "@/hooks/useMove";
import NavDetail from "../(components)/NavDetail/NavDetail";
import styles from "./page.module.css";
import { tourDetailDataType } from "../(types)/tourDetailDataType";
import tourDetailPageResData from "@/db/tourdata/detail.json";
import DetailImg from "../(components)/DetailImg/DetailImg";
import { getTourDetailApi } from "../(api)/getTourDetailApi";
import ReviewtList from "../(components)/ReveiwList/ReviewList";
import MarkDownView from "@/common/components/MarkDownView/MarkDownView";
import TourInfo from "../(components)/TourInfo/TourInfo";

export default function Page({ params }: { params: { id: string } }) {
  const { element, moveElement } = useMove();

  const [tourId, setTourId] = useState<number>(Number(params.id));

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
        <TourInfo tourInfo={resData} />
      </article>
      <article>
        <div ref={element[0]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "여행후기", "여행문의"]}
            nowRef={0}
          />
          <MarkDownView post={resData?.introduction} />
        </div>
        <div ref={element[1]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "여행후기", "여행문의"]}
            nowRef={1}
          />
          <ReviewtList id={tourId} type="tour" />
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
