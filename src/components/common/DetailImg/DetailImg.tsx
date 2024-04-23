import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./DetailImg.module.css";

type DetailImgPropsType = {
  mainImgUrl: string | undefined;
  subImgUrl: string[] | undefined;
};

export default function DetailImg({
  mainImgUrl,
  subImgUrl,
}: DetailImgPropsType) {
  const [mainImg, setMainImgUrl] = useState<string | any>();

  useEffect(() => setMainImgUrl(mainImgUrl), [mainImgUrl]);

  const subImgList = subImgUrl?.map((item, index) => (
    <li key={index} onClick={() => setMainImgUrl(item)}>
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
