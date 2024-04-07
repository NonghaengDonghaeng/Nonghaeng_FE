import axios from "axios";
import { setCookie } from "cookies-next";

type PropsType = {
  number?: string;
  password?: string;
};

export const loginApi = async (user_state: PropsType) => {
  try {
    const response = await axios.post("http://localhost:8080/login", {
      user_state,
    });
    console.log(response.headers.authorization);
    let token = response.headers["authorization"];
    setCookie("token", token);
  } catch (error) {
    console.log(error);
  }
};
