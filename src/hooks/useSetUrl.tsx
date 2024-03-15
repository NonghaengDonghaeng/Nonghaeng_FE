import { useRouter } from "next/navigation";

type selectItemType = {
  page_index: any;
  search_word: any;
  region: string[];
  category: string[];
  max_cost?: string;
  min_cost?: string;
};

export default function useSetUrl() {
  const router = useRouter();
  const urlParams = new URLSearchParams();

  function setUrl(selectItem: selectItemType) {
    console.log("url에 item 값 담김");
    if (selectItem.page_index) {
      urlParams.set("page_index", `${selectItem.page_index}`);
    }
    if (selectItem.search_word) {
      urlParams.set("search_word", `${selectItem.search_word}`);
    }
    selectItem.region.map((item) => urlParams.append("region", `${item}`));
    selectItem.category.map((item) => urlParams.append("category", `${item}`));
    if (selectItem.max_cost) {
      urlParams.set("max_cost", `${selectItem.max_cost}`);
    }
    if (selectItem.min_cost) {
      urlParams.set("min_cost", `${selectItem.min_cost}`);
    }
    router.push(`?${urlParams}`);
  }
  return setUrl;
}
