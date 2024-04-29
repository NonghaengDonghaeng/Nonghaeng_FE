import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./DetailImg.module.css";

type DetailImgPropsType = {
  imgUrl: string[] | undefined;
};

export default function DetailImg({ imgUrl }: DetailImgPropsType) {
  const [mainImg, setMainImgUrl] = useState<string | any>();

  useEffect(() => {
    if (imgUrl) {
      setMainImgUrl(imgUrl[0]);
    }
  }, [imgUrl]);

  const subImgList = imgUrl?.map((item, index) => (
    <li
      key={index}
      onClick={() => setMainImgUrl(item)}
      className={mainImg == item ? styles.img_on : styles.img_off}
    >
      <Image src={item} alt="sub_img" width={800} height={800}></Image>
    </li>
  ));

  return (
    <div className={styles.detail_img}>
      {mainImg && (
        <Image
          src={mainImg}
          alt="main_img"
          width={800}
          height={800}
          priority={true}
        ></Image>
      )}
      <ul>{subImgList}</ul>
    </div>
  );
}
