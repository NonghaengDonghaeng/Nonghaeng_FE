export type setBooleanType = React.Dispatch<React.SetStateAction<boolean>>;

export type setStringType = React.Dispatch<React.SetStateAction<string>>;

export type setNumberType = React.Dispatch<React.SetStateAction<number>>;

export type setSearchItemType = React.Dispatch<
  React.SetStateAction<{
    state?: boolean;
    pageType?: string;
    searchWord: string;
    region: string | string[];
    category: string | string[];
  }>
>;

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
