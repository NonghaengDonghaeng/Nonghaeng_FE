import Link from "next/link";
import styles from "./ExpInfo.module.css";
import { expDetailDataType } from "../../(types)/expDetailDataType";
import {PersonIc, PriceIc, StarIc, TimeIc} from "public/svg";

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
          <StarIc />
          {expData?.likes}
        </span>
      </h1>
      <hr />
      <h2>{expData?.summary}</h2>
      <div>
        <p>
          <PersonIc/>
          <label>참여인원</label>
          {expData?.min_participant}명{" ~ "}
          {expData?.max_participant}명
        </p>
        <p>
          <TimeIc/>
          <label>소요시간</label>
          {expData?.duration_hours}시간
        </p>
        <p>
          <PriceIc/>
          <label>체험비용</label>
          {expData?.price}원
        </p>
      </div>
    </div>
  );
}
