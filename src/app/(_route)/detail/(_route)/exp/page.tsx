"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import useMove from "@/hooks/useMove";
import NavDetail from "../../(components)/NavDetail/NavDetail";
import styles from "./page.module.css";
import { expDetailDataType } from "../../(types)/expDetailDataType";
import DetailImg from "../../(components)/DetailImg/DetailImg";
import { getExpDetailApi } from "../../(api)/getExpDetailApi";
import ExpCommentList from "../../(components)/ExpComment/ExpCommentList";
import store from "@/redux/loginStateStore";
import LikeAndReserve from "../../(components)/LikeAndReserve/LikeAndReserve";
import ExpInfo from "../../(components)/ExpInfo/ExpInfo";

export default function Page() {
  const { element, moveElement } = useMove();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [resData, setResData] = useState<expDetailDataType>();
  const [expId, setExpId] = useState<number>(
    Number(searchParams.get("exp_id"))
  );

  // api useEffect
  useEffect(() => {
    getExpDetailApi({ expId }).then((res) => {
      setResData(res?.data);
    });
    // setResData(expDetailPageResData);
  }, []);

  const routeExpReserve = () => {
    if (store.getState()) {
      router.push(
        `/reserve/exp?exp_id=${expId}&exp_name=${resData?.experience_name}&exp_price=${resData?.price}`
      );
    } else {
      alert("로그인후 이용가능합니다.");
    }
  };

  return (
    <>
      <section className={styles.section1}>
        <article>
          <DetailImg photoInfo={resData?.photo_info_dto_list} />
        </article>
        <article>
          <ExpInfo expData={resData} />
          <LikeAndReserve
            type="experience"
            id={expId}
            routerFunction={routeExpReserve}
          />
        </article>
      </section>
      <section className={styles.section2}>
        <NavDetail
          moveElement={moveElement}
          title={["기본정보", "체험후기", "체험문의"]}
          nowRef={0}
        />
        <article ref={element[0]}>기본정보</article>
        <NavDetail
          moveElement={moveElement}
          title={["기본정보", "체험후기", "체험문의"]}
          nowRef={1}
        />
        <article ref={element[1]}>
          <ExpCommentList expId={expId} />
        </article>
        <NavDetail
          moveElement={moveElement}
          title={["기본정보", "체험후기", "체험문의"]}
          nowRef={2}
        />
        <article ref={element[2]}>문의</article>
      </section>
    </>
  );
}
