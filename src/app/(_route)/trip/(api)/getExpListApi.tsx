import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

type PropsType = {
  pageIndex: number | undefined;
  searchWord: string | undefined;
};

export const getExpListApi = async ({ pageIndex, searchWord }: PropsType) => {
  console.log("체험 리스트 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `experiences?page=${Number(pageIndex) - 1}&keyword=${searchWord}`,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    console.log(message);
  }
};
