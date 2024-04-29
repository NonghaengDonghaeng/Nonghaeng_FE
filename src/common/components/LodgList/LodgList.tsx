import Image from "next/image";
import Link from "next/link";
import styles from "./LodgList.module.css";
import { lodgListContentDataType } from "@/common/types/lodgListDataType";
import Location_orange_Ic from "icon/location_orange.svg";

type LodgListPropsType = {
  content: lodgListContentDataType | undefined;
};

export default function LodgList({ content }: LodgListPropsType) {
  const lodgList = content?.map((item, index) => (
    <li key={index}>
      <Link href={`/detail/lodg?lodg_id=${item.tour_id}`}>
        <div>
          <Image
            src={item.img_url}
            alt="lodg_list_img"
            width={800}
            height={800}
          />
          <span>
            <Location_orange_Ic />
            {item.area_name}
          </span>
        </div>
        <div>
          <h1>
            {item.tour_name}
            <span>{item.room_type_name}</span>
          </h1>
          <h2>{item.one_line_intro}</h2>
          <p>{item.min_price}원 ~</p>
          <span>객실보기</span>
        </div>
      </Link>
    </li>
  ));
  return <ul className={styles.lodg_list}>{lodgList}</ul>;
}
