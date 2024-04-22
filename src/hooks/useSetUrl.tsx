import { useRouter } from "next/navigation";

type propsType = {
  urlItem: {
    pageIndex?: number;
    searchWord?: string;
    region?: string[] | string;
    category?: string[] | string;
    maxCost?: string;
    minCost?: string;
  };
};

export default function useSetUrl() {
  const router = useRouter();
  const urlParams = new URLSearchParams();

  /** custom setUrl
   * @param urlItem:setUrl object
   */

  function setUrl({ urlItem }: propsType) {
    if (urlItem.pageIndex) {
      urlParams.set("page_index", `${urlItem.pageIndex}`);
    }
    if (urlItem.searchWord) {
      urlParams.set("search_word", `${urlItem.searchWord}`);
    }
    if (Array.isArray(urlItem.region)) {
      urlItem.region.map((item) => urlParams.append("region", `${item}`));
    }
    if (Array.isArray(urlItem.category)) {
      urlItem.category.map((item) => urlParams.append("category", `${item}`));
    }
    if (urlItem.maxCost) {
      urlParams.set("max_cost", `${urlItem.maxCost}`);
    }
    if (urlItem.minCost) {
      urlParams.set("min_cost", `${urlItem.minCost}`);
    }
    router.push(`?${urlParams}`);
  }
  return setUrl;
}
