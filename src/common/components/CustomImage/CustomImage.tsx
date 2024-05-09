"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./CustomImage.module.css";
import defaultImg from "img/Group 53 (1).png";

type PropsType = {
  src: string;
};

export default function CustomImage({ src }: PropsType) {
  const [isImgError, setIsImgError] = useState<boolean>(false);
  return (
    <Image
      className={`${isImgError ? styles.err_img : styles.img}`}
      src={isImgError ? defaultImg : src}
      alt="img"
      width={800}
      height={800}
      onError={() => setIsImgError(true)}
    />
  );
}
