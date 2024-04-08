import { inputType } from "@/types/eventType";

type PropsType = {
  changeItem: {
    isClick?: any;
    state?: boolean;
    page_type?: string;
    page_index?: number;
    search_word?: string;
    region?: string[] | string;
    category?: string[] | string;
    max_cost?: string;
    min_cost?: string;
    area_code?: string;
    eamil?: string;
    name?: string;
    password?: string;
    check_password?: string;
    number?: string;
  };
  setChangeItem: React.Dispatch<
    React.SetStateAction<{
      isClick?: any;
      state?: boolean;
      page_type?: string;
      page_index?: number;
      search_word?: string;
      region?: string[] | string;
      category?: string[] | string;
      max_cost?: string;
      min_cost?: string;
      area_code?: string;
      eamil?: string;
      name?: string;
      password?: string;
      check_password?: string;
      number?: string;
    }>
  >;
  e: inputType;
};

export function useChange() {
  /**custom change 
   @param changeItem:useState object
   @param setChangeItem:setUseState function
   @param e:event(type=inputType)
  */

  function change({ changeItem, setChangeItem, e }: PropsType) {
    if (
      Array.isArray(changeItem.region) &&
      Array.isArray(changeItem.category)
    ) {
      if (e.target.name == "region") {
        let newArray;
        if (changeItem.region.includes(e.target.value)) {
          newArray = changeItem.region.filter(
            (region) => region !== e.target.value
          );
        } else {
          newArray = [...changeItem.region, e.target.value];
        }
        setChangeItem({ ...changeItem, region: newArray });
        return;
      } else if (e.target.name == "category") {
        let newArray;
        if (changeItem.category.includes(e.target.value)) {
          newArray = changeItem.category.filter(
            (category) => category !== e.target.value
          );
        } else {
          newArray = [...changeItem.category, e.target.value];
        }
        setChangeItem({ ...changeItem, category: newArray });
        return;
      }
    }
    setChangeItem({ ...changeItem, [e.target.name]: e.target.value });
  }
  return change;
}
