import axios from "axios";
import { getErrorMessage } from "@/common/utils/getErrorData";

type PropsType = {
  id: string;
};

export const checkReserveApi = async ({ id }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.delete(
      process.env.NEXT_PUBLIC_API_URL + `reservations/${id}`,
      { headers: { Authorization: token } }
    );
    console.log(res);
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    console.log(message);
  }
};
