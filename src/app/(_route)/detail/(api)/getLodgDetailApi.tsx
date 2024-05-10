import axios from "axios";

type PropsType = {
  lodgId: number;
};

export const getLodgDetailApi = async ({ lodgId }: PropsType) => {
  console.log("숙박중간 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `rooms/list/${lodgId}`,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
