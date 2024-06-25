import { getErrorMessage } from "@/common/utils/getErrorData";
import store from "@/redux/loginStateStore";
import axios from "axios";

const guestLoginApi = async () => {
  const jwt = store.getState();
  try {
    if (!jwt) {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "guest-login"
      );
      console.log("게스트 api res", res);
      return res;
    } else {
      console.log("이미 로그인중");
    }
  } catch (e) {
    const message = getErrorMessage(e);
    alert(message);
  }
};

export default guestLoginApi;
