import { userType } from "../(types)/userType";
import { sellerType } from "../(types)/sellerType";
import axios from "axios";

type userPropsType = { user: userType };

export const joinUserApi = async ({ user }: userPropsType) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "join",
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
      process.env.NEXT_PUBLIC_API_URL + "seller-join",
      seller
    );
    console.log(response);
    // router.push("/acount/login");
  } catch (error) {
    console.log(error);
  }
};
