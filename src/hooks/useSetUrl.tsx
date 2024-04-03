import { useRouter } from "next/navigation";

type propsType = {
  urlItem: {
    isClick?: any;
    state?: boolean;
    page_type?: string;
    page_index?: number;
    search_word?: string;
    region?: string[] | string;
    category?: string[] | string;
    max_cost?: string;
    min_cost?: string;
  };
};

export default function useSetUrl() {
  const router = useRouter();
  const urlParams = new URLSearchParams();

  /** custom setUrl
   * @param urlItem:setUrl object
   */

  function setUrl({ urlItem }: propsType) {
    if (urlItem.page_index) {
      urlParams.set("page_index", `${urlItem.page_index}`);
    }
    if (urlItem.search_word) {
      urlParams.set("search_word", `${urlItem.search_word}`);
    }
    if (Array.isArray(urlItem.region)) {
      urlItem.region.map((item) => urlParams.append("region", `${item}`));
    }
    if (Array.isArray(urlItem.category)) {
      urlItem.category.map((item) => urlParams.append("category", `${item}`));
    }
    if (urlItem.max_cost) {
      urlParams.set("max_cost", `${urlItem.max_cost}`);
    }
    if (urlItem.min_cost) {
      urlParams.set("min_cost", `${urlItem.min_cost}`);
    }
    router.push(`?${urlParams}`);
  }
  return setUrl;
}
