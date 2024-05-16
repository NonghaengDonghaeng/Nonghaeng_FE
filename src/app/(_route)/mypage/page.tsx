"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Person_orange_Ic from "icon/person_orange.svg";
import { mypageDataType } from "./(types)/mypageDataType";
import { getMypageApi } from "@/app/(_route)/mypage/(api)/getMypageDataApi";
import store from "@/redux/loginStateStore";
import mypageResData from "@/db/mypageResData.json";
import ReserveList from "./(components)/ReserveList/ReserveList";

export default function Page() {
  const router = useRouter();

  const [resData, setResData] = useState<mypageDataType>();

  useEffect(() => {
    getMypageApi().then((res) => setResData(res?.data));
  }, []);

  const logout = () => {
    localStorage.removeItem("jwt");
    store.dispatch({ type: "LOGOUT" });
    router.push("/");
  };

  return (
    <section className={styles.mypage_main}>
      <article>
        <div>
          <h1>{resData?.name}의 마이페이지</h1>
          <Link href="/mypage/edit">
            <Person_orange_Ic />
            회원정보수정
          </Link>
        </div>
        <div>
          <h1>보유포인트</h1>
          <span>{resData?.point}</span>
        </div>
        <button onClick={logout}>로그아웃</button>
      </article>
      <article>
        <h1>나의 예약</h1>
        <hr />
        <ReserveList myReserveData={resData?.reservation_page} />
      </article>
      <article>
        <h1>나의 작성글</h1>
        <hr />
      </article>
    </section>
  );
}
