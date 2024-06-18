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
import { reserveApi } from "../../(api)/reserveApi";
import Overlay from "@/common/components/Overlay/Overlay";
import UserInfo from "../../(components)/UserInfo/UserInfo";
import ExpRoundList from "../../(components)/ExpRoundList/ExpRoundList";
import {
  expReserveInfoType,
  returnExpReserveType,
} from "../../(types)/expReserveInfoType";

export default function Page() {
  const searchParams = useSearchParams();
  const today = new Date();

  // 체험관련
  const [expId, setExpId] = useState(Number(searchParams.get("exp_id")));
  const [isClick, setIsClick] = useState(false);
  const [expName, setExpName] = useState(searchParams.get("exp_name"));
  const [personCount, setPersonCount] = useState(1);
  const [expPrice, setExpPrice] = useState(
    Number(searchParams.get("exp_price"))
  );
  const [selectedRound, setSelectedRound] = useState<expRoundType>();
  const [day, setDay] = useState(
    `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`
  );
  const [paymentPrice, setPaymentPrice] = useState(expPrice * personCount);

  const [visible, setVisible] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  // 서버에서 받아온 데이터
  const [roundResData, setRoundResData] = useState<expRoundListType>();
  const [userResData, setUserResData] = useState<userInfoDataType>();
  const [returnReserveData, setReturnReserveData] = useState<
    returnExpReserveType
  >();

  // 서버로 보낼 데이터
  const [expReserveInfo, setExpReserveInfo] = useState<expReserveInfoType>();

  useEffect(() => {
    setExpReserveInfo({
      type: "experience",
      round_id: selectedRound?.round_id,
      reservation_date: day,
      num_of_participant: personCount,
      reservation_name: userResData?.reservation_person_name,
      number: userResData?.phone_number,
      email: userResData?.email,
      final_price: paymentPrice,
    });
  }, [selectedRound, day, personCount, userResData, paymentPrice]);

  // 가격 최신화
  useEffect(() => {
    setPaymentPrice(expPrice * personCount);
  }, [personCount]);

  // 유저 데이터 받아오기
  useEffect(() => {
    getUserDataApi().then((res) => {
      if (res?.status == 200) {
        setUserResData(res?.data);
        setVisible(true);
      }
    });
  }, []);

  // 체험 회차 데이터 받아오기
  useEffect(() => {
    getExpRoundApi({ date: day, id: expId }).then((res) => {
      if (res?.status == 200) {
        setRoundResData(res?.data);
      }
    });
  }, [day]);

  // 예약 검증
  const checkReserve = () => {
    if (!selectedRound) {
      alert("회차를 선택해주세요.");
    } else if (personCount > selectedRound.remain_participant) {
      alert("인원이 초과되었습니다.");
    } else {
      reserveApi({ reserveInfo: expReserveInfo }).then((res) => {
        if (res?.status == 200) {
          setReturnReserveData(res.data);
          setIsCheck(true);
        }
      });
    }
  };

  return (
    <section
      className={`${styles.reserve_exp} ${
        visible ? "isvisible" : "isinvisible"
      }`}
    >
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
      <button onClick={() => checkReserve()}>결제진행</button>
      <Overlay isClick={isCheck}>
        <CheckReserve
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          expReserveData={returnReserveData}
        />
      </Overlay>
    </section>
  );
}
