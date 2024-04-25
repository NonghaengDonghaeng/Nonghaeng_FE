"use client";
import { useEffect, useState } from "react";
import { useChange } from "@/hooks/useChange";
import { formType, inputType } from "@/types/eventType";
import { RiKakaoTalkFill } from "react-icons/ri";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  const change = useChange();
  const params = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<{
    number?: string;
    password?: string;
  }>({
    number: "",
    password: "",
  });

  const [seller, setSeller] = useState<{
    username?: string;
    password?: string;
  }>({
    username: "",
    password: "",
  });

  function onSubmit(e: formType) {
    e.preventDefault();
    loginApi();
  }

  // 해야할것: url을 통한 jwt 통신x -> header로 받을 수 있는 방법 찾기
  useEffect(() => {
    let token = params.get("accessToken");
    if (token) {
      {
        console.log("토큰 확인");
        localStorage.setItem("jwt", "Bearer " + token);
        router.push("/");
      }
    }
  }, [pathName]);

  const KakaoLoginApi = async () => {
    window.location.href =
      "https://nonghaeng.duckdns.org/oauth2/authorization/kakao";
  };

  const loginApi = async () => {
    try {
      const response = await axios.post(
        "https://nonghaeng.duckdns.org/login",
        user
      );
      console.log(response.headers.authorization);
      let token = response.headers["authorization"];
      localStorage.setItem("jwt", "Bearer " + token);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  function onSubmit2(e: formType) {
    e.preventDefault();
    sellerLoginApi();
  }

  const sellerLoginApi = async () => {
    try {
      const response = await axios.post(
        "https://nonghaeng.duckdns.org/seller-login",
        seller
      );
      let token = response.headers["authorization"];
      console.log(response.headers.authorization);
      localStorage.setItem("jwt", "Bearer " + token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.login}>
      <article
        onChange={(e: inputType) => {
          change({ changeItem: user, setChangeItem: setUser, e });
        }}
      >
        <h1>소비자 로그인</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label>전화번호</label>
            <input name="number" placeholder="전화번호를 입력하세요"></input>
          </div>
          <div>
            <label>비밀번호</label>
            <input name="password" placeholder="비밀번호를 입력하세요"></input>
          </div>
          <button type="submit">로그인</button>
        </form>
        <button onClick={KakaoLoginApi}>
          <RiKakaoTalkFill />
          <span>카카오톡으로 계속하기</span>
        </button>
        <p>
          <Link href="/acount/join">회원가입</Link>
          {"  /  "}
          <Link href="/acount/findpass">비밀번호찾기</Link>
        </p>
      </article>
      <hr></hr>
      <article
        onChange={(e: inputType) => {
          change({ changeItem: seller, setChangeItem: setSeller, e });
        }}
      >
        <h1>판매자 로그인</h1>
        <form onSubmit={onSubmit2}>
          <div>
            <label>아이디</label>
            <input name="username" placeholder="아이디를 입력하세요"></input>
          </div>
          <div>
            <label>비밀번호</label>
            <input name="password" placeholder="비밀번호를 입력하세요"></input>
          </div>
          <button type="submit">로그인</button>
        </form>
        <p>
          <Link href="/acount/join">회원가입</Link>
          {"  /  "}
          <Link href="/acount/findpass">비밀번호찾기</Link>
        </p>
      </article>
    </section>
  );
}
