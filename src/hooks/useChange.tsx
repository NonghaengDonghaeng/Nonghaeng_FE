import { inputType } from "@/types/eventtype";
import { pageStateType, setPageStateType } from "@/types/pageState";

type changeType = {
  pageState: {
    isClick?: any;
    state?: boolean | undefined;
    page_type?: string | undefined;
    page_index?: string | undefined;
    search_word?: string;
    region?: string[] | string;
    category?: string[] | string;
    max_cost?: string | undefined;
    min_cost?: string | undefined;
  };
  setPageState: React.Dispatch<
    React.SetStateAction<{
      isClick?: any;
      state?: boolean;
      page_type?: string;
      page_index?: string;
      search_word?: string;
      region?: string[] | string;
      category?: string[] | string;
      max_cost?: string;
      min_cost?: string;
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

  function change({ pageState, setPageState, e }: changeType) {
    if (Array.isArray(pageState.region) && Array.isArray(pageState.category)) {
      if (e.target.name == "region") {
        let newArray;
        if (pageState.region.includes(e.target.value)) {
          newArray = pageState.region.filter(
            (region) => region !== e.target.value
          );
        } else {
          newArray = [...pageState.region, e.target.value];
        }
        setPageState({ ...pageState, region: newArray });
        return;
      } else if (e.target.name == "category") {
        let newArray;
        if (pageState.category.includes(e.target.value)) {
          newArray = pageState.category.filter(
            (category) => category !== e.target.value
          );
        } else {
          newArray = [...pageState.category, e.target.value];
        }
        setPageState({ ...pageState, category: newArray });
        return;
      }
    }
    setPageState({ ...pageState, [e.target.name]: e.target.value });
  }
  return change;
}
