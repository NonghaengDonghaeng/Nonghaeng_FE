import { setTourListPageDataType } from "@/types/setDataType/setListPageDataType";
import axios from "axios";

type PropsType = {
  pageIndex: number | undefined;
  searchWord: string | undefined;
  setResData: setTourListPageDataType | any;
};

export const getTourListApi = async ({
  pageIndex,
  searchWord,
  setResData,
}: PropsType) => {
  console.log("관광 리스트 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `tours?page=${pageIndex}&keyword=${searchWord}`,
      {
        headers: { Authorization: token },
      }
    );
    console.log(res.data);
    setResData(res.data);
  } catch (err) {
    console.log(err);
  }
};
