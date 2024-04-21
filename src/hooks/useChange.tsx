import { inputType, selectType } from "@/types/eventType";

type PropsType = {
  changeItem: {
    searchWord?: string;
    region?: string[] | string;
    category?: string[] | string;

    area_code?: string;
    eamil?: string;
    name?: string;
    password?: string;
    check_password?: string;
    number?: string;
  };
  setChangeItem: React.Dispatch<
    React.SetStateAction<{
      searchWord?: string;
      region?: string[] | string;
      category?: string[] | string;
      area_code?: string;
      eamil?: string;
      name?: string;
      password?: string;
      check_password?: string;
      number?: string;
    }>
  >;
  e: inputType | selectType;
};

export function useChange() {
  /**custom change 
   @param changeItem:useState object
   @param setChangeItem:setUseState function
   @param e:event(type=inputType)
   변경할 아이템은 객체형태로 changeItem, set함수는 setChangeItem, 이벤트는 e
  */

  function change({ changeItem, setChangeItem, e }: PropsType) {
    // region, category가 배열인 경우
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
    // 배열 이외의 모든 아이템변경
    setChangeItem({ ...changeItem, [e.target.name]: e.target.value });
  }
  return change;
}
