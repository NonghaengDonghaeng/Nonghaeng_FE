import axios from "axios";
import { setMypageDataType } from "../(types)/mypageDataType";

type mypagePorpsType = { setResData: setMypageDataType | any };

export const getMypageApi = async ({ setResData }: mypagePorpsType) => {
  console.log("마이페이지 api");
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get("https://nonghaeng.duckdns.org/my-page", {
      headers: { Authorization: token },
    });
    setResData(await res.data);
  } catch (err) {
    console.log(err);
  }
};
