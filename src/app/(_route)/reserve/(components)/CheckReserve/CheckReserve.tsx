import { setBooleanType } from "@/common/types/setStateType";
import styles from "./CheckReserve.module.css";

type ReserveInfoType = {
  isCheck: boolean;
  setIsCheck: setBooleanType;
  day: string | null;
};

export default function CheckReserve({
  isCheck,
  setIsCheck,
  day,
}: ReserveInfoType) {
  return (
    <div
      className={`${styles.check_reserve} ${isCheck ? styles.on : styles.off}`}
    >
      <h1>예약정보확인</h1>
      <div>
        <p>
          <label>체험이름</label>
        </p>
        <p>
          <label>체험날짜</label>
          <span>{day}</span>
        </p>
        <p>
          <label>예약시간</label>
        </p>
      </div>
      <div>
        <button onClick={() => setIsCheck(!isCheck)}>취소</button>
        <button>결제</button>
      </div>
    </div>
  );
}
