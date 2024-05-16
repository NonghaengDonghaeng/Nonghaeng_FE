import Link from "next/link";
import CustomImage from "@/common/components/CustomImage/CustomImage";
import styles from "./SubList.module.css";
import {
  ExpSummaryListType,
  RoomSummaryListType,
} from "../../(types)/tourDetailDataType";

type SubListPropsType = {
  isClick: { exp: boolean; lodg: boolean };
  expSubListData: ExpSummaryListType | undefined;
  roomSubListData: RoomSummaryListType | undefined;
};

export default function SubList({
  isClick,
  expSubListData,
  roomSubListData,
}: SubListPropsType) {
  const expList = expSubListData?.map((item, index) => (
    <li key={index}>
      <Link href={`/detail/exp?exp_id=${item.exp_id}`}>
        <CustomImage src={item.photo_info_dto.img_url} />
        <div>
          <span>{item.exp_name}</span>
          {item.price}원
        </div>
      </Link>
    </li>
  ));
  const lodgList = roomSubListData?.map((item, index) => (
    <li key={index}>
      <Link href={`/detail/lodg/room?room_id=${item.room_id}`}>
        <CustomImage src={item.photo_info_dto.img_url} />
        <div>
          <span>{item.room_name}</span>
          {item.price}원
        </div>
      </Link>
    </li>
  ));

  return (
    <div
      className={`${
        isClick.exp || isClick.lodg ? styles.sub_list : styles.sub_list_off
      }`}
    >
      <p>
        {isClick.exp && "농촌체험"}
        {isClick.lodg && "농촌숙박"}
      </p>
      <ul>
        {isClick.exp && expList}
        {isClick.lodg && lodgList}
      </ul>
    </div>
  );
}
