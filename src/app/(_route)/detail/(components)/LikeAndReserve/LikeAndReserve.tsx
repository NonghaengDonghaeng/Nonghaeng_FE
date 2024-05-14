import { likeApi } from "@/common/api/likeApi";
import styles from "./LikeAndReserve.module.css";
import Great_orange_Ic from "icon/great_orange.svg";
import Calendar_green_Ic from "icon/calendar_green.svg";

type PropsType = {
  type: string;
  id: number;
  routerFunction: Function;
};

export default function LikeAndReserve({
  type,
  id,
  routerFunction,
}: PropsType) {
  return (
    <div className={styles.like_and_reserve}>
      <button onClick={() => likeApi({ type: type, id: id })}>
        <label>좋아요</label>
        <Great_orange_Ic />
      </button>
      <button onClick={() => routerFunction()}>
        <label>예약하기</label>
        <Calendar_green_Ic />
      </button>
    </div>
  );
}
