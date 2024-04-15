import {
  setExpListPageDataType,
  setTourListPageDataType,
} from "@/types/setDataType/setListPageDataType";
import axios from "axios";

type TourPropsType = {
  pageIndex: number | undefined;
  searchWord: string | undefined;
  setResData: setTourListPageDataType | any;
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

type ExpPropsType = {
  pageIndex: number | undefined;
  searchWord: string | undefined;
  setResData: setExpListPageDataType | any;
};

export const getExpListApi = async ({
  pageIndex,
  searchWord,
  setResData,
}: ExpPropsType) => {
  console.log("체험 리스트 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `experience?page=${pageIndex}&keyword=${searchWord}`,
      { headers: { Authorization: token } }
    );
    setResData(res.data);
  } catch (err) {
    console.log(err);
  }
};
