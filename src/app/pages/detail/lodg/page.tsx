"use client";
import { useEffect, useState } from "react";
import NavDetail from "@/components/common/navdetail/navdetail";
import useMove from "@/hooks/useMove";
import { RoomList } from "@/components/common/list/list";
import styles from "./page.module.css";
import { lodgDetailPageDataType } from "@/types/dataType/detailPageDataType";
import lodgDetailPageResData from "@/db/lodgdata/detail.json";

export default function page() {
  const { element, moveElement } = useMove();

  const [imgUrl, setImgUrl] = useState<string | undefined>();

  const [resData, setResData] = useState<lodgDetailPageDataType | undefined>();

  useEffect(() => {
    console.log("숙박중간페이지 api");
    setResData(lodgDetailPageResData);
  }, []);

  useEffect(() => setImgUrl(resData?.main_img_url), [resData?.main_img_url]);

  const imgList = resData?.sub_img_url.map((item, index) => (
    <li key={index} onClick={() => setImgUrl(item)}>
      <img
        src={item}
        className={`${imgUrl == item ? styles.img_on : styles.img_off}`}
      />
    </li>
  ));
  return (
    <>
      <section className={styles.section1}>
        <article>
          <img src={imgUrl}></img>
          <ul>{imgList}</ul>
        </article>
        <article>
          <h1>{resData?.tour_name}</h1>
          <hr />
          <h2>{resData?.tour_one_line_intro}</h2>
        </article>
      </section>
      <section className={styles.section2}>
        <article ref={element[0]}>
          <NavDetail
            moveElement={moveElement}
            title={["객실선택", "기본정보", "숙박후기"]}
            nowRef={0}
          />
          <RoomList roomListData={resData?.room_summary_dto_list} />
        </article>
        <article ref={element[1]}>
          <NavDetail
            moveElement={moveElement}
            title={["객실선택", "기본정보", "숙박후기"]}
            nowRef={1}
          />
        </article>
        <article ref={element[2]}>
          <NavDetail
            moveElement={moveElement}
            title={["객실선택", "기본정보", "숙박후기"]}
            nowRef={2}
          />
        </article>
      </section>
    </>
  );
}
