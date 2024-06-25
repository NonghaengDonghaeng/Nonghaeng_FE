"use client";
import { useEffect, useState } from "react";
import { useChange } from "@/hooks/useChange";
import { kakaoLoginApi } from "@/app/(_route)/acount/(api)/loginApi";
import { formType, inputType } from "@/common/types/eventType";
import { RiKakaoTalkFill } from "react-icons/ri";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { loginApi } from "@/app/(_route)/acount/(api)/loginApi";
import styles from "./page.module.css";
import Link from "next/link";
import { userType } from "../../(types)/userType";

export default function Page() {
  const change = useChange();
  const params = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<userType>({
    username: "",
    password: "",
  });

  function submitLogin(e: formType) {
    e.preventDefault();
    loginApi({ user });
  }

  // 해야할것: url을 통한 jwt 통신x -> header로 받을 수 있는 방법 찾기
  useEffect(() => {
    let token = params.get("accessToken");
    if (token) {
      // 기존 게스트 jwt 삭제
      localStorage.removeItem("jwt");
      console.log("토큰 확인");
      // 로그인후 return받은 jwt추가
      localStorage.setItem("jwt", "Bearer " + token);
      router.push("/");
    }
  }, [pathName]);

  return (
    <section className={styles.login}>
      <article
        onChange={(e: inputType) => {
          change({ changeItem: user, setChangeItem: setUser, e });
        }}
      >
        <form onSubmit={submitLogin}>
          <div>
            <label>아이디</label>
            <input name="username" placeholder="이름을 입력하세요."></input>
          </div>
          <div>
            <label>비밀번호</label>
            <input name="password" placeholder="비밀번호를 입력하세요"></input>
          </div>
          <button type="submit">로그인</button>
        </form>
        <button onClick={kakaoLoginApi}>
          <RiKakaoTalkFill />
          <span>카카오톡으로 계속하기</span>
        </button>
        <p>
          <Link href="/acount/join">회원가입</Link>
          {"  /  "}
          <Link href="/acount/findpass">비밀번호찾기</Link>
        </p>
      </article>
    </section>
  );
}
