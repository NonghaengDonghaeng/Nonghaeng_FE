"use client";
import { useEffect, useState } from "react";
import SubNav from "@/components/common/subnav/subnav";
import useMove from "@/hooks/useMove";
import styles from "./.module.css";
import sub_lodg_detail from "@/db/lodgdata/detail.json";
import SubLodgList from "@/components/common/list/sublodglist/sublodglist";

export default function page() {
  const { element, moveElement } = useMove();

  const [pageState, setPageState] = useState({
    img_url: sub_lodg_detail.main_img_url,
  });

  useEffect(() => {
    console.log("숙박 기본정보 api");
    // 숙소 기본정보를 불러오는 api요청
    // 방 리스트는 리스트 컴포넌트에서 api요청
  }, []);

  const imgList = sub_lodg_detail.sub_img_url.map((item, index) => (
    <li
      key={index}
      onClick={() => setPageState({ ...pageState, img_url: item })}
    >
      <img
        src={item}
        className={`${
          pageState.img_url == item ? styles.img_on : styles.img_off
        }`}
      />
    </li>
  ));
  return (
    <main id="main">
      <section className={styles.section1}>
        <article>
          <img src={pageState.img_url}></img>
          <ul>{imgList}</ul>
        </article>
        <article>
          <h1>{sub_lodg_detail.tour_name}</h1>
          <hr />
          <h2>{sub_lodg_detail.tour_one_line_intro}</h2>
        </article>
      </section>
      <section className={styles.section2}>
        <article ref={element[0]}>
          <SubNav
            moveElement={moveElement}
            title={["객실선택", "기본정보", "숙박후기"]}
            nowRef={0}
          />
          <SubLodgList
            sub_lodg_list_props={sub_lodg_detail.room_summary_dto_list}
          />
        </article>
        <article ref={element[1]}>
          <SubNav
            moveElement={moveElement}
            title={["객실선택", "기본정보", "숙박후기"]}
            nowRef={1}
          />
        </article>
        <article ref={element[2]}>
          <SubNav
            moveElement={moveElement}
            title={["객실선택", "기본정보", "숙박후기"]}
            nowRef={2}
          />
        </article>
      </section>
    </main>
  );
}
