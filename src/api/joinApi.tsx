import { sellerType, userType } from "@/types/userType";
import axios from "axios";

type userPropsType = { user: userType };

export const joinUserApi = async ({ user }: userPropsType) => {
  try {
    const response = await axios.post(
      "https://nonghaeng.duckdns.org/join",
      user
    );
    console.log(response);
    // router.push("/acount/login");
  } catch (error) {
    console.log(error);
  }
};

type sellerPropsType = { seller: sellerType };

export const joinSellerApi = async ({ seller }: sellerPropsType) => {
  try {
    const response = await axios.post(
      "https://nonghaeng.duckdns.org/seller-join",
      seller
    );
    console.log(response);
    // router.push("/acount/login");
  } catch (error) {
    console.log(error);
  }
};