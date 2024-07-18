export type searchItemType = {
  state?: boolean;
  pageType?: string;
  searchWord?: string;
  region?: string | string[];
  category?: string | string[];
};

export type setSearchItemType = React.Dispatch<
  React.SetStateAction<{
    state?: boolean;
    pageType?: string;
    searchWord?: string;
    region?: string | string[];
    category?: string | string[];
  }>
>;
