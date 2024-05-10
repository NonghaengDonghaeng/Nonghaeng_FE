export type tourListContentDataType = {
  tour_id: number;
  name: string;
  area_name: string;
  tour_type: string;
  count_experience: number;
  count_room: number;
  one_line_intro: string;
  photo_info_dto: string;
}[];

export type tourListDataType = {
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

export type setTourListDataType = React.Dispatch<
  React.SetStateAction<tourListDataType>
>;
