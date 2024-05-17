import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

type PropsType = {
  expId: number;
};

export const getExpDetailApi = async ({ expId }: PropsType) => {
  console.log("체험 상세 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `experiences/${expId}`,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    console.log(message);
  }
};
