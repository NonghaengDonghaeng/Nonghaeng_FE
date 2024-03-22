import styles from "./.module.css";

export default function Overlay({ isClick }: any) {
  return <div className={isClick ? styles.on : styles.off} />;
}
