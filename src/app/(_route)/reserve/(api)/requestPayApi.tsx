import * as PortOne from "@portone/browser-sdk/v2";
import axios from "axios";
import { PaymentDtoType } from "../(types)/PaymentDtoType";

type PropsType = {
  paymentDto: PaymentDtoType;
};

async function requestPay({ paymentDto }: PropsType) {
  try {
    console.log("백에서 받은것", paymentDto);
    let token = localStorage.getItem("jwt");
    const response = await PortOne.requestPayment({
      storeId: "store-4aae6d89-e267-4dc3-a893-c2b43a91d19b",
      channelKey: "channel-key-81e835a3-eb9e-48eb-823d-a0c9aca1f518",
      paymentId: paymentDto.payment_uid,
      orderName: paymentDto.buyer_name,
      customer: {
        fullName: paymentDto.buyer_name,
        email: paymentDto.buyer_email,
        phoneNumber: paymentDto.buyer_number,
      },
      totalAmount: paymentDto.payment_price,
      currency: "CURRENCY_KRW",
      payMethod: "CARD",
      redirectUrl: "http://locahost:3000",
    });
    console.log("포트원", response);
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + `payment/${paymentDto.payment_uid}`,
      {
        headers: { Authorization: token },
      }
    );
    console.log("백엔드", res);
  } catch (e) {
    console.log(e);
  }
}

export default requestPay;
