import axios from "axios";
import { useRouter } from "next/router";
import store from "@/redux/loginStateStore";

export const VerifyJwtApi = async () => {
  const router = useRouter();
  let token = localStorage.getItem("jwt");
  if (token) {
    try {
      const res = await axios.get("https://nonghaeng.duckdns.org/valid", {
        headers: { Authorization: token },
      });
      if (res.data.valid == true) {
        console.log("검증완료, 로그인 유지");
        store.dispatch({ type: "LOGIN" });
      } else {
        alert("세션이 만료되었습니다.");
        store.dispatch({ type: "LOGOUT" });
        localStorage.removeItem("jwt");
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  }
};
