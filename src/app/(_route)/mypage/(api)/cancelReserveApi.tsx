import { getErrorMessage } from "@/common/utils/getErrorMessage";
import axios from "axios";

type PropsType = {
  type: string;
  id: number;
};

export const cancelReserveApi = async ({ type, id }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `${type}/cancel/${id}`,
      {
        headers: { Authorization: token },
      }
    );
    return res;
  } catch (e) {
    getErrorMessage(e);
  }
};
