import axios from "axios";

type PropsType = {
  lodgId: number | undefined;
};

export const getLodgDetailApi = async ({ lodgId }: PropsType) => {
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
