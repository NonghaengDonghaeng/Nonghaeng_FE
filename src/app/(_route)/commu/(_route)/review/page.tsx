"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import ListTitle from "@/components/ListTitle/ListTitle";
import { pageStateType } from "@/app/(_route)/trip/(types)/pageStateType";
import Paging from "@/components/Paging/Paging";
import NoticeList from "../../(components)/NoticeList";
import useSetUrl from "@/hooks/useSetUrl";

export default function Page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();

  const [pageState, setPageState] = useState<pageStateType>({
    pageIndex: Number(searchParams.get("page_index")) || 1,
    state: false,
    isClick: false,
  });

  const [resData, setResData] = useState<NoticeListType>();
  const [visible, setVisible] = useState(false);

  return <section className={styles.notice_list}>
    <ListTitle
        title="농행후기"
        pageState={pageState}
        setPageState={setPageState}
    />
    <hr/>
    <article className={visible ? "isvisible" : "isinvisible"}>
    </article>
    <Paging
        pageState={pageState}
        setPageState={setPageState}
        totalPages={resData?.totalPages}
    />
  </section>
}
