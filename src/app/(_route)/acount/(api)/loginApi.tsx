import axios from "axios";
import store from "@/redux/loginStateStore";
import { userType } from "../(types)/userType";
import { sellerType } from "../(types)/sellerType";
import { getErrorMessage } from "@/common/utils/getErrorData";

export const verifyJwtApi = async () => {
  let token = localStorage.getItem("jwt");
  // if (token) { 임시로 로그인하지 않은 유저 막아놓음
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "valid", {
      headers: { Authorization: token },
    });
    return res;
  } catch (err) {
    alert("세션이 만료되었습니다.");
    localStorage.removeItem("jwt");
    // window.location.replace("/");
    window.location.replace("/");
  }
  // }
};

// 소비자로그인
type userPropsType = { user: userType };

export const loginApi = async ({ user }: userPropsType) => {
  try {
    await axios
      .post(process.env.NEXT_PUBLIC_API_URL + "login", user)
      .then((res) => {
        if (res?.status == 200) {
          alert(res.data);
          const jwtToken = res.headers.authorization;
          localStorage.setItem("jwt", "Bearer " + jwtToken);
          window.location.replace("/");
        }
      });
  } catch (e) {
    const message = getErrorMessage(e);
    alert(message);
  }
};

// 판매자로그인
// type sellerPropsType = { seller: sellerType };
//
// export const sellerLoginApi = async ({ seller }: sellerPropsType) => {
//   try {
//     const response = await axios.post(
//       process.env.NEXT_PUBLIC_API_URL + "login",
//       seller
//     );
//     let token = response.headers["authorization"];
//     console.log(response.headers.authorization);
//     localStorage.setItem("jwt", "Bearer " + token);
//   } catch (e) {
//     const message = getErrorMessage(e);
//     console.log(message);
//   }
// };

// 카카오로그인
export const kakaoLoginApi = async () => {
  window.location.replace(
    process.env.NEXT_PUBLIC_API_URL + "oauth2/authorization/kakao"
  );
};
