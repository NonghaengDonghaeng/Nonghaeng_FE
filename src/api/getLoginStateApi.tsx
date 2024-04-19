import axios from "axios";

type JwtPropsType = {
  setLoginState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const verityJwtApi = async ({ setLoginState }: JwtPropsType) => {
  try {
    let token = localStorage.getItem("jwt");
    const res = await axios.get("https://nonghaeng.duckdns.org/test/jwt", {
      headers: { Authorization: token },
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
