import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

type PropsType = {
  date: string;
  id: number;
};

export const getExpRoundApi = async ({ date, id }: PropsType) => {
  try {
    console.log("체험 회차 api");
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `experiences/round-info/${id}?date=${date}`,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    console.log(message);
  }
};
