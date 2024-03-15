import styles from "./.module.css";
import { pageStateType } from "@/types/pageState";

type propsType = {
  pageState: pageStateType;
};

export default function Overlay({ pageState }: propsType) {
  return <div className={pageState.isClick ? styles.on : styles.off}></div>;
}
