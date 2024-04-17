"use client";
import { useEffect, useState } from "react";
import { useChange } from "@/hooks/useChange";
import { formType, inputType, selectType } from "@/types/eventType";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
  const change = useChange();
  const router = useRouter();
  const [user_state, setUser_state] = useState<{
    area_code?: string;
    eamil?: string;
    name?: string;
    password?: string;
    check_password?: string;
    number?: string;
  }>({
    area_code: "",
    eamil: "",
    name: "",
    password: "",
    check_password: "",
    number: "",
  });

  const [seller_state, setSeller_state] = useState<{
    phone_number?: string;
    business_number?: string;
    username?: string;
    password?: string;
    check_password?: string;
    name?: string;
    email?: string;
    address?: string;
    call_number?: string;
    area_code?: string;
    bank_code?: string;
    bank_account?: string;
    bank_account_name?: string;
  }>({
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

  useEffect(() => {
    console.log(user_state);
  }, [user_state]);

  function onSubmitUser(e: formType) {
    e.preventDefault();
    joinUser();
  }

  function onSubmitSeller(e: formType) {
    e.preventDefault();
    joinSeller();
  }
  const joinSeller = async () => {
    try {
      const response = await axios.post(
        "https://nonghaeng.duckdns.org/seller-join",
        user_state
      );
      console.log(response);
      router.push("/acount/login");
    } catch (error) {
      console.log(error);
    }
  };

  const joinUser = async () => {
    try {
      const response = await axios.post(
        "https://nonghaeng.duckdns.org/join",
        user_state
      );
      console.log(response);
      router.push("/acount/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-row m3 ">
      <article className="flex flex-col space-y-3 w-1/2 pr-3 mr-10">
        <div className="text-center mb-3">
          <h2 className="text-2xl font-bold mt-14 mb-10">소비자 회원가입</h2>
        </div>
        <form onSubmit={onSubmitUser} className="w-full">
          <div className="flex flex-col md:flex-row md:space-x-4 mb-3">
            <div className="flex flex-col mb-3 md:w-1/2">
              <label className="mb-1 font-bold">이름</label>
              <input
                className="w-full h-12 border border-gray-300 rounded-xl pl-4"
                name="name"
                placeholder="이름을 입력하세요"
                onChange={(e: inputType) =>
                  change({
                    changeItem: user_state,
                    setChangeItem: setUser_state,
                    e,
                  })
                }
              />
            </div>
            <div className="flex flex-col mb-3 md:w-1/2">
              <label className="mb-1 font-bold">지역</label>
              <select
                className="w-full h-12 border border-gray-300 rounded-xl pl-4"
                name="area_code"
                onChange={(e: selectType) =>
                  change({
                    changeItem: user_state,
                    setChangeItem: setUser_state,
                    e,
                  })
                }
              >
                <option value="">지역을 선택하세요</option>
                <option value="02">서울</option>
                <option value="031">경기</option>
                <option value="032">인천</option>
                <option value="033">강원</option>
                <option value="041">충남</option>
                <option value="042">대전</option>
                <option value="043">충북</option>
                <option value="044">세종</option>
                <option value="051">부산</option>
                <option value="052">울산</option>
                <option value="053">대구</option>
                <option value="054">경북</option>
                <option value="055">경남</option>
                <option value="061">전남</option>
                <option value="062">광주</option>
                <option value="063">전북</option>
                <option value="064">제주</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-bold">이메일</label>
            <input
              className="w-full h-12 border border-gray-300 rounded-xl pl-4"
              name="email"
              placeholder="이메일를 입력하세요"
              type="email"
              onChange={(e: inputType) =>
                change({
                  changeItem: user_state,
                  setChangeItem: setUser_state,
                  e,
                })
              }
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-bold">전화번호</label>
            <input
              className="w-full h-12 border border-gray-300 rounded-xl pl-4"
              name="number"
              placeholder="전화번호를 입력하세요"
              onChange={(e: inputType) =>
                change({
                  changeItem: user_state,
                  setChangeItem: setUser_state,
                  e,
                })
              }
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-1 font-bold">비밀번호</label>
            <input
              className="w-full h-12 border border-gray-300 rounded-xl pl-4"
              name="password"
              placeholder="비밀번호를 입력하세요"
              type="password"
              onChange={(e: inputType) =>
                change({
                  changeItem: user_state,
                  setChangeItem: setUser_state,
                  e,
                })
              }
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 font-bold">비밀번호 확인</label>
            <input
              className="w-full h-12 border border-gray-300 rounded-xl pl-4"
              name="check_password"
              placeholder="비밀번호를 다시 입력하세요"
              type="password"
              onChange={(e: inputType) =>
                change({
                  changeItem: user_state,
                  setChangeItem: setUser_state,
                  e,
                })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green text-white py-2 rounded-xl mt-3 mb-3"
          >
            회원가입
          </button>
        </form>
      </article>
      <article className="flex flex-col space-y-3 w-1/2 pr-3 ml-10">
        <div className="text-center mb-3">
          <h2 className="text-2xl font-bold  mt-14 mb-10">판매자 회원가입</h2>
        </div>
        <form onSubmit={onSubmitSeller} className="w-full">
          <div className="mb-10">
            <h1 className="text-xl mb-4 font-bold text-gray-500"># 회원정보</h1>
            <div className="flex flex-col md:flex-row md:space-x-4 mb-3">
              <div className="flex flex-col mb-3 md:w-1/2">
                <label className="mb-1 font-bold">이름</label>
                <input
                  className="w-full h-12 border border-gray-300 rounded-xl pl-4"
                  name="password"
                  placeholder="이름를 입력하세요"
                  type="name"
                  onChange={(e: inputType) =>
                    change({
                      changeItem: seller_state,
                      setChangeItem: setSeller_state,
                      e,
                    })
                  }
                />
              </div>
              <div className="flex flex-col mb-3 md:w-1/2">
                <label className="mb-1 font-bold">지역</label>
                <select
                  className="w-full h-12 border border-gray-300 rounded-xl pl-4"
                  name="area_code"
                  onChange={(e: selectType) =>
                    change({
                      changeItem: user_state,
                      setChangeItem: setUser_state,
                      e,
                    })
                  }
                >
                  <option value="">지역을 선택하세요</option>
                  <option value="02">서울</option>
                  <option value="031">경기</option>
                  <option value="032">인천</option>
                  <option value="033">강원</option>
                  <option value="041">충남</option>
                  <option value="042">대전</option>
                  <option value="043">충북</option>
                  <option value="044">세종</option>
                  <option value="051">부산</option>
                  <option value="052">울산</option>
                  <option value="053">대구</option>
                  <option value="054">경북</option>
                  <option value="055">경남</option>
                  <option value="061">전남</option>
                  <option value="062">광주</option>
                  <option value="063">전북</option>
                  <option value="064">제주</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row items-center mb-3">
              <label
                className="mb-1 font-bold"
                style={{ minWidth: "100px", textAlign: "center" }}
              >
                아이디
              </label>
              <input
                className="w-full h-12 border border-gray-300 rounded-xl pl-4"
                name="username"
                placeholder="아이디를 입력해주세요."
                onChange={(e: inputType) =>
                  change({
                    changeItem: seller_state,
                    setChangeItem: setSeller_state,
                    e,
                  })
                }
              />
            </div>
            <div className="flex flex-row items-center mb-3">
              <label
                className="mb-1 font-bold"
                style={{ minWidth: "100px", textAlign: "center" }}
              >
                이메일
              </label>
              <input
                className="w-full h-12 border border-gray-300 rounded-xl pl-4"
                name="email"
                placeholder="이메일을 입력해주세요."
                type="email"
                onChange={(e: inputType) =>
                  change({
                    changeItem: seller_state,
                    setChangeItem: setSeller_state,
                    e,
                  })
                }
              />
            </div>
            <div className="flex flex-row items-center mb-3">
              <label
                className="mb-1 font-bold"
                style={{ minWidth: "100px", textAlign: "center" }}
              >
                비밀번호
              </label>
              <input
                className="w-full h-12 border border-gray-300 rounded-xl pl-4"
                name="password"
                placeholder="비밀번호를 입력해주세요."
                type="password"
                onChange={(e: inputType) =>
                  change({
                    changeItem: seller_state,
                    setChangeItem: setSeller_state,
                    e,
                  })
                }
              />
            </div>
            <div className="flex flex-row items-center mb-3">
              <label
                className="mb-1 font-bold"
                style={{ minWidth: "100px", textAlign: "center" }}
              >
                비밀번호 확인
              </label>
              <input
                className="w-full h-12 border border-gray-300 rounded-xl pl-4"
                name="check_password"
                placeholder="비밀번호를 다시 입력해주세요."
                type="password"
                onChange={(e: inputType) =>
                  change({
                    changeItem: seller_state,
                    setChangeItem: setSeller_state,
                    e,
                  })
                }
              />
            </div>
          </div>
          <h1 className="text-xl mb-4 font-bold text-gray-500">
            # 마을 정보 입력
          </h1>

          <div className="flex flex-row items-center mb-3">
            <label
              className="mb-1 font-bold"
              style={{ minWidth: "100px", textAlign: "center" }}
            >
              전화번호
            </label>
            <input
              className="w-full h-12 border border-gray-300 rounded-xl pl-4"
              name="phone_number"
              placeholder="전화번호를 입력해주세요"
              onChange={(e: inputType) =>
                change({
                  changeItem: seller_state,
                  setChangeItem: setSeller_state,
                  e,
                })
              }
            />
          </div>
          <div className="flex flex-row items-center mb-3">
            <label
              className="mb-1 font-bold"
              style={{ minWidth: "100px", textAlign: "center" }}
            >
              사업자번호
            </label>
            <input
              className="w-full h-12 border border-gray-300 rounded-xl pl-4"
              name="business_number"
              placeholder="사업자번호를 입력해주세요."
              onChange={(e: inputType) =>
                change({
                  changeItem: seller_state,
                  setChangeItem: setSeller_state,
                  e,
                })
              }
            />
          </div>

          <div className="flex flex-row items-center mb-3">
            <label
              className="mb-1 font-bold"
              style={{ minWidth: "100px", textAlign: "center" }}
            >
              주소
            </label>
            <input
              className="w-full h-12 border border-gray-300 rounded-xl pl-4"
              name="address"
              placeholder="주소를 입력해주세요"
              onChange={(e: inputType) =>
                change({
                  changeItem: seller_state,
                  setChangeItem: setSeller_state,
                  e,
                })
              }
            />
          </div>
          <div className="flex flex-row items-center mb-3">
            <label
              className="mb-1 font-bold"
              style={{ minWidth: "100px", textAlign: "center" }}
            >
              문의번호
            </label>
            <input
              className="w-full h-12 border border-gray-300 rounded-xl pl-4"
              name="call_number"
              placeholder="문의 전화번호를 입력해주세요"
              onChange={(e: inputType) =>
                change({
                  changeItem: seller_state,
                  setChangeItem: setSeller_state,
                  e,
                })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green text-white py-2 rounded-xl mt-3 mb-3"
          >
            회원가입
          </button>
        </form>
      </article>
    </section>
  );
}
