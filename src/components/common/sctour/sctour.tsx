import { useState } from "react";
import Image from "next/image";
import styles from "./.module.css";
import filter_img from "img/header/sitemapImg.png";
import Overlay from "../overlay/overlay";
import { category, region } from "@/storage/name";

export default function ScTour({ selectItem, setSelectItem, onSubmit }) {
  const [isClick, setIsClick] = useState(false);

  function updateRegion(item: string) {
    if (selectItem.region.includes(item)) {
      const newSelectRegion = selectItem.region.filter(
        (region: string) => region !== item
      );
      setSelectItem({ ...selectItem, region: newSelectRegion });
    } else {
      const newSelectRegion = [...selectItem.region, item];
      console.log(newSelectRegion);
      setSelectItem({ ...selectItem, region: newSelectRegion });
    }
  }
  const regionList = region.map((item, index) => (
    <li key={index}>
      <input type="checkbox" onClick={() => updateRegion(item)} />
      {item}
    </li>
  ));

  return (
    <>
      <button className={styles.sctour_button} onClick={() => setIsClick(true)}>
        <Image src={filter_img} alt="filter_img" priority={true}></Image>
        <span>상세검색</span>
      </button>
      <div className={isClick ? styles.sctour_on : styles.sctour_off}>
        <button onClick={() => setIsClick(false)}>취소</button>
        <ul>{regionList}</ul>
        <button onClick={onSubmit}>검색</button>
      </div>
      <Overlay isClick={isClick} />
    </>
  );
}
