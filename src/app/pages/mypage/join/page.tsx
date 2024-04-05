"use client";
import { useEffect, useState } from "react";
import { useChange } from "@/hooks/useChange";
import { inputType } from "@/types/eventtype";
import axios from "axios";

export default function page() {
  const change = useChange();
  const [user_state, setUser_state] = useState<{}>({
    area_code: "",
    eamil: "",
    name: "",
    password: "",
    check_password: "",
    number: "",
  });

  const onSubmit = () => {
    const response = axios
      .post("http://localhost:8080/join", user_state)
      .then((response) => console.log(response));
  };

  return (
    <section>
      <h1>회원가입</h1>
      <article>
        <h1>user회원가입</h1>
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
              area_code<input name="area_code"></input>
            </p>
            <p>
              email<input name="eamil"></input>
            </p>
            <p>
              name<input name="name"></input>
            </p>
            <p>
              password<input name="password"></input>
            </p>
            <p>
              check_password<input name="check_password"></input>
            </p>
            <p>
              number<input name="number"></input>
            </p>
          </div>
          <button type="submit">회원가입</button>
        </form>
      </article>
      <article></article>
    </section>
  );
}
