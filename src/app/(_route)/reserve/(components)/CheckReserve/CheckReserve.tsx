import { setBooleanType } from "@/common/types/setStateType";
import styles from "./CheckReserve.module.css";
import { expRoundType } from "../../(types)/expRoundType";
import { expReserveInfoType } from "../../(types)/expReserveInfoType";
import { roomReserveInfoType } from "../../(types)/roomReserveInfoType";

type ReserveInfoType = {
  isCheck: boolean;
  setIsCheck: setBooleanType;
  reserveFuncion: Function;
  expReserveData?: {
    expReserveInfo: expReserveInfoType;
    selectedRound: expRoundType | undefined;
  };
  roomReserveData?: {
    roomReserveInfo: roomReserveInfoType;
    roomName: string | null;
  };
};

export default function CheckReserve({
  isCheck,
  setIsCheck,
  reserveFuncion,
  expReserveData,
  roomReserveData,
}: ReserveInfoType) {
  return (
    <div
      className={`${styles.check_reserve} ${isCheck ? styles.on : styles.off}`}
    >
      <h1>예약정보확인</h1>
      {expReserveData && (
        <div>
          <p>
            <label>체험이름</label>
            <span>{expReserveData.expReserveInfo?.reservation_name}</span>
          </p>
          <p>
            <label>체험날짜</label>
            <span>{expReserveData.expReserveInfo?.reservation_date}</span>
          </p>
          <p>
            <label>예약시간</label>
            <span>
              {expReserveData.selectedRound?.start_time} ~{" "}
              {expReserveData.selectedRound?.end_time}
            </span>
          </p>
          <p>
            <label>결제금액</label>
            <span>{expReserveData.expReserveInfo?.final_price}</span>
          </p>
        </div>
      )}
      {roomReserveData && (
        <div>
          <p>
            <label>방이름</label>
            <span>{roomReserveData.roomName}</span>
          </p>
          <p>
            <label>체크인</label>
            <span>{roomReserveData.roomReserveInfo.reservation_dates[0]}</span>
          </p>
          {/* <p>
            <label>체크아웃</label>
            <span>{roomReserveData.roomReserveInfo.reservation_dates[1]}</span>
          </p> */}
          <p>
            <label>결제금액</label>
            <span>{roomReserveData.roomReserveInfo.final_price}</span>
          </p>
        </div>
      )}
      <div>
        <button onClick={() => setIsCheck(!isCheck)}>취소</button>
        <button onClick={() => reserveFuncion()}>결제</button>
      </div>
    </div>
  );
}
