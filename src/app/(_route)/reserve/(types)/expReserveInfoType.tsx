import { PaymentDtoType } from "./PaymentDtoType";

export type expReserveInfoType = {
  type: string;
  round_id: number | undefined;
  reservation_date: string | undefined;
  num_of_participant: number | undefined;
  reservation_name: string | undefined;
  number: string | undefined;
  email: string | undefined;
  final_price: number;
};

export type returnExpReserveType = {
  payment_dto: PaymentDtoType;
  experience_reservation_id: number;
  experience_name: string;
  reservation_name: string;
  reservation_date: string;
  start_time: string;
  end_time: string;
  number: string;
  email: string;
  num_of_participant: number;
  final_price: number;
};
