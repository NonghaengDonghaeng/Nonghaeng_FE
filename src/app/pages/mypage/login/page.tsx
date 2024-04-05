"use client";
import { useState } from "react";
import { useChange } from "@/hooks/useChange";
import { formType, inputType } from "@/types/eventtype";
import axios from "axios";
import { headers } from "../../../../../public/headers";

export default function page() {
  const change = useChange();

  const [user_state, setUser_state] = useState<{
    number?: string;
    password?: string;
  }>({
    number: "",
    password: "",
  });

  function onSubmit(e: formType) {
    e.preventDefault();
    login();
  }

  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        user_state
      );
      console.log(response.headers.authorization);
      let token = response.headers.authorization;
      localStorage.setItem("accessToken", `Bearer ${token}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <article>
        <h1>user로그인</h1>
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
    </section>
  );
}
