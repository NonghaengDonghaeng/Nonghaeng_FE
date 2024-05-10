import { useEffect, useState } from "react";
import CustomImage from "@/common/components/CustomImage/CustomImage";
import styles from "./DetailImg.module.css";

type PropsType = {
  photoInfo:
    | {
        photo_id: number;
        img_url: string | null;
        representative: boolean;
      }[]
    | undefined;
};

export default function DetailImg({ photoInfo }: PropsType) {
  const [mainImg, setMainImgUrl] = useState<string | null>(null);

  useEffect(() => {
    if (Array.isArray(photoInfo) && photoInfo?.length !== 0) {
      setMainImgUrl(photoInfo[0].img_url);
    }
  }, [photoInfo]);

  const subImgList = photoInfo?.map((item, index) => (
    <li
      key={index}
      onClick={() => setMainImgUrl(item.img_url)}
      className={mainImg == item.img_url ? styles.img_on : styles.img_off}
    >
      <CustomImage src={item.img_url} />
    </li>
  ));

  return (
    <div className={styles.detail_img}>
      <CustomImage src={mainImg} />
      <ul>{subImgList}</ul>
    </div>
  );
}
