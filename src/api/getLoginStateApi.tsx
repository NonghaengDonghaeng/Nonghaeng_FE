import axios from "axios";
import store from "@/redux/loginStateStore";

export const verityJwtApi = async () => {
  let token = localStorage.getItem("jwt");
  if (token) {
    try {
      const res = await axios.get("https://nonghaeng.duckdns.org/test/jwt", {
        headers: { Authorization: token },
      });
      console.log("검증완료, 로그인 유지");
      store.dispatch({ type: "LOGIN" });
    } catch (err) {
      console.log(err);
      alert("세션이 만료되었습니다.");
      store.dispatch({ type: "LOGOUT" });
      localStorage.removeItem("jwt");
    }
  }
};
