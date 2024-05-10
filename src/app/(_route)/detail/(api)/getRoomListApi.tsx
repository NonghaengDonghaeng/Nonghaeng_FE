import axios from "axios";

type PropsType = {
  lodgId: number;
  checkIn: string | null;
  checkOut: string | null;
  personCount: number;
  roomCount: number;
};

export const getRoomListApi = async ({
  lodgId,
  checkIn,
  checkOut,
  personCount,
  roomCount,
}: PropsType) => {
  console.log("숙박 리스트 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `rooms/list/${lodgId}?date=${checkIn}&num=${roomCount}`,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};
