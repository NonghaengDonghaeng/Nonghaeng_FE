import styles from "./Title.module.css";

type PropsType = {
  title: string;
};

function Title({ title }: PropsType) {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
    </div>
  );
}

export default Title;
