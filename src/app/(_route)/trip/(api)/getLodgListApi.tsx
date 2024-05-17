import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

type LodgPropsType = {
  pageIndex: number | undefined;
  searchWord: string | undefined;
};

export const getLodgListApi = async ({
  pageIndex,
  searchWord,
}: LodgPropsType) => {
  try {
    console.log("숙박 리스트 api");
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `rooms?page=${Number(pageIndex) - 1}&keyword=${searchWord}`,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    console.log(message);
  }
};
