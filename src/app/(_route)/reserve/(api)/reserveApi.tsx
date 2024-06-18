import axios from "axios";
import { roomReserveInfoType } from "../(types)/roomReserveInfoType";
import { getErrorMessage } from "@/common/utils/getErrorData";
import { expReserveInfoType } from "../(types)/expReserveInfoType";

type PropsType = {
  reserveInfo: roomReserveInfoType | expReserveInfoType | undefined;
};

export const reserveApi = async ({ reserveInfo }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "reservations",
      reserveInfo,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    console.log(message);
  }
};
