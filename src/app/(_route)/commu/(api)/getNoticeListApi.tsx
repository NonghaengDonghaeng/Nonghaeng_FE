import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

const getNoticeListApi = async () => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "notices", {
      headers: { Authorization: token },
    });
    console.log("공지리스트 api res", res);
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    alert(message);
  }
};

export default getNoticeListApi;
