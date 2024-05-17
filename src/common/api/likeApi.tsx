import store from "@/redux/loginStateStore";
import axios from "axios";
import { getErrorMessage } from "../utils/getErrorData";

type PropsType = {
  type: string;
  id: number;
};

export const likeApi = async ({ type, id }: PropsType) => {
  if (store.getState()) {
    try {
      let token = localStorage.getItem("jwt");
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + `likes/${type}/${id}`,
        { headers: { Authorization: token } }
      );
      alert(res.data);
    } catch (e) {
      const message = getErrorMessage(e);
      console.log(message);
    }
  } else alert("로그인후 이용가능합니다.");
};
