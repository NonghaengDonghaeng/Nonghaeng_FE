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

  const regionMap: any = {
    서울특별시: "02",
    경기도: "031",
    인천관역시: "032",
    강원도: "033",
    충청남도: "041",
    대전광역시: "042",
    충청북도: "043",
    세종특별자치시: "044",
    부산광역시: "051",
    울산광역시: "052",
    대구광역시: "053",
    경상북도: "054",
    경상남도: "055",
    전라남도: "061",
    광주광역시: "062",
    전라북도: "063",
    제주특별자치도: "064",
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
      typeof searchItem.region == "string" &&
      searchItem.category !== "유형선택"
    ) {
      router.push(
        `/trip/${tripMap[searchItem.category]}?${
          searchItem.region !== "지역선택" &&
          `region=${regionMap[searchItem.region]}`
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
