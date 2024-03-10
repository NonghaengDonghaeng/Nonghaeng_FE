import { inputType } from "@/types/eventtype";

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
  /**custom change 
   @param {selectItem} 객체, region: 스트링, 배열 category:스트링, 배열
   @param {setSelectItem} 스테이트함수
   @param {e} 이벤트 파라미터
  */

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
