export type lodgListContentDataType = {
  tour_id: number;
  tour_name: string;
  area_name: string;
  room_type_name: string;
  one_line_intro: string;
  min_price: number;
  max_price: number;
  photo_info_dto: string;
}[];

export type lodgListDataType = {
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

export type setLodgListDataType = React.Dispatch<
  React.SetStateAction<lodgListDataType>
>;
