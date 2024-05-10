import axios from "axios";

type PropsType = {
  type: string;
  id: number;
};

export const likeApi = async ({ type, id }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `likes/${type}/${id}`,
      { headers: { Authorization: token } }
    );
    alert(res.data);
  } catch (e) {
    console.log(e);
  }
};
