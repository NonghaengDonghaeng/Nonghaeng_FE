import axios from "axios";

export const getMypageApi = async () => {
  console.log("마이페이지 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "my-page", {
      headers: { Authorization: token },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
