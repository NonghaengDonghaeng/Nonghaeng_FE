import axios from "axios";
import store from "@/redux/loginStateStore";

export const verityJwtApi = async () => {
  let token = localStorage.getItem("jwt");
  if (token) {
    try {
      const res = await axios.get("https://nonghaeng.duckdns.org/test/jwt", {
        headers: { Authorization: token },
      });
      store.dispatch({ type: "LOGIN" });
    } catch (err) {
      alert("세션이 만료되었습니다.");
      store.dispatch({ type: "LOGOUT" });
      localStorage.removeItem("jwt");
    }
  }
};
