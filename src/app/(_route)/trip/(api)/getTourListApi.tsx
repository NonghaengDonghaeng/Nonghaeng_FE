import { getErrorMessage } from "@/common/utils/getErrorMessage";
import axios from "axios";

type TourPropsType = {
  pageIndex: number | undefined;
  searchWord: string | undefined;
};

export const getTourListApi = async ({
  pageIndex,
  searchWord,
}: TourPropsType) => {
  console.log("관광 리스트 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `tours?page=${Number(pageIndex) - 1}&keyword=${searchWord}`,
      {
        headers: { Authorization: token },
      }
    );
    return res;
  } catch (e) {
    getErrorMessage(e);
  }
};
