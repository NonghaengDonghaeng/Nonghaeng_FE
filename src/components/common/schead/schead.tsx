import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearch } from "@/hooks/useHook";
import styles from "./.module.css";
import { formType, inputType } from "@/types/eventtype";
import searchImg from "img/header/searchImg.png";

export default function ScHead() {
  const router = useRouter();
  const search = useSearch();

  const [search_word, setSearch_word] = useState("");
  function onChange(e: inputType) {
    setSearch_word(e.target.value);
  }

  function onSubmit(e: formType) {
    e.preventDefault();
    search({ region: "", category: "", search_word: search_word });
  }

  return (
    <form className={styles.header_search} onSubmit={onSubmit}>
      <input
        placeholder="알고 싶은 정보가 있으세요?"
        onChange={onChange}
      ></input>
      <button type="submit">
        <Image src={searchImg} alt="searchImg"></Image>
      </button>
    </form>
  );
}
