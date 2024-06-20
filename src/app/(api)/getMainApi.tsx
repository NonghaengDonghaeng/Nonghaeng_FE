import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

const getMainApi = async () => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "trips/best",
      {
        headers: { Authorization: token },
      }
    );
    console.log("홈 api res", res);
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    alert(message);
  }
};

export default getMainApi;
