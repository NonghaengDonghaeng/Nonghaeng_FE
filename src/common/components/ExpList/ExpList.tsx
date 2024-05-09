import CustomImage from "../CustomImage/CustomImage";
import Link from "next/link";
import styles from "./ExpList.module.css";
import { expListContentDataType } from "@/common/types/expListDataType";
import Location_orange_Ic from "icon/location_orange.svg";

type ExpListPropsType = {
  content: expListContentDataType | undefined;
};

export default function ExpList({ content }: ExpListPropsType) {
  const expList = content?.map((item, index) => (
    <li key={index}>
      <Link href={`/detail/exp?exp_id=${item.experience_id}`}>
        <div>
          <CustomImage src={item.photo_info_dto} />
          <span>
            <Location_orange_Ic />
            {item.area_name}
          </span>
        </div>
        <div>
          <h1>
            {item.experience_name}
            <span>{item.tour_name}</span>
          </h1>
          <h2>{item.summary}</h2>
          <p>
            <label>인원:</label>
            최소{item.min_participant}명~최대{item.max_participant}명
          </p>
          <p>{item.price}원</p>
        </div>
      </Link>
    </li>
  ));
  return <ul className={styles.exp_list}>{expList}</ul>;
}
