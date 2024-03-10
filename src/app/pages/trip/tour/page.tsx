"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Nav from "@/components/layout/nav/nav";
import { tripHref } from "@/storage/href";
import styles from "./.module.css";
import ScDetail from "@/components/common/scdetail/scdetail";
import ScTour from "@/components/common/sctour/sctour";
import Overlay from "@/components/common/overlay/overlay";
import region_img from "img/region/orange.png";
import tour_list from "@/db/tourdata/list.json";
import Link from "next/link";
import exp_img from "img/exp/orange.png";
import lodg_img from "img/lodg/orange.png";

export default function page() {
  const router = useRouter();

  const [isClick, setIsClick] = useState(false);

  function onSubmit() {
    console.log("농촌관광 api요청", selectItem);
  }

  const [selectItem, setSelectItem] = useState<{
    region: string[];
    category: string[];
    search_word: string;
  }>({
    region: [],
    category: [],
    search_word: "",
  });

  const tourList = getTourList(tour_list.content);

  return (
    <>
      <Nav href={tripHref} />
      <main id="main">
        <section className={styles.tour_list}>
          <div>
            <h1>농촌관광</h1>
            <ScDetail setIsClick={setIsClick} />
            <ScTour
              isClick={isClick}
              setIsClick={setIsClick}
              selectItem={selectItem}
              setSelectItem={setSelectItem}
              onSubmit={onSubmit}
            />
            <Overlay isClick={isClick} />
          </div>
          <hr></hr>
          <article>
            <ul>{tourList}</ul>
          </article>
        </section>
      </main>
    </>
  );
}

const getTourList = (content) => (
  <>
    {content.map((item, index) => (
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
    ))}
  </>
);
