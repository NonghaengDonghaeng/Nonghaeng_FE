import { cancelReserveApi } from "../../(api)/cancelReserveApi";
import {
  expContentType,
  myReserveDataType,
  roomContentType,
} from "../../(types)/myReserveDataType";
import styles from "./Reserve.module.css";

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
  const cancelReserve = ({ type, id }: { type: string; id: number }) => {
    cancelReserveApi({ type: type, id: id });
  };

  const reserveList = myReserveData?.content.map((item, index) => {
    if (isExp(item)) {
      return (
        <li key={index}>
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
          <div>
            <label></label>
            <button
              onClick={() =>
                cancelReserve({
                  type: "experience",
                  id: item.experience_reservation_id,
                })
              }
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
          <div>
            <label></label>
            <button
              onClick={() =>
                cancelReserve({
                  type: "room",
                  id: item.room_reservation_id,
                })
              }
            >
              취소
            </button>
          </div>
        </li>
      );
    }
  });
  return <ul className={styles.reserve_list}>{reserveList}</ul>;
}
