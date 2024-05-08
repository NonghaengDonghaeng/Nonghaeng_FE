import axios from "axios";

type PropsType = {
  expId: number;
};

export const getExpCommentList = async ({ expId }: PropsType) => {
  console.log("체험리뷰 api");
  try {
    const res = axios.get(
      process.env.NEXT_PUBLIC_API_URL + `reviews/experience/${expId}`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
