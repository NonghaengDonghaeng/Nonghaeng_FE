import { useState } from "react";
import { cancelReserveApi } from "../../(api)/cancelReserveApi";
import {
  expContentType,
  myReserveDataType,
  roomContentType,
} from "../../(types)/myReserveDataType";
import styles from "./Reserve.module.css";
import Paging from "@/common/components/Paging/Paging";

type PropsType = {
  myReserveData: myReserveDataType | undefined;
};

type ReserveType = expContentType | roomContentType;

const isExp = (item: ReserveType): item is expContentType => {
  return item.type === "experience";
};

const isRoom = (item: ReserveType): item is roomContentType => {
  return item.type === "room";
};

export default function ReserveList({ myReserveData }: PropsType) {
  const [resData, setResData] = useState<myReserveDataType>();

  const [pageIndex, setPageIndx] = useState({
    pageIndex: 1,
  });

  const cancelReserve = (id: number) => {
    cancelReserveApi({ id: id }).then((res) => console.log(res?.data));
  };

  const reserveList = myReserveData?.content.map((item, index) => {
    if (isExp(item)) {
      return (
        <li key={index}>
          <div>
            <div>
              <label>체험</label>
              <p>{item.experience_name}</p>
            </div>
            <div>
              <label>인원</label>
              <span>{item.num_of_participant}</span>
            </div>
            <div>
              <label>날짜</label>
              <p>{item.reservation_date}</p>
            </div>
            <div>
              <label>상태</label>
              <span>{item.reservation_state}</span>
            </div>
          </div>
          <div>
            <button>후기</button>
            <button
              onClick={() => cancelReserve(item.experience_reservation_id)}
            >
              취소
            </button>
          </div>
        </li>
      );
    } else if (isRoom(item)) {
      return (
        <li key={index}>
          <div>
            <div>
              <label>숙박</label>
              <p>{item.room_name}</p>
            </div>
            <div>
              <label>인원</label>
              <span>{item.num_of_participant}</span>
            </div>
            <div>
              <label>날짜</label>
              <p>{item.reservation_dates}</p>
            </div>
            <div>
              <label>상태</label>
              <span>{item.reservation_state}</span>
            </div>
          </div>
          <div>
            <button>후기</button>
            <button onClick={() => cancelReserve(item.room_reservation_id)}>
              취소
            </button>
          </div>
        </li>
      );
    }
  });
  return (
    <>
      <ul className={styles.reserve_list}>{reserveList}</ul>
      {/* <Paging pageState={pageIndex} setPageState={setPageIndx} /> */}
    </>
  );
}
