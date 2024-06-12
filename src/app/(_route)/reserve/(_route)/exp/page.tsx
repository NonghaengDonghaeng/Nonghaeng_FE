"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./page.module.css";
import CustomCalendar from "../../(components)/CustomCalendar/CustomCalendar";
import CheckReserve from "../../(components)/CheckReserve/CheckReserve";
import { getExpRoundApi } from "../../(api)/getExpRoundApi";
import { expRoundListType, expRoundType } from "../../(types)/expRoundType";
import { userInfoDataType } from "../../(types)/userInfoDataType";
import { getUserDataApi } from "../../(api)/getUserDataApi";
import ClickCount from "@/common/components/ClickCount/ClickCount";
import { expReserveApi } from "../../(api)/expReserveApi";
import Overlay from "@/common/components/Overlay/Overlay";
import UserInfo from "../../(components)/UserInfo/UserInfo";
import ExpRoundList from "../../(components)/ExpRoundList/ExpRoundList";
import { expReserveInfoType } from "../../(types)/expReserveInfoType";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const today = new Date();

  const [expId, setExpId] = useState(Number(searchParams.get("exp_id")));
  const [isClick, setIsClick] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [expName, setExpName] = useState(searchParams.get("exp_name"));
  const [personCount, setPersonCount] = useState(1);
  const [expPrice, setExpPrice] = useState(
    Number(searchParams.get("exp_price"))
  );
  const [userResData, setUserResData] = useState<userInfoDataType>();
  const [roundResData, setRoundResData] = useState<expRoundListType>();
  const [selectedRound, setSelectedRound] = useState<expRoundType>();
  const [day, setDay] = useState(
    `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`
  );
  const [paymentPrice, setPaymentPrice] = useState(expPrice * personCount);

  const [expReserveInfo, setExpReserveInfo] = useState<expReserveInfoType>({
    round_id: selectedRound?.round_id,
    reservation_date: day,
    num_of_participant: personCount,
    reservation_name: userResData?.reservation_person_name,
    number: userResData?.phone_number,
    email: userResData?.email,
    final_price: paymentPrice,
  });

  useEffect(() => {
    setExpReserveInfo({
      round_id: selectedRound?.round_id,
      reservation_date: day,
      num_of_participant: personCount,
      reservation_name: userResData?.reservation_person_name,
      number: userResData?.phone_number,
      email: userResData?.email,
      final_price: paymentPrice,
    });
  }, [selectedRound, day, personCount, userResData, paymentPrice]);

  useEffect(() => {
    setPaymentPrice(expPrice * personCount);
  }, [personCount]);

  useEffect(() => {
    getUserDataApi().then((res) => setUserResData(res?.data));
  }, []);

  useEffect(() => {
    getExpRoundApi({ date: day, id: expId }).then((res) =>
      setRoundResData(res?.data)
    );
  }, [day]);

  const checkExpReserve = () => {
    if (!selectedRound) {
      alert("회차를 선택해주세요.");
    } else if (userResData && paymentPrice > userResData?.point) {
      alert("보유포인트가 부족합니다.");
    } else if (personCount > selectedRound.remain_participant) {
      alert("인원이 초과되었습니다.");
    } else setIsCheck(true);
  };

  // 예약하기 function
  const expReserve = () => {
    expReserveApi({ expReserveInfo }).then((res) => {
      console.log(res?.data);
    });
  };

  return (
    <section className={styles.reserve_exp}>
      <article>
        <h1>
          <div />
          예약하기
        </h1>
        <hr />
        <div onClick={() => setIsClick(!isClick)}>
          {day || "날짜를 선택해주세요."}
        </div>
        <CustomCalendar
          day={day}
          setDay={setDay}
          isClick={isClick}
          setIsClick={setIsClick}
        />
        <ExpRoundList
          roundResData={roundResData}
          selectedRound={selectedRound}
          setSelectedRound={setSelectedRound}
        />
        <p>
          <label>체험이름</label>
          <span>{expName}</span>
        </p>
        <p>
          <label>상품가격</label>
          <span>{expPrice}</span>
        </p>
        <p>
          <label>참여인원</label>
          <ClickCount
            count={personCount}
            setCount={setPersonCount}
            limitCount={selectedRound?.remain_participant}
          />
        </p>
      </article>
      <article>
        <h1>
          <div />
          예약자 정보
        </h1>
        <hr />
        <UserInfo userData={userResData} />
      </article>
      <article>
        <h1>
          <div />
          결제수단
        </h1>
        <hr />
        <p>
          <label>결제금액</label>
          <span>{paymentPrice}</span>
        </p>
      </article>
      <button onClick={() => checkExpReserve()}>결제진행</button>
      <Overlay isClick={isCheck}>
        <CheckReserve
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          expReserveData={{
            expReserveInfo: expReserveInfo,
            selectedRound: selectedRound,
          }}
          reserveFuncion={expReserve}
        />
      </Overlay>
    </section>
  );
}
