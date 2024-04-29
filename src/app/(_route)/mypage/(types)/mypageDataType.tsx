export type mypageDataType = {
  name: string;
  email: string;
  number: string;
  point: number;
  reservations: {
    room_reservation_id?: number;
    room_name?: string;
    reservation_state?: string;
    reservation_dates?: string[];
    num_of_room?: number;
    type?: string;
    experience_reservation_id?: number;
    experience_name?: string;
    reservation_date?: string;
    price?: number;
    num_of_participant?: number;
  }[];
};

export type setMypageDataType = React.Dispatch<
  React.SetStateAction<mypageDataType>
>;
