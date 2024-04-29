export type expDetailDataType = {
  img_url: string[];
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
