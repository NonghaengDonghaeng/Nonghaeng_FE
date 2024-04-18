"use client";
import { useState } from "react";
import { useChange } from "@/hooks/useChange";
import styles from "./page.module.css";
import { regionMap } from "name/name";
import { formType, inputType } from "@/types/eventType";
import { sellerType } from "@/types/userType";
import { joinSellerApi } from "@/api/joinApi";

export default function Page() {
  const change = useChange();
  const [seller, setSeller] = useState<sellerType>({
    phone_number: "",
    business_number: "",
    username: "",
    password: "",
    check_password: "",
    name: "",
    email: "",
    address: "",
    call_number: "",
    area_code: "",
    bank_code: "",
    bank_account: "",
    bank_account_name: "",
  });

  function onSubmitSeller(e: formType) {
    e.preventDefault();
    joinSellerApi({ seller });
  }

  const regionList = regionMap.map((item, index) => (
    <option value={item.code} key={index}>
      {item.title}
    </option>
  ));
  return (
    <section className={styles.join_seller}>
      <h1>판매자 회원가입</h1>
      <hr />
      <form onSubmit={onSubmitSeller}>
        <div
          onChange={(e: inputType) =>
            change({
              changeItem: seller,
              setChangeItem: setSeller,
              e,
            })
          }
        >
          <span># 회원정보</span>
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
              name="checkPassword"
              placeholder="비밀번호를 다시 입력하세요."
            />
          </div>
          <span># 마을정보</span>
          <div>
            <label>전화번호</label>
            <input name="phone_number" placeholder="전화번호를 입력하세요." />
          </div>
          <div>
            <label>사업자번호</label>
            <input
              name="business_number"
              placeholder="사업자번호를 입력하세요."
            />
          </div>
          <div>
            <label>주소</label>
            <input name="address" placeholder="주소를 입력하세요." />
          </div>
          <div>
            <label>문의번호</label>
            <input
              name="call_number"
              placeholder="문의 전화번호를 입력해주세요."
            />
          </div>
        </div>
        <button type="submit">회원가입</button>
      </form>
    </section>
  );
}
