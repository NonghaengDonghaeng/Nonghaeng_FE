import { photoInfoDtoType } from "@/common/types/photoInfoDtoType";

export type roomListDataType = {
  photo_info_dto: photoInfoDtoType | null;
  room_id: number;
  room_name: string;
  current_num_of_room: number;
  price: number;
  price_holiday: number;
  standard_capacity: number;
  max_capacity: number;
  checkin_time: string;
  checkout_time: string;
  room_configuration: string;
}[];

export type lodgDetailDataType = {
  photo_info_dto_list: photoInfoDtoType[];
  tour_name: string;
  tour_one_line_intro: string;
  area_name: string;
  address: string;
  call_number: string;
  homepage_url: string;
  restaurant: string;
  parking: string;
  toilet: string;
  amenities: string;
  room_summary_dto_list: roomListDataType;
};
