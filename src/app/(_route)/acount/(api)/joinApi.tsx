import {userType} from "../(types)/userType";
import {sellerType} from "../(types)/sellerType";
import axios, {AxiosResponse} from "axios";
import {getErrorMessage} from "@/common/utils/getErrorData";

type userPropsType = { user: userType };

export const joinUserApi = async ({user}: userPropsType) => {
    try {
      const res = await axios.post(
          process.env.NEXT_PUBLIC_API_URL + "join",
          user
      );
      return res
    } catch (e) {
      const message = getErrorMessage(e);
      alert(message);
    }
};

type sellerPropsType = { seller: sellerType };

export const joinSellerApi = async ({seller}: sellerPropsType) => {
    try {
      const response = await axios.post(
          process.env.NEXT_PUBLIC_API_URL + "seller-join",
          seller
      );
      console.log(response);

    } catch (e) {
      const message = getErrorMessage(e);
      console.log(message);

    }
};
