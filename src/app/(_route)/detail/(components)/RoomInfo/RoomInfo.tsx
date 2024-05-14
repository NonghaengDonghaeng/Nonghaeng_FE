import Link from "next/link";
import styles from "./RoomInfo.module.css";
import Room_orange_Ic from "icon/room_orange.svg";
import { roomDetailDataType } from "../../(types)/roomDetailDataType";

type PropsType = {
  roomData: roomDetailDataType | undefined;
};

export default function RoomInfo({ roomData }: PropsType) {
  return (
    <div className={styles.room_info}>
      <span>
        <Link href={`/detail?tour_id=${roomData?.tour_id}`}>
          {roomData?.tour_name}
        </Link>
        {" > "}
        {roomData?.room_name}
      </span>
      <h1>
        {roomData?.room_name}
        <span>
          <Room_orange_Ic />
          잔여객실 : {roomData?.current_num_of_room}
        </span>
      </h1>
      <hr />
      <div>
        <p>
          <label>인원</label>
          {`${roomData?.standard_capacity}인기준(최대${roomData?.max_capacity}인)`}
        </p>
        <p>
          <label>체크인 / 체크아웃</label>
          {`${roomData?.checkin_time} / ${roomData?.checkout_time}`}
        </p>
        <p>
          <label>가격</label>
          {`${roomData?.price_off_peak}원(주말, 공휴일 ${roomData?.price_holiday}원)`}
        </p>
      </div>
    </div>
  );
}
