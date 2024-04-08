import { roomListDataType } from "./listPageDataType";

export type tourDetailPageDataType = {
  main_img_url: string;
  sub_img_url: string[];
  name: string;
  grade: number;
  comment_count: number;
  tel: string;
  address: string;
  homepage_url: string;
  introduction: string;
  one_line_intro: string;
  summary: string;
  restaurant: string;
  parking: string;
  toilet: string;
  amenities: string;
  area_name: string;
  room_summary_list: {
    roomId: number;
    roomName: string;
    price: number;
    img_url: string;
  }[];
  exp_summary_list: {
    expId: number;
    expName: string;
    price: number;
    img_url: string;
  }[];
};

export type expDetailPageDataType = {
  main_img_url: string;
  sub_img_url: string[];
  experience_name: string;
  grade: number;
  experience_type_name: string;
  start_date: string;
  end_date: string;
  min_participant: number;
  max_participant: number;
  price: number;
  duration_hours: number;
  check_point: string;
  detail_introduction: string;
  summary: string;
  supplies: string;
  precautions: string;
  tour_info: {
    tourId: number;
    tourName: string;
    areaName: string;
  };
  seller_info: {
    address: string;
    callNumber: string;
  };
};

export type lodgDetailPageDataType = {
  main_img_url: string;
  sub_img_url: string[];
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

export type roomDetailPageDataType = {
  main_img_url: string;
  sub_img_url: string[];
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
