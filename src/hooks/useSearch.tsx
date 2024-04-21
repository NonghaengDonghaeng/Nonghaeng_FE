import { useRouter } from "next/navigation";

type propsType = {
  searchItem: {
    searchWord?: string;
    region?: string[] | string;
    category?: string[] | string;
  };
};

export function useSearch() {
  const router = useRouter();

  const tripMap: any = {
    관광: "tour",
    체험: "exp",
    숙박: "lodg",
  };

  /**custom search
   * @param region:스트링타입의 지역정보
   * @param category:스트링타입의 유형정보
   * @param search_word:스트링 타입의 검색어
   */

  function search({ searchItem }: propsType) {
    // 지역x, 카테고리x
    if (!searchItem.region && !searchItem.category) {
      // router.push(`/search?search_word=${search_word}`);
      window.location.replace(`/search?search_word=${searchItem.searchWord}`);
    }
    // 카테고리o, 지역 ?
    else if (
      typeof searchItem.category == "string" &&
      searchItem.category !== "유형선택"
    ) {
      router.push(
        `/trip/${tripMap[searchItem.category]}?${
          searchItem.region !== "지역선택" && `region=${searchItem.region}`
        }&search_word=${searchItem.searchWord}`
      );
    }
    // 카테고리x
    else {
      alert("유형을 선택해주세요");
    }
  }

  return search;
}
