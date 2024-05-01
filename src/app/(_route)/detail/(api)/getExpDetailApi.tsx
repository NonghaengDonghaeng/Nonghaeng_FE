import axios from "axios";

type PropsType = {
  expId: number;
};

export const getExpDetailApi = async ({ expId }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.PUBLIC_NEXT_API_URL + `experiences/${expId}`,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
