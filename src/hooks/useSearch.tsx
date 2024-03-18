import { useRouter } from "next/navigation";
import { pageStateType } from "@/types/pageState";

type propsType = {
  pageState: pageStateType;
};

export function useSearch() {
  const router = useRouter();

  /**custom search
   * @param {region} 스트링타입의 지역정보
   * @param {category} 스트링타입의 유형정보
   * @param {search_word} 스트링 타입의 검색어
   */
  function search({ pageState }: propsType) {
    // 지역x, 카테고리x
    if (pageState.region == "" && pageState.category == "") {
      // router.push(`/pages/search?search_word=${search_word}`);
      window.location.replace(
        `/pages/search?search_word=${pageState.search_word}`
      );
    }
    // 카테고리x
    else if (pageState.category == "유형선택") {
      alert("유형을 선택해주세요");
    }
    // 지역x, 카테고리 o
    else if (
      pageState.region == "지역선택" &&
      pageState.category !== "유형선택"
    ) {
      if (pageState.category == "관광") {
        router.push(`/pages/trip/tour?search_word=${pageState.search_word}`);
      }
      if (pageState.category == "체험") {
        router.push(`/pages/trip/exp?search_word=${pageState.search_word}`);
      }
      if (pageState.category == "숙박") {
        router.push(`/pages/trip/lodg?search_word=${pageState.search_word}`);
      }
    }
    // 지역o, 카테고리o
    else {
      if (pageState.category == "관광") {
        router.push(
          `/pages/trip/tour?region=${pageState.region}&search_word=${pageState.search_word}`
        );
      }
      if (pageState.category == "체험") {
        router.push(
          `/pages/trip/exp?region=${pageState.region}&search_word=${pageState.search_word}`
        );
      }
      if (pageState.category == "숙박") {
        router.push(
          `/pages/trip/lodg?region=${pageState.region}&search_word=${pageState.search_word}`
        );
      }
    }
  }

  return search;
}
