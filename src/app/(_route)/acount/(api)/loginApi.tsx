import axios from "axios";
import store from "@/redux/loginStateStore";
import { userType } from "../(types)/userType";
import { sellerType } from "../(types)/sellerType";

export const verifyJwtApi = async () => {
  let token = localStorage.getItem("jwt");
  if (token) {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_URL_2 + "valid", {
        headers: { Authorization: token },
      });
      if (res.status == 200) {
        console.log("검증완료, 로그인 유지");
        store.dispatch({ type: "LOGIN" });
      }
    } catch (err) {
      alert("세션이 만료되었습니다.");
      store.dispatch({ type: "LOGOUT" });
      localStorage.removeItem("jwt");
      window.location.replace("/");
    }
  }
};

// 소비자로그인
type userPropsType = { user: userType };

export const loginApi = async ({ user }: userPropsType) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL_2 + "login",
      user
    );
    console.log(response.headers.authorization);
    let token = response.headers["authorization"];
    localStorage.setItem("jwt", "Bearer " + token);
  } catch (error) {
    console.log(error);
  }
};

// 판매자로그인
type sellerPropsType = { seller: sellerType };

export const sellerLoginApi = async ({ seller }: sellerPropsType) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL_2 + "seller-login",
      seller
    );
    let token = response.headers["authorization"];
    console.log(response.headers.authorization);
    localStorage.setItem("jwt", "Bearer " + token);
  } catch (error) {
    console.log(error);
  }
};

// 카카오로그인
export const kakaoLoginApi = async () => {
  window.location.href =
    process.env.NEXT_PUBLIC_API_URL_2 + "oauth2/authorization/kakao";
};