import axios from "axios";

type PropsType = {
  pageIndex: number;
  searchWord: string | undefined;
};

export const getExpListApi = async ({ pageIndex, searchWord }: PropsType) => {
  console.log("체험 리스트 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `experiences?page=${pageIndex - 1}&keyword=${searchWord}`,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
