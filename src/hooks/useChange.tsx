import { inputType } from "@/types/eventtype";
import { pageStateType, setPageStateType } from "@/types/pageState";

type changeType = {
  pageState: pageStateType;
  setPageState: setPageStateType;
  e: inputType;
};

export function useChange() {
  /**custom change 
   @param {selectItem} 객체, region: 스트링, 배열 category:스트링, 배열
   @param {setSelectItem} 스테이트함수
   @param {e} 이벤트 파라미터
  */

  function change({ pageState, setPageState, e }: changeType) {
    let newArray;
    if (e.target.name == "region") {
      if (pageState.region.includes(e.target.value)) {
        console.log("지역 포함");
        newArray = pageState.region.filter(
          (region) => region !== e.target.value
        );
      } else {
        newArray = [...pageState.region, e.target.value];
      }
      setPageState({ ...pageState, region: newArray });
    } else if (e.target.name == "category") {
      if (pageState.category.includes(e.target.value)) {
        newArray = pageState.category.filter(
          (category) => category !== e.target.value
        );
      } else {
        newArray = [...pageState.category, e.target.value];
      }
      setPageState({ ...pageState, category: newArray });
    } else {
      setPageState({ ...pageState, [e.target.name]: e.target.value });
    }
  }
  return change;
}
