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
    urlParams.set("search_word", `${selectItem.search_word}`);
    selectItem.region.map((item) => urlParams.append("region", `${item}`));
    selectItem.category.map((item) => urlParams.append("category", `${item}`));

    router.push(`?${urlParams}`);
  }
  return setUrl;
}
