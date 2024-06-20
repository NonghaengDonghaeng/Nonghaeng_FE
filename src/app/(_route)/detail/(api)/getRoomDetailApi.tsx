import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

type PropsType = {
  roomId: number;
};

export const getRoomDetailApi = async ({ roomId }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `rooms/${roomId}`,
      { headers: { Authorization: token } }
    );
    console.log("숙박상세 api res", res);
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    alert(message);
  }
};
