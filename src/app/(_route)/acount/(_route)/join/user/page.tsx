"use client";
import { useState } from "react";
import { useChange } from "@/hooks/useChange";
import styles from "./page.module.css";
import { regionMap } from "@/model/name/name";
import { formType, inputType } from "@/common/types/eventType";
import { userType } from "../../../(types)/userType";
import { joinUserApi } from "@/app/(_route)/acount/(api)/joinApi";

export default function Page() {
  const change = useChange();
  const [user, setUser] = useState<userType>({
    area_code: "",
    eamil: "",
    name: "",
    password: "",
    check_password: "",
    number: "",
  });

  function onSubmitUser(e: formType) {
    e.preventDefault();
    joinUserApi({ user });
  }

  const regionList = regionMap.map((item, index) => (
    <option value={item.code} key={index}>
      {item.title}
    </option>
  ));
  return (
    <section className={styles.join_user}>
      <h1>소비자 회원가입</h1>
      <hr />
      <form onSubmit={onSubmitUser}>
        <div
          onChange={(e: inputType) =>
            change({ changeItem: user, setChangeItem: setUser, e })
          }
        >
          <div>
            <label>이름</label>
            <input name="name" placeholder="이름을 입력하세요." />
          </div>
          <div>
            <label>지역</label>
            <select name="area_code">
              <option value="">지역을 선택하세요.</option>
              {regionList}
            </select>
          </div>
          <div>
            <label>이메일</label>
            <input name="email" placeholder="이메일을 입력하세요." />
          </div>
          <div>
            <label>비밀번호</label>
            <input name="password" placeholder="비밀번호를 입력하세요." />
          </div>
          <div>
            <label>비밀번호 확인</label>
            <input
              name="check_password"
              placeholder="비밀번호를 다시 입력하세요."
            />
          </div>
          <div>
            <label>전화번호</label>
            <input name="number" placeholder="전화번호를 입력하세요." />
          </div>
        </div>
        <button type="submit">회원가입</button>
      </form>
    </section>
  );
}
