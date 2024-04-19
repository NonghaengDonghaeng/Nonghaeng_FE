import axios from "axios";
import store from "@/redux/loginStateStore";

export const verityJwtApi = async () => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get("https://nonghaeng.duckdns.org/test/jwt", {
      headers: { Authorization: token },
    });
    store.dispatch({ type: "LOGIN" });
  } catch (err) {
    console.log(err);
    store.dispatch({ type: "LOGOUT" });
  }
};
