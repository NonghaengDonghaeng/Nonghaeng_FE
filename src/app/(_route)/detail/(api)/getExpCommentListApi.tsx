import { getErrorMessage } from "@/common/utils/getErrorMessage";
import axios from "axios";

type PropsType = {
  expId: number;
};

export const getExpCommentList = async ({ expId }: PropsType) => {
  console.log("체험리뷰 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `reviews/experience/${expId}`,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    getErrorMessage(e);
  }
};
