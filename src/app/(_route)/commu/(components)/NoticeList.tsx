import Link from "next/link";
import styles from "./NoticeList.module.css";

type PropsType = {
  content: NoticeListContentType | undefined;
};

function NoticeList({ content }: PropsType) {
  const noticeList = content?.map((item, index) => (
    <li key={index}>
      <span>{`[${item.title}]`}</span>
      <div>
        <span>{item.author}</span>
        <span>{item.create_time}</span>
      </div>
    </li>
  ));

  return <ul className={styles.list_comp}>{noticeList}</ul>;
}

export default NoticeList;
