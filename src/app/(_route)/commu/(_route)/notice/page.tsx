"use client";
import { useEffect, useState } from "react";
import getNoticeListApi from "../../(api)/getNoticeListApi";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import ListTitle from "@/common/components/ListTitle/ListTitle";
import { pageStateType } from "@/app/(_route)/trip/(types)/pageStateType";
import Paging from "@/common/components/Paging/Paging";
import noticeListData from "@/db/noticedata/noticelistdata.json";
import NoticeList from "../../(components)/NoticeList";

export default function Page() {
  const searchParams = useSearchParams();

  const [pageState, setPageState] = useState<pageStateType>({
    searchWord: searchParams.get("search_word") || "",
    pageIndex: Number(searchParams.get("page_index")) || 1,
  });

  const [resData, setResData] = useState<NoticeListType>();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getNoticeListApi().then((res) => {
      if (res?.status == 200) {
        setResData(res?.data);
        setVisible(true);
      }
    });
    // setResData(noticeListData);
    // setVisible(true);
  }, []);

  return (
    <section className={styles.notice_list}>
      <ListTitle
        title="공지사항"
        pageState={pageState}
        setPageState={setPageState}
      />
      <hr />
      <article className={visible ? "isvisible" : "isinvisible"}>
        <NoticeList content={resData?.content} />
      </article>
      <Paging
        pageState={pageState}
        setPageState={setPageState}
        totalPages={resData?.totalPages}
      />
    </section>
  );
}
