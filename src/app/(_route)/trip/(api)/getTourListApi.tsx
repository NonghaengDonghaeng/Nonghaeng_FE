import { getErrorMessage } from "@/common/utils/getErrorData";
import axios from "axios";

type TourPropsType = {
  pageIndex: number | undefined;
  searchWord: string | undefined;
};

const getTourListApi = async ({ pageIndex, searchWord }: TourPropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `tours?page=${Number(pageIndex) - 1}&keyword=${searchWord}`,
      {
        headers: { Authorization: token },
      }
    );
    console.log("관광리스트 api res", res);
    return res;
  } catch (e) {
    const message = getErrorMessage(e);
    alert(message);
  }
};

export default getTourListApi;
