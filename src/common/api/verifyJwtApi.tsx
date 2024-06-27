import axios from "axios";

const verifyJwtApi = async () => {
  let token = localStorage.getItem("jwt");
  // if (token) { 임시로 로그인하지 않은 유저 막아놓음
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "valid", {
      headers: { Authorization: token },
    });
    return res;
  } catch (err) {
    alert("세션이 만료되었습니다.");
    localStorage.removeItem("jwt");
    window.location.replace("/");
  }
  // }
};

export default verifyJwtApi;
