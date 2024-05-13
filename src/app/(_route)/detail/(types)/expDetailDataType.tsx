import { photoInfoDtoType } from "@/common/types/photoInfoDtoType";

export type expDetailDataType = {
  photo_info_dto_list: photoInfoDtoType[];
  experience_name: string;
  // grade: number;
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
  likes: number;
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
