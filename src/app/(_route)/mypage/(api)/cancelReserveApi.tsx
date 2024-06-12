import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

type PropsType = {
  id: number;
};

export const cancelReserveApi = async ({ id }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `reservations/cancel/${id}`,
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
