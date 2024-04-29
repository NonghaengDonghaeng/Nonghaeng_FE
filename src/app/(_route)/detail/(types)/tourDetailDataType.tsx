export type tourDetailDataType = {
  img_url: string[];
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
