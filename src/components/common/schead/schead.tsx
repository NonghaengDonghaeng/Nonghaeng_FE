import Image from "next/image";
import styles from "./.module.css";
import searchImg from "img/header/searchImg.png";

export default function ScHead() {
  return (
    <form className={styles.header_search}>
      <input placeholder="알고 싶은 정보가 있으세요?"></input>
      <button>
        <Image src={searchImg} alt="searchImg"></Image>
      </button>
    </form>
  );
}
