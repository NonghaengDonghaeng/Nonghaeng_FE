import axios from "axios";

export const getUserDataApi = async () => {
  try {
    console.log("예약정보 api");
    let token = localStorage.getItem("jwt");
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `reservations/reservation-person-info`,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};
