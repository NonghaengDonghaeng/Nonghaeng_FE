import { useEffect, useState } from "react";
import styles from "./ExpCommentList.module.css";
import Paging from "@/common/components/Paging/Paging";
import { pageStateType } from "@/app/(_route)/trip/(types)/pageStateType";
import { expCommentListDataType } from "../../(types)/expCommentListType";
import expCommentData from "@/db/expdata/review.json";
import Link from "next/link";
import { getExpCommentList } from "../../(api)/getExpCommentListApi";
import CustomImage from "@/common/components/CustomImage/CustomImage";

type PropsType = { expId: number };

export default function ExpCommentList({ expId }: PropsType) {
  const [pageState, setPageState] = useState<pageStateType>({
    pageIndex: 1,
  });

  const [resData, setResData] = useState<expCommentListDataType>();

  useEffect(() => {
    getExpCommentList({
      expId,
    }).then((res) => {
      setResData(res?.data);
    });
  }, [pageState.pageIndex]);

  const commentList = resData?.content.map((item, index) => (
    <li key={index}>
      <Link href="/commu/review">
        <CustomImage src={item.img_url} />
        <div>
          <span>{item.exp_name}</span>
          <h1>{item.title}</h1>
          <h2>{item.content}</h2>
          <div>
            <span>{item.author}</span>
            <span>{item.create_date}</span>
          </div>
        </div>
      </Link>
    </li>
  ));

  return (
    <div className={styles.exp_comment}>
      <ul>{commentList}</ul>
      <Paging
        pageState={pageState}
        setPageState={setPageState}
        totalPages={resData?.totalPages}
      />
    </div>
  );
}
