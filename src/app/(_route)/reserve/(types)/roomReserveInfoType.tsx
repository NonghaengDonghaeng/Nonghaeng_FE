export type roomReserveInfoType = {
  room_id: number | null;
  num_of_room: number;
  num_of_participant: number;
  reservation_dates: (string | null)[];
  reservation_name: string | null;
  number: string | undefined;
  email: string | undefined;
  final_price: number;
};
