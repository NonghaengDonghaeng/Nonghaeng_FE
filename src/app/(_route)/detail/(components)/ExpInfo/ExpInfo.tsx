import Link from "next/link";
import styles from "./ExpInfo.module.css";
import Grade_orange_Ic from "icon/grade_orange.svg";
import Person_orange_Ic from "icon/person_orange.svg";
import Time_orange_Ic from "icon/time_orange.svg";
import Price_orange_Ic from "icon/price_orange.svg";
import { expDetailDataType } from "../../(types)/expDetailDataType";

type PropsType = {
  expData: expDetailDataType | undefined;
};

export default function ExpInfo({ expData }: PropsType) {
  return (
    <div className={styles.exp_info}>
      <span>
        <Link href={`/detail/${expData?.tour_info.tourId}`}>
          {expData?.tour_info.tourName}
        </Link>
        {" > "}
        {expData?.experience_name}
      </span>
      <h1>
        {expData?.experience_name}
        <span>
          <Grade_orange_Ic />
          {expData?.likes}
        </span>
      </h1>
      <hr />
      <h2>{expData?.detail_introduction}</h2>
      <div>
        <p>
          <Person_orange_Ic />
          <label>참여인원</label>
          {expData?.min_participant}명{" ~ "}
          {expData?.max_participant}명
        </p>
        <p>
          <Time_orange_Ic />
          <label>소요시간</label>
          {expData?.duration_hours}시간
        </p>
        <p>
          <Price_orange_Ic />
          <label>체험비용</label>
          {expData?.price}원
        </p>
      </div>
    </div>
  );
}
