"use client";
import { useEffect, useState } from "react";
import { useChange } from "@/hooks/useChange";
import { formType, inputType } from "@/types/eventType";
import { RiKakaoTalkFill } from "react-icons/ri";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
  const change = useChange();
  const params = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

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
        user_state
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
      <article className="flex flex-col space-y-3 w-1/2 pr-3 mr-10 mb-8">
        <div className="text-center mb-3">
          <h1 className="text-2xl font-bold mt-14 mb-10">소비자 로그인</h1>
        </div>
        <form onSubmit={onSubmit} className="w-full">
          <div className="flex flex-row items-center mb-3">
            <label
              className="mr-4 font-bold"
              style={{ minWidth: "100px", textAlign: "center" }}
            >
              전화번호
            </label>
            <input
              className="w-full h-12 border border-gray-300 rounded-xl pl-4"
              name="number"
              placeholder="전화번호"
              onChange={(e: inputType) =>
                change({
                  changeItem: user_state,
                  setChangeItem: setUser_state,
                  e,
                })
              }
            ></input>
          </div>
          <div className="flex flex-row items-center mb-3">
            <label
              className="mr-4 font-bold"
              style={{ minWidth: "100px", textAlign: "center" }}
            >
              비밀번호
            </label>
            <input
              className="w-full h-12 border border-gray-300 rounded-xl pl-4"
              name="password"
              placeholder="비밀번호"
              onChange={(e: inputType) =>
                change({
                  changeItem: user_state,
                  setChangeItem: setUser_state,
                  e,
                })
              }
            ></input>
          </div>
          <button
            type="submit"
            className="w-full bg-green text-white py-2 rounded-xl"
          >
            로그인
          </button>
        </form>
        <div className="text-gray-500 text-center mt-3">
          <p>
            계정이 없으신가요? <a href="/acount/join">회원가입</a>
          </p>
          <p>
            비밀번호를 잊으셨나요? <a href="/acount/findpass">비밀번호 찾기</a>
          </p>
        </div>
        <button
          className="flex items-center justify-center h-[50px] bg-[#FAE84C] w-full rounded-3xl"
          onClick={KakaoLoginApi}
        >
          <div className="mr-2 text-2xl">
            <RiKakaoTalkFill />
          </div>
          <span className="text-base font-semibold">카카오톡으로 계속하기</span>
        </button>
      </article>

      <article className="flex flex-col space-y-3 w-1/2 pr-3 ml-10">
        <div className="text-center mb-3">
          <h1 className="text-2xl font-bold mt-14 mb-10">판매자 로그인</h1>
        </div>
        <form onSubmit={onSubmit2} className="w-full">
          <div className="flex flex-row items-center mb-3">
            <label
              className="mr-4 font-bold"
              style={{ minWidth: "100px", textAlign: "center" }}
            >
              아이디
            </label>
            <input
              className="w-full h-12 border border-gray-300 rounded-xl pl-4"
              name="username"
              placeholder="아이디"
              onChange={(e: inputType) =>
                change({
                  changeItem: seller_state,
                  setChangeItem: setSeller_state,
                  e,
                })
              }
            ></input>
          </div>
          <div className="flex flex-row items-center mb-3">
            <label
              className="mr-4 font-bold"
              style={{ minWidth: "100px", textAlign: "center" }}
            >
              비밀번호
            </label>
            <input
              className="w-full h-12 border border-gray-300 rounded-xl pl-4"
              name="password"
              placeholder="비밀번호"
              onChange={(e: inputType) =>
                change({
                  changeItem: seller_state,
                  setChangeItem: setSeller_state,
                  e,
                })
              }
            ></input>
          </div>
          <button
            type="submit"
            className="w-full bg-green text-white py-2 rounded-xl"
          >
            로그인
          </button>
        </form>
        <div className="text-gray-500 text-center mt-3">
          <p>
            계정이 없으신가요? <a href="/acount/join">회원가입</a>
          </p>
          <p>
            비밀번호를 잊으셨나요? <a href="/acount/findpass">비밀번호 찾기</a>
          </p>
        </div>
      </article>
    </section>
  );
}
