import { useRouter } from "next/navigation";

type selectItemType = {
  page_index: any;
  search_word: any;
  region: string[];
  category: string[];
};

export default function useSetUrl() {
  const router = useRouter();
  const urlParams = new URLSearchParams();
  function setUrl(selectItem: selectItemType) {
    urlParams.set("page_index", `${selectItem.page_index}`);
    urlParams.append("region", `${selectItem.region.map((item) => item)}`);
    urlParams.append("category", `${selectItem.category.map((item) => item)}`);
    urlParams.append("search_word", `${selectItem.search_word}`);
    router.push(`?${urlParams}`);
  }
  return setUrl;
}
