import { useRouter } from "next/navigation";
import { pageStateType } from "@/types/pageStateType";

type propsType = {
  searchItem: {
    search_word?: string;
    region?: string[] | string;
    category?: string[] | string;
  };
};

export function useSearch() {
  const router = useRouter();

  // const tripMap: { ["관광"]: string; ["체험"]: string; ["숙박"]: string } = {
  //   ["관광"]: "tour",
  //   ["체험"]: "exp",
  //   ["숙박"]: "lodg",
  // };

  // const returnTripMap = ()

  /**custom search
   * @param region:스트링타입의 지역정보
   * @param category:스트링타입의 유형정보
   * @param search_word:스트링 타입의 검색어
   */

  function search({ searchItem }: propsType) {
    // 지역x, 카테고리x
    if (!searchItem.region && !searchItem.category) {
      // router.push(`/pages/search?search_word=${search_word}`);
      window.location.replace(
        `/pages/search?search_word=${searchItem.search_word}`
      );
    }
    // 카테고리x
    else if (searchItem.category == "유형선택") {
      alert("유형을 선택해주세요");
    }
    //  else {
    //   router.push(
    //     `/pages/${tripMap[searchItem.category]}?region=${
    //       searchItem.region
    //     }&search_word=${searchItem.search_word}`
    //   );
    // }
    // 지역x, 카테고리 o
    else if (
      searchItem.region == "지역선택" &&
      searchItem.category !== "유형선택"
    ) {
      if (searchItem.category == "관광") {
        router.push(`/pages/trip/tour?search_word=${searchItem.search_word}`);
      }
      if (searchItem.category == "체험") {
        router.push(`/pages/trip/exp?search_word=${searchItem.search_word}`);
      }
      if (searchItem.category == "숙박") {
        router.push(`/pages/trip/lodg?search_word=${searchItem.search_word}`);
      }
    }
    // 지역o, 카테고리o
    else {
      if (searchItem.category == "관광") {
        router.push(
          `/pages/trip/tour?region=${searchItem.region}&search_word=${searchItem.search_word}`
        );
      }
      if (searchItem.category == "체험") {
        router.push(
          `/pages/trip/exp?region=${searchItem.region}&search_word=${searchItem.search_word}`
        );
      }
      if (searchItem.category == "숙박") {
        router.push(
          `/pages/trip/lodg?region=${searchItem.region}&search_word=${searchItem.search_word}`
        );
      }
    }
  }

  return search;
}
