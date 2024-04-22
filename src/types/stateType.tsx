export type searchItemType = {
  state?: boolean;
  pageType?: string;
  searchWord: string;
  region: string | string[];
  category: string | string[];
};

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
