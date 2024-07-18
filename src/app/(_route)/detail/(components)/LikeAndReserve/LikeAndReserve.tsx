import { likeApi } from "@/api/likeApi";
import styles from "./LikeAndReserve.module.css";
import {CardIc, HeartIc} from "public/svg";

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
        <HeartIc />
      </button>
      <button onClick={() => routerFunction()}>
        <label>예약하기</label>
        <CardIc />
      </button>
    </div>
  );
}
