import { useRouter } from "next/navigation";

type searchType = {
  region: string;
  category: string;
  search_word: string;
};

export default function useHook() {
  const router = useRouter();

  /**custom searchHook
   * @param {region} 스트링타입의 지역정보
   * @param {category} 스트링타입의 유형정보
   * @param {search_word} 스트링 타입의 검색어
   */
  function useSearch({ region, category, search_word }: searchType) {
    if (region == "" && category == "") {
      // router.push(`/pages/search?search_word=${search_word}`);
      window.location.replace(`/pages/search?search_word=${search_word}`);
    } else if (category == "유형 선택") {
      alert("유형을 선택해주세요");
    } else {
      if (category == "관광") {
        router.push(
          `/pages/trip/tour?region=${region}&search_word=${search_word}`
        );
      }
      if (category == "체험") {
        router.push(
          `/pages/trip/experience?region=${region}&search_word=${search_word}`
        );
      }
      if (category == "숙박") {
        router.push(
          `/pages/trip/lodgment?region=${region}&search_word=${search_word}`
        );
      }
    }
  }
  return useSearch;
}
