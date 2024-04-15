import axios from "axios";

type PropsType = {
  pageIndex: number | undefined;
  searchWord: string | undefined;
};

export const getTourListApi = async ({ pageIndex, searchWord }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `tours?page=${pageIndex}&keyword=${searchWord}`,
      {
        headers: { Authorization: token },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
