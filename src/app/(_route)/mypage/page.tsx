"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Person_orange_Ic from "icon/person_orange.svg";
import { mypageDataType } from "./(types)/mypageDataType";
import { getMypageApi } from "@/app/(_route)/mypage/(api)/getMypageDataApi";

export default function Page() {
  const router = useRouter();

  const [resData, setResData] = useState<mypageDataType>();

  useEffect(() => {
    getMypageApi({ setResData });
  }, []);

  const logout = () => {
    localStorage.removeItem("jwt");
    router.push("/");
  };

  // const reserveList = resData?.reservations.map((item, index) => (
  //   <li key={index}>
  //     {item.type == "room" && (
  //       <ul className={styles.room_list}>
  //         숙박
  //         <li>{item.room_name}</li>
  //         <li>{item.num_of_participant}</li>
  //         <li>{item.reservation_dates}</li>
  //         <li>{item.price}</li>
  //         <li>{item.num_of_room}</li>
  //         <li>{item.reservation_state}</li>
  //       </ul>
  //     )}
  //     {item.type == "experience" && (
  //       <ul className={styles.exp_list}>
  //         체험
  //         <li>{item.experience_name}</li>
  //         <li>{item.num_of_participant}</li>
  //         <li>{item.reservation_date}</li>
  //         <li>{item.price}</li>
  //         <li>{item.reservation_state}</li>
  //       </ul>
  //     )}
  //   </li>
  // ));

  return (
    <section className={styles.mypage_main}>
      <article>
        <div>
          <h1>{resData?.name}의 마이페이지</h1>
          <Link href="/mypage/edit">
            <Person_orange_Ic />
            회원정보 관리
          </Link>
          <button onClick={logout}>로그아웃</button>
        </div>
        <div>
          <h1>나의 예약</h1>
        </div>
        <div>
          <h1>나의 작성글</h1>
        </div>
      </article>
      <article>
        <h1>나의 예약</h1>
        <hr />
        {/* <ul className={styles.reserve_list}>{reserveList}</ul> */}
      </article>
      <article>
        <h1>나의 작성글</h1>
        <hr />
      </article>
    </section>
  );
}
