import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

type PropsType = {
  expId: number;
};

export const getExpDetailApi = async ({ expId }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `experiences/${expId}`,
      { headers: { Authorization: token } }
    );
    console.log("체험상세 api res", res);
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    alert(message);
  }
};
