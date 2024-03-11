import Image from "next/image";
import Link from "next/link";
import styles from "./.module.css";
import region_img from "img/region/orange.png";
import exp_img from "img/exp/orange.png";
import lodg_img from "img/lodg/orange.png";

type tourContentType = {
  content: {
    tour_id: number;
    name: string;
    area_name: string;
    tour_type: string;
    count_experience: number;
    count_room: number;
    one_line_intro: string;
    img_url: string;
  }[];
};

export default function TourList({ content }: tourContentType) {
  const tourList = content.map((item, index) => (
    <li key={index}>
      <Link href={`tour/detail?tour_id=${item.tour_id}`}>
        <div>
          <img src={item.img_url} />
          <span>
            <Image src={region_img} alt="region_img" />
            {item.area_name}
          </span>
        </div>
        <div>
          <h1>
            {item.name}
            <span>{item.tour_type}</span>
          </h1>
          <h2>{item.one_line_intro}</h2>
          <div>
            <span>
              <Image src={exp_img} alt="exp_img" />
              체험:{item.count_experience}
            </span>
            <span>
              <Image src={lodg_img} alt="lodg_img" />
              숙박:{item.count_room}
            </span>
          </div>
        </div>
      </Link>
    </li>
  ));
  return <ul className={styles.tour_list}>{tourList}</ul>;
}
