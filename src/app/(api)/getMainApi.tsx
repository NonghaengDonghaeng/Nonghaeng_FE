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
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    console.log(message);
  }
};

export default getMainApi;
