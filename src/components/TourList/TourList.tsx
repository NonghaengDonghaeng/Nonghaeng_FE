import Link from "next/link";
import CustomImage from "../CustomImage/CustomImage";
import styles from "./TourList.module.css";
import { tourListContentDataType } from "@/types/tourListDataType";
import {LocationIc ,ExpIc, RoomIc} from "public/svg";

type TourListPropsType = {
  content: tourListContentDataType | undefined;
};

export default function TourList({ content }: TourListPropsType) {
  const tourList = content?.map((item, index) => (
    <li key={index}>
      <Link href={`/detail/${item.tour_id}`}>
        <div>
          <CustomImage src={item?.photo_info_dto?.img_url}/>
          <span>
            <LocationIc/>
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
              <ExpIc/>
              체험:{item.count_experience}
            </span>
            <span>
              <RoomIc/>
              숙박:{item.count_room}
            </span>
          </div>
        </div>
      </Link>
    </li>
  ));
  return <ul className={styles.tour_list}>{tourList}</ul>;
}
