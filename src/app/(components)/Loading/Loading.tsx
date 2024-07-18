import styles from "./Loading.module.css";
import {HomeIc} from "public/svg";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <HomeIc />
    </div>
  );
}
