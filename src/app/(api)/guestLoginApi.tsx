import { getErrorMessage } from "@/common/utils/getErrorData";
import store from "@/redux/loginStateStore";
import axios from "axios";

const guestLoginApi = async () => {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "guest-login"
    );
    console.log("게스트 api res", res);
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    alert(message);
  }
};

export default guestLoginApi;
