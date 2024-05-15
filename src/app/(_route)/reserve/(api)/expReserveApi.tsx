import axios from "axios";
import { expReserveInfoType } from "../(types)/expReserveInfoType";

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
    console.log(e);
  }
};
