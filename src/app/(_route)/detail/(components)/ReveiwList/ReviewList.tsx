import { useEffect, useState } from "react";
import styles from "./ReviewList.module.css";
import Paging from "@/common/components/Paging/Paging";
import { pageStateType } from "@/app/(_route)/trip/(types)/pageStateType";
import {
  ExpReviewContentType,
  ReviewListDataType,
  RoomReviewContentType,
} from "../../(types)/expCommentListType";
import expCommentData from "@/db/expdata/review.json";
import Link from "next/link";
import { getReviewtListApi } from "../../(api)/getReviewListApi";
import CustomImage from "@/common/components/CustomImage/CustomImage";

type PropsType = { id: number; type: string };

type ReviewContentType = ExpReviewContentType | RoomReviewContentType;

const isExp = (item: ReviewContentType): item is ExpReviewContentType => {
  return item.type === "experience";
};
const isRoom = (item: ReviewContentType): item is RoomReviewContentType => {
  return item.type === "room";
};

function ReviewtList({ id, type }: PropsType) {
  const [pageState, setPageState] = useState<pageStateType>({
    pageIndex: 1,
  });

  const [resData, setResData] = useState<ReviewListDataType>();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getReviewtListApi({ id, type }).then((res) => {
      if (res?.status == 200) {
        setResData(res?.data);
        setVisible(true);
      }
    });
  }, [pageState.pageIndex]);

  const commentList = resData?.content.map((item, index) => (
    <li key={index}>
      <Link href="/commu/review">
        <CustomImage src={item.img_url} />
        <div>
          {isExp(item) && <span>{item.exp_name}</span>}
          {isRoom(item) && <span>{item.room_name}</span>}
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
    <div
      className={`${styles.review_list} ${
        visible ? "isvisible" : "isinvisible"
      }`}
    >
      <ul>{commentList}</ul>
      <Paging
        pageState={pageState}
        setPageState={setPageState}
        totalPages={resData?.totalPages}
      />
    </div>
  );
}

export default ReviewtList;
