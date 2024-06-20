import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

type PropsType = {
  lodgId: number;
};

export const getLodgDetailApi = async ({ lodgId }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `rooms/middle-page/${lodgId}`,
      { headers: { Authorization: token } }
    );
    console.log("숙박중간 api res", res);
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    alert(message);
  }
};
