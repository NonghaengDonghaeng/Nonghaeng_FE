import { useEffect, useState } from "react";
import { cancelReserveApi } from "../../(api)/cancelReserveApi";
import { useChange } from "@/hooks/useChange";
import styles from "./EditReserve.module.css";
import editReviewApi from "../../(api)/editReview";
import { inputType } from "@/common/types/eventType";

type PropsType = {
  id: number;
};

function EditReserve({ id }: PropsType) {
  const change = useChange();

  const [isClick, setIsClick] = useState(false);
  const [reviewItem, setReviewItem] = useState<{
    reservation_id?: number;
    title?: string;
    content?: string;
  }>({
    reservation_id: id,
    title: "",
    content: "",
  });

  useEffect(() => setReviewItem({ ...reviewItem, reservation_id: id }), [id]);

  const editReview = () => {
    editReviewApi({ reveiwItem: reviewItem }).then((res) => {
      if (res?.status == 200) {
        alert("후기가  작성되었습니다.");
        setIsClick(false);
      }
    });
  };

  const cancelReserve = (id: number) => {
    cancelReserveApi({ id: id }).then((res) => console.log(res?.data));
  };

  return (
    <div className={styles.edit_reserve}>
      <form>
        <div
          onChange={(e: inputType) =>
            change({ changeItem: reviewItem, setChangeItem: setReviewItem, e })
          }
          className={isClick ? styles.form_on : styles.form_off}
        >
          <input placeholder="제목" name="title"></input>
          <input placeholder="후기내용" name="content"></input>
        </div>
        <div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (!isClick) {
                setIsClick(!isClick);
              } else editReview();
            }}
          >
            {isClick ? "작성완료" : "후기작성"}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!isClick) {
                cancelReserve(id);
              } else {
                setIsClick(!isClick);
              }
            }}
          >
            {isClick ? "작성취소" : "예약취소"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditReserve;
