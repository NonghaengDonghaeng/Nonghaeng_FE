import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

type PropsType = {
  reveiwItem: { reservation_id?: number; title?: string; content?: string };
};

const editReviewApi = async ({ reveiwItem }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "reviews",
      reveiwItem,
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

export default editReviewApi;
