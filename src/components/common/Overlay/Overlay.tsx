import styles from "./Overlay.module.css";

type PropsType = {
  isClick: boolean | undefined;
};

export default function Overlay({ isClick }: PropsType) {
  return <div className={isClick ? styles.on : styles.off}></div>;
}
