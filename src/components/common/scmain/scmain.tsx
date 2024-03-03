"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./.module.css";
import ScButton from "@/components/common/scbutton/scbutton";
import { region, category } from "@/storage/name";
import click_false from "img/main/click_false.png";
import click_true from "img/main/click_true.png";

export default function ScMain() {
  const [isClick, setIsClick] = useState({ region: false, category: false });
  function onClick(name: string) {
    if (name == "region") {
      if (isClick.region == false) setIsClick({ ...isClick, region: true });
      else setIsClick({ ...isClick, region: false });
    } else {
      if (isClick.category == false) setIsClick({ ...isClick, category: true });
      else setIsClick({ ...isClick, category: false });
    }
  }

  const [searchItem, setSearchItem] = useState({
    region: "지역 선택",
    category: "유형 선택",
    search_word: "",
  });
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchItem({
      ...searchItem,
      search_word: e.target.value,
    });
  }

  const regionList = region.map((item, index) => (
    <li
      key={index}
      onClick={() => setSearchItem({ ...searchItem, region: item })}
    >
      {item}
    </li>
  ));
  const categoryList = category.map((item, index) => (
    <li
      key={index}
      onClick={() => setSearchItem({ ...searchItem, category: item })}
    >
      {item}
    </li>
  ));

  return (
    <form className={styles.home_search}>
      <div
        className={isClick.region ? styles.on : styles.off}
        onClick={() => onClick("region")}
      >
        <label>
          {searchItem.region}
          <Image
            src={isClick.region ? click_true : click_false}
            alt="click_false"
          ></Image>
        </label>
        <ul>{regionList}</ul>
      </div>
      <div
        className={isClick.category ? styles.on : styles.off}
        onClick={() => onClick("category")}
      >
        <label>
          {searchItem.category}
          <Image
            src={isClick.category ? click_true : click_false}
            alt="click_false"
          ></Image>
        </label>
        <ul>{categoryList}</ul>
      </div>
      <input placeholder="검색어를 입력해보세요." onChange={onChange}></input>
      <ScButton />
    </form>
  );
}
