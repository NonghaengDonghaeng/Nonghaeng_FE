"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import useMove from "@/hooks/useMove";
import NavDetail from "../../../(components)/NavDetail/NavDetail";
import styles from "./page.module.css";
import { expDetailDataType } from "../../../(types)/expDetailDataType";
import DetailImg from "../../../(components)/DetailImg/DetailImg";
import { getExpDetailApi } from "../../../(api)/getExpDetailApi";
import ReviewtList from "../../../(components)/ReveiwList/ReviewList";
import store from "@/redux/loginStateStore";
import LikeAndReserve from "../../../(components)/LikeAndReserve/LikeAndReserve";
import ExpInfo from "../../../(components)/ExpInfo/ExpInfo";
import expDetailPageData from "@/db/expdata/detail.json";
import MarkDownView from "@/common/components/MarkDownView/MarkDownView";

export default function Page({ params }: { params: { id: string } }) {
  const { element, moveElement } = useMove();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [expId, setExpId] = useState<number>(Number(params.id));

  const [resData, setResData] = useState<expDetailDataType>();
  const [visible, setVisible] = useState(false);

  // api useEffect
  useEffect(() => {
    getExpDetailApi({ expId }).then((res) => {
      if (res?.status == 200) {
        setResData(res?.data);
        setVisible(true);
      }
    });
    // setResData(expDetailPageData);
  }, []);

  const routeExpReserve = () => {
    if (store.getState()) {
      router.push(
        `/reserve/exp/${expId}?exp_name=${resData?.experience_name}&exp_price=${resData?.price}`
      );
    } else {
      alert("로그인후 이용가능합니다.");
    }
  };

  return (
    <section
      className={`${styles.exp_detail} ${
        visible ? "isvisible" : "isinvisible"
      }`}
    >
      <article>
        <div>
          <DetailImg photoInfo={resData?.photo_info_dto_list} />
        </div>
        <div>
          <ExpInfo expData={resData} />
          <LikeAndReserve
            type="experience"
            id={expId}
            routerFunction={routeExpReserve}
          />
        </div>
      </article>
      <article>
        <div ref={element[0]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "체험후기", "체험문의"]}
            nowRef={0}
          />
          <MarkDownView post={resData?.detail_introduction} />
        </div>
        <div ref={element[1]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "체험후기", "체험문의"]}
            nowRef={1}
          />
          <ReviewtList id={expId} type="experience" />
        </div>
        <div ref={element[2]}>
          <NavDetail
            moveElement={moveElement}
            title={["기본정보", "체험후기", "체험문의"]}
            nowRef={2}
          />
        </div>
      </article>
    </section>
  );
}
