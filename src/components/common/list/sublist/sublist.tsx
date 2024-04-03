import Link from "next/link";
import Image from "next/image";
import styles from "./sublist.module.css";

type PropsType = {
  isClick: any;
  tour_detail: {
    exp_summary_list: any[];
    room_summary_list: any[];
  };
};

export default function SubList({ isClick, tour_detail }: PropsType) {
  const expList = tour_detail.exp_summary_list.map((item, index) => (
    <li key={index}>
      <Link href={`/pages/detail/exp?exp_id=${item.expId}`}>
        <img></img>
        <div>
          <span>{item.expName}</span>
          {item.price}원
        </div>
      </Link>
    </li>
  ));
  const lodgList = tour_detail.room_summary_list.map((item, index) => (
    <li key={index}>
      <Link href={`/pages/detail/lodg?lodg_id=${item.roomId}`}>
        <img></img>
        <div>
          <span>{item.roomName}</span>
          {item.price}원
        </div>
      </Link>
    </li>
  ));

  return (
    <ul
      className={`${
        isClick.exp || isClick.lodg ? styles.sub_list : styles.off
      }`}
    >
      <p>
        {isClick.exp && "농촌체험"}
        {isClick.lodg && "농촌숙박"}
      </p>
      {isClick.exp && expList}
      {isClick.lodg && lodgList}
    </ul>
  );
}
