import styles from "./Overlay.module.css";

type PropsType = {
  isClick: boolean | undefined;
  children: Readonly<React.ReactNode>;
};

export default function Overlay({ isClick, children }: PropsType) {
  return <div className={isClick ? styles.on : styles.off}>{children}</div>;
}
