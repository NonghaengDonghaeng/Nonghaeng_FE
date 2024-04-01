"use client";
import { useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import Image from "next/image";
import { useChange } from "@/hooks/useChange";
import styles from "./scmain.module.css";
import ScButton from "@/components/common/search/scbutton/scbutton";
import { region, category } from "@/storage/name";
import click_false from "img/main/click_false.png";
import click_true from "img/main/click_true.png";
import { formType, inputType } from "@/types/eventtype";
import { pageStateType } from "@/types/pageState";

export default function ScMain() {
  const search = useSearch();
  const change = useChange();

  const [pageState, setPageState] = useState<pageStateType>({
    search_word: "",
    region: "지역선택",
    category: "유형선택",
  });
  const [isClick, setIsClick] = useState({ region: false, category: false });

  function onSubmit(e: formType) {
    e.preventDefault();
    search({ pageState });
  }

  const regionList = region.map((item, index) => (
    <li
      key={index}
      onClick={() => setPageState({ ...pageState, region: item })}
    >
      {item}
    </li>
  ));
  const categoryList = category.map((item, index) => (
    <li
      key={index}
      onClick={() => setPageState({ ...pageState, category: item })}
    >
      {item}
    </li>
  ));

  return (
    <form className={styles.search_main} onSubmit={onSubmit}>
      <div
        className={isClick.region ? styles.on : styles.off}
        onClick={() => setIsClick({ ...isClick, region: !isClick.region })}
      >
        <label>
          {pageState.region}
          <Image
            src={isClick.region ? click_true : click_false}
            alt="click_false"
          ></Image>
        </label>
        <ul>{regionList}</ul>
      </div>
      <div
        className={isClick.category ? styles.on : styles.off}
        onClick={() => setIsClick({ ...isClick, category: !isClick.category })}
      >
        <label>
          {pageState.category}
          <Image
            src={isClick.category ? click_true : click_false}
            alt="click_false"
          ></Image>
        </label>
        <ul>{categoryList}</ul>
      </div>
      <input
        placeholder="검색어를 입력해보세요."
        name="search_word"
        onChange={(e: inputType) => change({ pageState, setPageState, e })}
      ></input>
      <ScButton />
    </form>
  );
}
