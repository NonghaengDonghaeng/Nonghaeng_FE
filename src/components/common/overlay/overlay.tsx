import styles from "./.module.css";
import { isClickType } from "@/types/eventtype";

export default function Overlay({ isClick }: isClickType) {
  return <div className={isClick ? styles.on : styles.off}></div>;
}
