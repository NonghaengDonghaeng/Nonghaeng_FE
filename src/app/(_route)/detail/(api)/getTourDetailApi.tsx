import { getErrorMessage } from "@/common/utils/getErrorMessage";
import axios from "axios";

type PropsType = {
  tourId: number;
};

export const getTourDetailApi = async ({ tourId }: PropsType) => {
  console.log("농촌관광 상세 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `tours/${tourId}`,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    getErrorMessage(e);
  }
};
