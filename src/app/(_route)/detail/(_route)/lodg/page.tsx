"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import NavDetail from "../../(components)/NavDetail/NavDetail";
import useMove from "@/hooks/useMove";
import RoomList from "../../(components)/RoomList/RoomList";
import styles from "./page.module.css";
import { lodgDetailDataType } from "../../(types)/lodgDetailDataType";
import lodgDetailPageResData from "@/db/lodgdata/detail.json";
import DetailImg from "../../(components)/DetailImg/DetailImg";
import { getLodgDetailApi } from "../../(api)/getLodgDetailApi";

export default function Page() {
  const searchParams = useSearchParams();
  const { element, moveElement } = useMove();
  const [lodgId, setLodgId] = useState<number>(
    Number(searchParams.get("lodg_id"))
  );
  const [resData, setResData] = useState<lodgDetailDataType | undefined>();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getLodgDetailApi({ lodgId }).then((res) => {
      if (res?.status == 200) {
        setResData(res?.data);
        setVisible(true);
      }
    });
  }, []);

  return (
    <section
      className={`${styles.lodg_detail} ${
        visible ? "isvisible" : "isinvisible"
      }`}
    >
      <article>
        <div>
          <DetailImg photoInfo={resData?.photo_info_dto_list} />
        </div>
        <div>
          <h1>{resData?.tour_name}</h1>
          <hr />
          <h2>{resData?.tour_one_line_intro}</h2>
        </div>
      </article>
      <article>
        <div ref={element[0]}>
          <NavDetail
            moveElement={moveElement}
            title={["객실선택", "기본정보", "숙박후기"]}
            nowRef={0}
          />
          <RoomList
            lodgId={lodgId}
            roomListData={resData?.room_summary_dto_list}
          />
        </div>
        <div ref={element[1]}>
          <NavDetail
            moveElement={moveElement}
            title={["객실선택", "기본정보", "숙박후기"]}
            nowRef={1}
          />
        </div>
        <div ref={element[2]}>
          <NavDetail
            moveElement={moveElement}
            title={["객실선택", "기본정보", "숙박후기"]}
            nowRef={2}
          />
        </div>
      </article>
    </section>
  );
}
