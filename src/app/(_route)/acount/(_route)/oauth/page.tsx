"use client";
import store from "@/redux/loginStateStore";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

export default function Page() {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
    getTokenApi(code);
  }, []);

  const getTokenApi = async (code: any) => {
    try {
      // 기존 게스트로 로그인된 jwt remove
      localStorage.removeItem("jwt");
      console.log(code);
      const response = await axios.get(
        `https://nonghaeng.duckdns.org/pages/mypage/oauth?code=${code}`
      );

      let token = response.headers["authorization"];
      store.dispatch({ type: "user" });
      // 새로 로그인하고 return받은 jwt set
      localStorage.setItem("jwt", "Bearer " + token);
      if (response.status == 200) {
        console.log("로그인 성공");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <RecoilRoot>
      <div className="flex items-center justify-center h-screen">
        <a>로그인중입니다</a>
      </div>
    </RecoilRoot>
  );
}
