import { photoInfoDtoType } from "@/common/types/photoInfoDtoType";

export type RoomSummaryListType = {
  room_id: number;
  photo_info_dto: photoInfoDtoType;
  room_name: string;
  price: number;
}[];

export type ExpSummaryListType = {
  photo_info_dto: photoInfoDtoType;
  exp_id: number;
  exp_name: string;
  price: number;
}[];

export type tourDetailDataType = {
  photo_info_dto_list: photoInfoDtoType[];
  name: string;
  // grade: number;
  // comment_count: number;
  // tel: string;
  // address: string;
  homepage_url: string;
  introduction: string;
  one_line_intro: string;
  summary: string;
  restaurant: string;
  parking: string;
  toilet: string;
  amenities: string;
  area_name: string;
  room_summary_list: RoomSummaryListType;
  exp_summary_list: ExpSummaryListType;
};
