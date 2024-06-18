import { PaymentDtoType } from "./PaymentDtoType";

export type roomReserveInfoType = {
  type: string;
  room_id: number | null;
  num_of_room: number;
  num_of_participant: number;
  start_date: string | null;
  end_date: string | null;
  reservation_name: string | undefined;
  number: string | undefined;
  email: string | undefined;
  final_price: number;
};

export type ReturnRoomReserveType = {
  payment_dto: PaymentDtoType;
  room_reservation_id: number;
  room_name: string;
  start_date: string;
  end_date: string;
  reservation_name: string;
  number: string;
  email: string;
  num_of_room: number;
  num_of_participant: number;
  final_price: number;
};
