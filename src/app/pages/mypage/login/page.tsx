"use client";
import { useState } from "react";
import { useChange } from "@/hooks/useChange";
import { formType, inputType } from "@/types/eventtype";
import axios from "axios";

export default function page() {
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

  const loginApi = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
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
