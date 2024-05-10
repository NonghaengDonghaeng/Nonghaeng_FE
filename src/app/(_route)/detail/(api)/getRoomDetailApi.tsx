import axios from "axios";

type PropsType = {
  roomId: number;
};

export const getRoomDetailApi = async ({ roomId }: PropsType) => {
  console.log("숙박상세 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `rooms/${roomId}`,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};
