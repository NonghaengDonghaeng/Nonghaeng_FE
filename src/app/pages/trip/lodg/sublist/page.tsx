"use client";
import { useEffect, useState } from "react";
import SubNav from "@/components/common/subnav/subnav";
import useMove from "@/hooks/useMove";
import styles from "./.module.css";
import lodg_list from "@/db/lodgdata/detail.json";
import CustomCalendar from "@/components/common/customcalendar/cumstomcalendar";

export default function page() {
  const { element, moveElement } = useMove();

  const [pageState, setPageState] = useState({
    img_url: lodg_list.main_img_url,
  });

  useEffect(() => {
    console.log("숙박 기본정보 api");
    // 숙소 기본정보를 불러오는 api요청
    // 방 리스트는 리스트 컴포넌트에서 api요청
  }, []);

  const imgList = lodg_list.sub_img_url.map((item, index) => (
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
          <h1>{lodg_list.tour_name}</h1>
          <hr />
          <h2>{lodg_list.tour_one_line_intro}</h2>
        </article>
      </section>
      <section className={styles.section2}>
        <article ref={element[0]}>
          <SubNav
            moveElement={moveElement}
            title={["객실선택", "기본정보", "숙박후기"]}
            nowRef={0}
          />
          <CustomCalendar />
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
