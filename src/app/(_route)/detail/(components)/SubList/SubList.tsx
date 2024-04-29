import Image from "next/image";
import Link from "next/link";
import styles from "./SubList.module.css";

type SubListPropsType = {
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
}: SubListPropsType) {
  const expList = expSubListData?.map((item, index) => (
    <li key={index}>
      <Link href={`/detail/exp?exp_id=${item.expId}`}>
        <Image
          src={item.img_url}
          alt="exp_sub_ist_img"
          width={800}
          height={800}
        />
        <div>
          <span>{item.expName}</span>
          {item.price}원
        </div>
      </Link>
    </li>
  ));
  const lodgList = lodgSubListData?.map((item, index) => (
    <li key={index}>
      <Link href={`/detail/lodg?lodg_id=${item.roomId}`}>
        <Image
          src={item.img_url}
          alt="lodg_sub_list_img"
          width={800}
          height={800}
        />
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
        isClick.exp || isClick.lodg ? styles.sub_list : styles.sub_list_off
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
