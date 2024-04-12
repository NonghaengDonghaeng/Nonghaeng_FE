import styles from "./overlay.module.css";

type PropsType = {
  isClick: boolean;
};

export default function Overlay({ isClick }: PropsType) {
  return <div className={isClick ? styles.on : styles.off} />;
}
