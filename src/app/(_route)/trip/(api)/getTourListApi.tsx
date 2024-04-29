import { setTourListDataType } from "@/common/types/tourListDataType";
import axios from "axios";

type TourPropsType = {
  pageIndex: number | undefined;
  searchWord: string | undefined;
  setResData: setTourListDataType | any;
};

export const getTourListApi = async ({
  pageIndex,
  searchWord,
  setResData,
}: TourPropsType) => {
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
    setResData(res.data);
  } catch (err) {
    console.log(err);
  }
};
