import axios from "axios";

type PropsType = {
  expReserveInfo: {
    round_id: number | undefined;
    reservation_date: string;
    num_of_participant: number;
    reservation_name: string | undefined;
    number: string | undefined;
    email: string | undefined;
    final_price: number;
  };
};

export const expReserveApi = async ({ expReserveInfo }: PropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "reservations/experience",
      expReserveInfo,
      { headers: { Authorization: token } }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};
