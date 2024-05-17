import axios from "axios";
import { expReserveInfoType } from "../(types)/expReserveInfoType";
import { getErrorMessage } from "@/common/utils/getErrorData";

type PropsType = {
  expReserveInfo: expReserveInfoType;
};

export const expReserveApi = async ({ expReserveInfo }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "reservations/experience",
      expReserveInfo,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    console.log(message);
  }
};
