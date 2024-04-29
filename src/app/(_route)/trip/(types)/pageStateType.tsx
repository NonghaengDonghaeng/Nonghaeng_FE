export type pageStateType = {
  isClick?: boolean;
  state?: boolean;
  pageType?: string;
  pageIndex?: number;
  searchWord?: string;
  region?: string[] | string;
  category?: string[] | string;
  maxCost?: string;
  minCost?: string;
};

export type setPageStateType = React.Dispatch<
  React.SetStateAction<{
    isClick?: boolean;
    state?: boolean;
    pageType?: string;
    pageIndex?: number;
    searchWord?: string;
    region?: string[] | string;
    category?: string[] | string;
    maxCost?: string;
    minCost?: string;
  }>
>;
