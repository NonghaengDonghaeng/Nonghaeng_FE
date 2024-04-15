import Image from "next/image";
import styles from "./Loading.module.css";
import loading_img from "icon/favicon.ico";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Image
        className={styles.loading_img}
        src={loading_img}
        alt="loading_img"
        width={800}
        height={800}
        priority={false}
      ></Image>
    </div>
  );
}
