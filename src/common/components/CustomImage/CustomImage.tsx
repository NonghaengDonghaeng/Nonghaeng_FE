"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./CustomImage.module.css";
// 이미지가 없는 경우 렌더링될 기본 이미지
import defaultImg from "img/errorImg.png";

type PropsType = {
  src: string | null;
};

// 이미지가 없는 경우 에뤄 발생 -> true -> 기본이미지 렌더링
export default function CustomImage({ src }: PropsType) {
  const [isImgError, setIsImgError] = useState<boolean>(true);

  useEffect(() => {
    if (src == null || src == "") {
      setIsImgError(true);
    } else setIsImgError(false);
  }, [src]);

  return (
    <Image
      className={styles.img}
      src={isImgError || src == null ? defaultImg : src}
      alt="img"
      width={800}
      height={800}
      priority={true}
      // onError={() => setIsImgError(true)}
    />
  );
}
