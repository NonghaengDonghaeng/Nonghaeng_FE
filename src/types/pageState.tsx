export type pageStateType = {
  isClick: boolean;
  state: boolean;
  page_type: string;
  page_index: string;
  search_word: string;
  region: string[];
  category: string[];
  max_cost?: string;
  min_cost?: string;
};

export type setPageStateType = React.Dispatch<
  React.SetStateAction<{
    isClick: boolean;
    state: boolean;
    page_type: string;
    page_index: string;
    search_word: string;
    region: string[];
    category: string[];
    max_cost?: string;
    min_cost?: string;
  }>
>;
