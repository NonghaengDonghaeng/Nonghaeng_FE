import { setBooleanType } from "@/common/types/setStateType";
import styles from "./CheckReserve.module.css";
import { returnExpReserveType } from "../../(types)/expReserveInfoType";
import requestPay from "../../(api)/requestPayApi";
import { ReturnRoomReserveType } from "../../(types)/roomReserveInfoType";

type ReserveInfoType = {
  isCheck: boolean;
  setIsCheck: setBooleanType;
  expReserveData?: returnExpReserveType;
  roomReserveData?: ReturnRoomReserveType;
};

export default function CheckReserve({
  isCheck,
  setIsCheck,
  expReserveData,
  roomReserveData,
}: ReserveInfoType) {
  const reserve = () => {
    if (expReserveData) {
      requestPay({ paymentDto: expReserveData.payment_dto });
    } else if (roomReserveData) {
      requestPay({ paymentDto: roomReserveData.payment_dto });
    }
  };
  return (
    <div
      className={`${styles.check_reserve} ${
        isCheck ? "isvisible" : "isinvisible"
      }`}
    >
      <h1>예약정보확인</h1>
      {expReserveData && (
        <div>
          <p>
            <label>체험이름</label>
            <span>{expReserveData.experience_name}</span>
          </p>
          <p>
            <label>체험날짜</label>
            <span>{expReserveData.reservation_date}</span>
          </p>
          <p>
            <label>예약시간</label>
            <span>
              {expReserveData.start_time} ~ {expReserveData?.end_time}
            </span>
          </p>
          <p>
            <label>결제금액</label>
            <span>{expReserveData.final_price}</span>
          </p>
        </div>
      )}
      {roomReserveData && (
        <div>
          <p>
            <label>방이름</label>
            <span>{roomReserveData.room_name}</span>
          </p>
          <p>
            <label>체크인</label>
            <span>{roomReserveData.start_date}</span>
          </p>
          <p>
            <label>체크아웃</label>
            <span>{roomReserveData.end_date}</span>
          </p>
          <p>
            <label>결제금액</label>
            <span>{roomReserveData.final_price}</span>
          </p>
        </div>
      )}
      <div>
        <button onClick={() => setIsCheck(!isCheck)}>취소</button>
        <button onClick={() => reserve()}>결제</button>
      </div>
    </div>
  );
}
