export type ReviewListDataType = {
  content: [ExpReviewContentType | RoomReviewContentType];
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

export type ExpReviewContentType = {
  review_id: number;
  exp_name: string;
  title: string;
  img_url: string;
  author: string;
  create_date: string;
  type: string;
  content: string;
};

export type RoomReviewContentType = {
  review_id: number;
  room_name: string;
  title: string;
  img_url: string;
  author: string;
  create_date: string;
  type: string;
  content: string;
};
