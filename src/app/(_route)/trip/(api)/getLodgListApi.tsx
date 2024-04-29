import { setLodgListDataType } from "@/types/lodgListDataType";
import axios from "axios";

type LodgPropsType = {
  pageIndex: number | undefined;
  searchWord: string | undefined;
  setResData: setLodgListDataType | any;
};

export const getLodgListApi = async ({
  pageIndex,
  searchWord,
  setResData,
}: LodgPropsType) => {
  try {
    console.log("숙박 리스트 api");
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `rooms?page=${pageIndex}&keyword=${searchWord}`,
      { headers: { Authorization: token } }
    );
    setResData(res);
  } catch (err) {
    console.log(err);
  }
};
