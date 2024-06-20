"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import ListTitle from "@/common/components/ListTitle/ListTitle";
import ExpList from "@/common/components/ExpList/ExpList";
import Paging from "@/common/components/Paging/Paging";
import styles from "./page.module.css";
import { pageStateType } from "../../(types)/pageStateType";
import { expListDatatype } from "@/common/types/expListDataType";
import { getExpListApi } from "../../(api)/getExpListApi";
import expListPageResData from "@/db/expdata/list.json";

export default function Page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();

  const [pageState, setPageState] = useState<pageStateType>({
    isClick: false,
    state: false,
    pageType: "exp",
    pageIndex: Number(searchParams.get("page_index")) || 1,
    searchWord: searchParams.get("search_word") || "",
    region: Array.from(new Set(searchParams.getAll("region"))) || [],
    category: Array.from(new Set(searchParams.getAll("category"))) || [],
    maxCost: searchParams.get("max_cost") || "",
    minCost: searchParams.get("min_cost") || "",
  });

  const [resData, setResData] = useState<expListDatatype>();
  const [visible, setVisible] = useState(false);

  // api useEffect
  useEffect(() => {
    setUrl({ urlItem: pageState });
    getExpListApi({
      pageIndex: pageState.pageIndex,
      searchWord: pageState.searchWord,
    }).then((res) => {
      if (res?.status == 200) {
        setResData(res?.data);
        setVisible(true);
      }
    });
    // setResData(expListPageResData);
  }, [pageState.state, pageState.pageIndex]);

  return (
    <>
      <section className={styles.exp_main}>
        <ListTitle
          title="농촌체험"
          pageState={pageState}
          setPageState={setPageState}
        />
        <hr></hr>
        <article className={visible ? "isvisible" : "isinvisible"}>
          <ExpList content={resData?.content} />
        </article>
        <Paging
          pageState={pageState}
          setPageState={setPageState}
          totalPages={resData?.totalPages}
        />
      </section>
    </>
  );
}
