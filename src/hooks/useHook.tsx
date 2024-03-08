import { useRouter } from "next/navigation";
import { inputType } from "@/types/eventtype";

type searchType = {
  region: string;
  category: string;
  search_word: string;
};

export function useSearch() {
  const router = useRouter();

  /**custom searchHook
   * @param {region} 스트링타입의 지역정보
   * @param {category} 스트링타입의 유형정보
   * @param {search_word} 스트링 타입의 검색어
   */
  function search({ region, category, search_word }: searchType) {
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

  return search;
}

type changeType = {
  selectItem: { region: string[]; category: string[]; search_word: string };
  setSelectItem: React.Dispatch<
    React.SetStateAction<{
      region: string[];
      category: string[];
    }>
  >;
  e: inputType;
};

export function useChange() {
  function change({ selectItem, setSelectItem, e }: changeType) {
    let newArray;
    if (e.target.name == "region") {
      if (selectItem.region.includes(e.target.value)) {
        console.log("지역 포함");
        newArray = selectItem.region.filter(
          (region) => region !== e.target.value
        );
      } else {
        newArray = [...selectItem.region, e.target.value];
      }
      setSelectItem({ ...selectItem, region: newArray });
    } else if (e.target.name == "category") {
      if (selectItem.category.includes(e.target.value)) {
        newArray = selectItem.category.filter(
          (category) => category !== e.target.value
        );
      } else {
        newArray = [...selectItem.category, e.target.value];
      }
      setSelectItem({ ...selectItem, category: newArray });
    } else {
      setSelectItem({ ...selectItem, [e.target.name]: e.target.value });
    }
  }
  return change;
}
