export type addTourDataType = {
  tour_type: string;
  tour_name: string;
  homepage_url: string;
  introduction: string;
  one_line_intro: string;
  summary: string;
  restaurant: string;
  parking: string;
  toilet: string;
  amenities: string;
};

export type addExperienceDataType = {
  experience_type: string;
  experience_name: string;
  start_date: string;
  end_date: string;
  min_participant: number;
  max_participant: number;
  price: number;
  duration_hours: number;
  check_point: string;
  summary: string;
  detail_introduction: string;
  supplies: string;
  precautions: string;
  exp_round_dto_list: ExpRoundDto[];
};

export type ExpRoundDto = {
  start_time: string;
  end_time: string;
  max_participant: number;
};
