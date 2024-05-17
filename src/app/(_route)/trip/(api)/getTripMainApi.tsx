import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

const getTripMainApi = async () => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "trips", {
      headers: { Authorization: token },
    });
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    console.log(message);
  }
};

export default getTripMainApi;
