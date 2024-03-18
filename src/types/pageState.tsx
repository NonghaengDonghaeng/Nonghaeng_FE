export type pageStateType = {
  isClick?: any;
  state?: boolean;
  page_type?: string;
  page_index?: string;
  search_word: string;
  region: string[] | string;
  category: string[] | string;
  max_cost?: string;
  min_cost?: string;
};

export type setPageStateType = React.Dispatch<
  React.SetStateAction<{
    isClick?: any;
    state?: boolean;
    page_type?: string;
    page_index?: string;
    search_word: string;
    region: string[] | string;
    category: string[] | string;
    max_cost?: string;
    min_cost?: string;
  }>
>;
