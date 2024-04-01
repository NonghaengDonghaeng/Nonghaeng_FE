import Image from "next/image";
import Link from "next/link";
import styles from "./lodglist.module.css";
import region_img from "img/region/orange.png";

type propsType = {
  content: {
    tour_id: number;
    tour_name: string;
    area_name: string;
    room_type_name: string;
    one_line_intro: string;
    min_price: number;
    max_price: number;
    img_url: string;
  }[];
};

export default function LodgList({ content }: propsType) {
  const lodgList = content.map((item, index) => (
    <li key={index}>
      <Link href={`/pages/detail/lodg?lodg_id=${item.tour_id}`}>
        <div>
          <img src={item.img_url} />
          <span>
            <Image src={region_img} alt="region_img" />
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
