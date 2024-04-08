export type tourListContentDataType = {
  tour_id: number;
  name: string;
  area_name: string;
  tour_type: string;
  count_experience: number;
  count_room: number;
  one_line_intro: string;
  img_url: string;
}[];

export type expListContentDataType = {
  experience_id: number;
  experience_name: string;
  price: number;
  min_participant: number;
  max_participant: number;
  area_name: string;
  tour_name: string;
  summary: string;
  img_url: string;
}[];

export type lodgListContentDataType = {
  tour_id: number;
  tour_name: string;
  area_name: string;
  room_type_name: string;
  one_line_intro: string;
  min_price: number;
  max_price: number;
  img_url: string;
}[];

export type tourListPageDataType = {
  content: tourListContentDataType;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  empty: boolean;
};

export type expListPageDatatype = {
  content: expListContentDataType;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  empty: boolean;
};

export type lodgListPageDataType = {
  content: lodgListContentDataType;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  empty: boolean;
};
