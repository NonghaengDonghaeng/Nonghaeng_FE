import { setExpListDataType } from "@/common/types/expListDataType";
import axios from "axios";

type ExpPropsType = {
  pageIndex: number | undefined;
  searchWord: string | undefined;
  setResData: setExpListDataType | any;
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
        `experiences?page=${pageIndex}&keyword=${searchWord}`,
      { headers: { Authorization: token } }
    );
    setResData(res.data);
  } catch (err) {
    console.log(err);
  }
};
