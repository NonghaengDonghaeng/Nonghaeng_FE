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
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `rooms?page=${Number(pageIndex) - 1}&keyword=${searchWord}`,
      { headers: { Authorization: token } }
    );
    console.log("숙박리스트 api res", res);
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    alert(message);
  }
};
