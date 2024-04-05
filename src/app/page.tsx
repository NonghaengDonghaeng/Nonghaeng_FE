"use client";
import Link from "next/link";
import Image from "next/image";
import ScMain from "@/components/common/search/scmain/scmain";
import styles from "./page.module.css";
import section1_bg from "img/main/section1_bg.png";
import more_nonghang from "img/main/more_nonghang.png";
import more_green from "img/main/more_green.png";
import ExpList from "@/components/common/list/explist/explist";
import LodgList from "@/components/common/list/lodglist/lodglist";
import exp_list from "@/db/expdata/list.json";
import lodg_list from "@/db/lodgdata/list.json";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  // api요청

  const api = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.get("http://localhost:8080/test/jwt", {
        headers: { Authorization: token },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  api();

  return (
    <main id="main">
      <section className={styles.section1}>
        <Image src={section1_bg} alt="section1_bg" priority={true}></Image>
        <h1>
          똑같은 여행은 지루해...
          <br />
          농행동행이 도와드릴게요!
        </h1>
        <h2>
          테마별 숨은 명소를 모두 모아
          <br />더 편안한 여행계획을 만드는 똑똑한 플랫폼
        </h2>
        <Link href="/pages/introduce">
          농행동행 알아보기
          <Image src={more_nonghang} alt="more_nonghang"></Image>
        </Link>
      </section>
      <ScMain />
      <section className={styles.section2}>
        <article>
          <h1>
            우수 체험
            <Link href="/pages/trip/exp">
              더 많은 농촌체험 보러가기
              <Image src={more_green} alt="more_experience"></Image>
            </Link>
          </h1>
          <hr />
          <ExpList content={exp_list.content.slice(0, 4)} />
        </article>
        <article>
          <h1>
            우수 숙박
            <Link href="/pages/trip/lodgment">
              더 많은 농촌숙박 보러가기
              <Image src={more_green} alt="more_lodgement"></Image>
            </Link>
          </h1>
          <hr />
          <LodgList content={lodg_list.content.slice(0, 4)} />
        </article>
      </section>
    </main>
  );
}
