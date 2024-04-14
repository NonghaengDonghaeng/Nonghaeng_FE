"use client";
import { useState } from "react";
import { useChange } from "@/hooks/useChange";
import { formType, inputType } from "@/types/eventType";
import { RiKakaoTalkFill } from "react-icons/ri";
import axios from "axios";

export default function Page() {
  const change = useChange();

  const [user_state, setUser_state] = useState<{
    number?: string;
    password?: string;
  }>({
    number: "",
    password: "",
  });

  const [seller_state, setSeller_state] = useState<{
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

  const KakaoLoginApi = async () => {
    // window.location.href =
    //   "https://nonghaeng.duckdns.org/oauth2/authorization/kakao";
    try {
      const res = await axios.get(
        "https://nonghaeng.duckdns.org/oauth2/authorization/kakao"
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const loginApi = async () => {
    try {
      const response = await axios.post(
        "https://nonghaeng.duckdns.org/login",
        user_state
      );
      console.log(response.headers.authorization);
      let token = response.headers["authorization"];

      localStorage.setItem("jwt", "Bearer " + token);
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
        "http://localhost:8080/seller-login",
        seller_state
      );
      let token = response.headers["authorization"];
      console.log(response.headers.authorization);
      localStorage.setItem("jwt", "Bearer " + token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-row m3 ">
      <article className="flex flex-col space-y-3">
        <h1 className="text-lg m3">일반 로그인</h1>
        <form onSubmit={onSubmit}>
          <div
            onChange={(e: inputType) =>
              change({
                changeItem: user_state,
                setChangeItem: setUser_state,
                e,
              })
            }
          >
            <p>
              number
              <input name="number"></input>
            </p>
            <p>
              password
              <input name="password"></input>
            </p>
          </div>
          <button type="submit">로그인</button>
        </form>
        <button
          className="flex items-center justify-center h-[56px] bg-[#FAE84C] w-full rounded-3xl"
          onClick={KakaoLoginApi}
        >
          <div className="mr-2 text-2xl">
            <RiKakaoTalkFill />
          </div>
          <span className="text-base font-semibold">카카오톡으로 계속하기</span>
        </button>
      </article>

      <article className="flex flex-col space-y-3">
        <h1 className="text-lg m3">판매자 로그인</h1>
        <form onSubmit={onSubmit2}>
          <div
            onChange={(e: inputType) =>
              change({
                changeItem: seller_state,
                setChangeItem: setSeller_state,
                e,
              })
            }
          >
            <p>
              number
              <input name="username"></input>
            </p>
            <p>
              password
              <input name="password"></input>
            </p>
          </div>
          <button type="submit">로그인</button>
        </form>
      </article>
    </section>
  );
}
