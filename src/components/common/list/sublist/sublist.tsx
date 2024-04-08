import Link from "next/link";
import styles from "./sublist.module.css";

type PropsType = {
  isClick: { exp: boolean; lodg: boolean };
  expSubListData:
    | { expId: number; expName: string; price: number; img_url: string }[]
    | undefined;
  lodgSubListData:
    | { roomId: number; roomName: string; price: number; img_url: string }[]
    | undefined;
};

export default function SubList({
  isClick,
  expSubListData,
  lodgSubListData,
}: PropsType) {
  const expList = expSubListData?.map((item, index) => (
    <li key={index}>
      <Link href={`/pages/detail/exp?exp_id=${item.expId}`}>
        <img src={item.img_url}></img>
        <div>
          <span>{item.expName}</span>
          {item.price}원
        </div>
      </Link>
    </li>
  ));
  const lodgList = lodgSubListData?.map((item, index) => (
    <li key={index}>
      <Link href={`/pages/detail/lodg?lodg_id=${item.roomId}`}>
        <img src={item.img_url}></img>
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
