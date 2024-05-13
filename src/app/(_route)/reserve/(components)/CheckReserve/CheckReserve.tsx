import { setBooleanType } from "@/common/types/setStateType";
import styles from "./CheckReserve.module.css";

type ReserveInfoType = {
  isCheck: boolean;
  setIsCheck: setBooleanType;
  day: string | null;
  expName: string | null;
  selectedRound:
    | {
        round_id: number;
        start_time: string;
        end_time: string;
        remain_participant: number;
      }
    | undefined;
  paymentPrice: number;
  point: number;
  expReserve: Function;
};

export default function CheckReserve({
  isCheck,
  setIsCheck,
  day,
  expName,
  selectedRound,
  paymentPrice,
  point,
  expReserve,
}: ReserveInfoType) {
  return (
    <div
      className={`${styles.check_reserve} ${isCheck ? styles.on : styles.off}`}
    >
      <h1>예약정보확인</h1>
      <div>
        <p>
          <label>체험이름</label>
          <span>{expName}</span>
        </p>
        <p>
          <label>체험날짜</label>
          <span>{day}</span>
        </p>
        <p>
          <label>예약시간</label>
          <span>
            {selectedRound?.start_time} ~ {selectedRound?.end_time}
          </span>
        </p>
        <p>
          <label>결제금액</label>
          <span>{paymentPrice}</span>
        </p>
        <p>
          <label>잔여포인트</label>
          <span>{point - paymentPrice}</span>
        </p>
      </div>
      <div>
        <button onClick={() => setIsCheck(!isCheck)}>취소</button>
        <button onClick={() => expReserve()}>결제</button>
      </div>
    </div>
  );
}
