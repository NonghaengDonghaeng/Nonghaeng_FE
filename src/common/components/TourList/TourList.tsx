import Link from "next/link";
import CustomImage from "../CustomImage/CustomImage";
import styles from "./TourList.module.css";
import { tourListContentDataType } from "@/common/types/tourListDataType";
import { Location_orange_Ic, Exp_orange_Ic, Lodg_orange_Ic } from "icon/index";

type TourListPropsType = {
  content: tourListContentDataType | undefined;
};

export default function TourList({ content }: TourListPropsType) {
  const tourList = content?.map((item, index) => (
    <li key={index}>
      <Link href={`/detail/${item.tour_id}`}>
        <div>
          <CustomImage src={item?.photo_info_dto?.img_url} />
          <span>
            <Location_orange_Ic />
            {item.area_name}
          </span>
        </div>
        <div>
          <h1>
            {item.name}
            <span>{item.tour_type}</span>
          </h1>
          <h2>{item.one_line_intro}</h2>
          <div>
            <span>
              <Exp_orange_Ic />
              체험:{item.count_experience}
            </span>
            <span>
              <Lodg_orange_Ic />
              숙박:{item.count_room}
            </span>
          </div>
        </div>
      </Link>
    </li>
  ));
  return <ul className={styles.tour_list}>{tourList}</ul>;
}
