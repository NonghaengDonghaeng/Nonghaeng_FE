import { pageStateType } from "@/types/pageState";
import { useRouter } from "next/navigation";

type propsType = {
  pageState: {
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

  function setUrl({ pageState }: propsType) {
    if (pageState.page_index) {
      urlParams.set("page_index", `${pageState.page_index}`);
    }
    if (pageState.search_word) {
      urlParams.set("search_word", `${pageState.search_word}`);
    }
    if (Array.isArray(pageState.region)) {
      pageState.region.map((item) => urlParams.append("region", `${item}`));
    }
    if (Array.isArray(pageState.category)) {
      pageState.category.map((item) => urlParams.append("category", `${item}`));
    }
    if (pageState.max_cost) {
      urlParams.set("max_cost", `${pageState.max_cost}`);
    }
    if (pageState.min_cost) {
      urlParams.set("min_cost", `${pageState.min_cost}`);
    }
    router.push(`?${urlParams}`);
  }
  return setUrl;
}
