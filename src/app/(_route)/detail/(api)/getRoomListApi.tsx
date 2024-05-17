import { getErrorMessage } from "@/common/utils/getErrorMessage";
import axios from "axios";

type PropsType = {
  lodgId: number;
  checkIn: string | null;
  checkOut: string | null;
  // personCount: number;
  roomCount: number;
};

export const getRoomListApi = async ({
  lodgId,
  checkIn,
  checkOut,
  // personCount,
  roomCount,
}: PropsType) => {
  console.log("방 리스트 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL +
        `rooms/list/${lodgId}?start_date=${checkIn}&end_date=${checkOut}&num=${roomCount}`,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    getErrorMessage(e);
  }
};
