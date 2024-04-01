import { inputType } from "@/types/eventtype";

type PropsType = {
  pageState: {
    isClick?: any;
    state?: boolean;
    page_type?: string;
    page_index?: string;
    search_word?: string;
    region?: string[] | string;
    category?: string[] | string;
    max_cost?: string;
    min_cost?: string;
    user_name?: string;
    phone_number?: string;
    email?: string;
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
      user_name?: string;
      phone_number?: string;
      email?: string;
    }>
  >;
  e: inputType;
};

export function useChange() {
  /**custom change 
   @param {selectItem}:useState object
   @param {setSelectItem}:setUseState function
   @param {e}:event(type=inputType)
  */

  function change({ pageState, setPageState, e }: PropsType) {
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
