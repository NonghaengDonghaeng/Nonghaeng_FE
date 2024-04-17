"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavDetail from "@/components/common/NavDetail/NavDetail";
import useMove from "@/hooks/useMove";
import { RoomList } from "@/components/common/Lists/Lists";
import styles from "./page.module.css";
import { lodgDetailPageDataType } from "@/types/dataType/detailPageDataType";
import lodgDetailPageResData from "@/db/lodgdata/detail.json";

export default function Page() {
  const { element, moveElement } = useMove();

  const [imgUrl, setImgUrl] = useState<string | any>();

  const [resData, setResData] = useState<lodgDetailPageDataType | undefined>();

  useEffect(() => {
    console.log("숙박중간페이지 api");
    setResData(lodgDetailPageResData);
  }, []);

  useEffect(() => setImgUrl(resData?.main_img_url), [resData?.main_img_url]);

  const imgList = resData?.sub_img_url.map((item, index) => (
    <li key={index} onClick={() => setImgUrl(item)}>
      <Image
        src={item}
        className={`${imgUrl == item ? styles.img_on : styles.img_off}`}
        alt="sub_img"
        width={800}
        height={800}
      />
    </li>
  ));
  return (
    <>
      <section className={styles.section1}>
        <article>
          <Image src={imgUrl} alt="main_img" width={800} height={800} />
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