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

export type expListDatatype = {
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

export type setExpListDataType = React.Dispatch<
  React.SetStateAction<expListDatatype>
>;
