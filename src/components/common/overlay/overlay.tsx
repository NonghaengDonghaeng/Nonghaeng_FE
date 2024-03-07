import styles from "./.module.css";

type isClickType = {
  isClick: boolean;
};

export default function Overlay({ isClick }: isClickType) {
  return <div className={isClick ? styles.on : styles.off}></div>;
}
