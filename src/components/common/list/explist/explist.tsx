import Image from "next/image";
import Link from "next/link";
import styles from "./explist.module.css";
import region_img from "img/region/orange.png";

type cotentType = {
  content: {
    experience_id: number;
    experience_name: string;
    price: number;
    min_participant: number;
    max_participant: number;
    area_name: string;
    tour_name: string;
    summary: string;
    img_url: string;
  }[];
};

export default function ExpList({ content }: cotentType) {
  const expList = content.map((item, index) => (
    <li key={index}>
      <Link href={`/pages/detail/exp?exp_id=${item.experience_id}`}>
        <div>
          <img src={item.img_url} />
          <span>
            <Image src={region_img} alt="region_img" />
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
