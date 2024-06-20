import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

type PropsType = {
  pageIndex: number | undefined;
  searchWord: string | undefined;
};

export const getExpListApi = async ({ pageIndex, searchWord }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `experiences?page=${Number(pageIndex) - 1}&keyword=${searchWord}`,
      { headers: { Authorization: token } }
    );
    console.log("체험리스트 api res", res);
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    alert(message);
  }
};
