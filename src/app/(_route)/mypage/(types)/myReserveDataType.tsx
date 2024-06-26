export type expContentType = {
  experience_reservation_id: number;
  experience_name: string;
  reservation_state: string;
  reservation_date: string;
  price: number;
  num_of_participant: number;
  type: string;
  written_review: boolean;
};

export type roomContentType = {
  room_reservation_id: number;
  room_name: string;
  reservation_state: string;
  reservation_dates: string[];
  price: number;
  num_of_participant: number;
  num_of_room: number;
  type: string;
  written_review: boolean;
};

export type myReserveDataType = {
  content: (expContentType | roomContentType)[];
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
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
