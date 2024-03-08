import { isClickType } from "@/types/eventtype";
import styles from "./.module.css";

export default function Overlay({ isClick }: isClickType) {
  return <div className={isClick ? styles.on : styles.off}></div>;
}
