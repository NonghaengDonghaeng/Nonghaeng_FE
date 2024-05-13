import { photoInfoDtoType } from "@/common/types/photoInfoDtoType";

export type roomDetailDataType = {
  photo_info_dto_list: photoInfoDtoType[];
  room_name: string;
  room_type_name: string;
  summary: string;
  price_peak: number;
  price_off_peak: number;
  price_holiday: number;
  standard_capacity: number;
  max_capacity: number;
  additional_cost: number;
  checkin_time: string;
  checkout_time: string;
  current_num_of_room: number;
  room_configuration: string;
  inclusions: string;
  requirement: string;
  facilities: string;
  usage_tips: string;
  precautions: string;
  tour_id: number;
  tour_name: string;
};
