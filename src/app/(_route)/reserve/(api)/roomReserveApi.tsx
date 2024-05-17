import axios, { AxiosError } from "axios";
import { roomReserveInfoType } from "../(types)/roomReserveInfoType";
import { getErrorMessage } from "@/common/utils/getErrorData";

type PropsType = {
  roomReserveInfo: roomReserveInfoType;
};

export const roomReserveApi = async ({ roomReserveInfo }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "reservations/room",
      roomReserveInfo,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    console.log(message);
  }
};
