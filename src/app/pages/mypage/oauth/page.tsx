"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TripLayout from "../layout";
import { RecoilRoot } from "recoil";

export default function Page() {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
    getTokenApi(code);
  }, []);

  const getTokenApi = async (code: any) => {
    try {
      console.log(code);
      const response = await axios.get(
        `http://localhost:8080/login/pages/mypage/oauth?code=${code}`
      );

      let token = response.headers["authorization"];
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
