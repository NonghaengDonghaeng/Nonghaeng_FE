import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

type PropsType = {
  id: number;
  type: string;
};

export const getReviewtListApi = async ({ id, type }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `reviews/${type}/${id}`,
      { headers: { Authorization: token } }
    );
    console.log(`${type}리뷰 api res`, res);
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    alert(message);
  }
};
