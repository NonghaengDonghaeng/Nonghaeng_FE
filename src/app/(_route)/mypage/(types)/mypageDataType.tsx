import { myReserveDataType } from "./myReserveDataType";
import { myReviewDataType } from "./myReviewDataType";

export type mypageDataType = {
  name: string;
  email: string;
  number: string;
  point: number;
  reservation_page: myReserveDataType;
  review_page: myReviewDataType;
};
