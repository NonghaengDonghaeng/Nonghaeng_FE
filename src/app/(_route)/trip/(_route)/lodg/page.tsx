"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import ListTitle from "@/common/components/ListTitle/ListTitle";
import LodgList from "@/common/components/LodgList/LodgList";
import Paging from "@/common/components/Paging/Paging";
import styles from "./page.module.css";
import { pageStateType } from "../../(types)/pageStateType";
import { lodgListDataType } from "@/common/types/lodgListDataType";
import { getLodgListApi } from "../../(api)/getLodgListApi";
import lodgListPageResData from "@/db/lodgdata/list.json";

export default function Page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();

  const [pageState, setPageState] = useState<pageStateType>({
    isClick: false,
    state: false,
    pageType: "lodg",
    pageIndex: Number(searchParams.get("page_index")) || 1,
    searchWord: searchParams.get("search_word") || "",
    region: Array.from(new Set(searchParams.getAll("region"))) || [],
    category: Array.from(new Set(searchParams.getAll("category"))) || [],
    maxCost: searchParams.get("max_cost") || "",
    minCost: searchParams.get("min_cost") || "",
  });

  const [resData, setResData] = useState<lodgListDataType>();
  const [visible, setVisible] = useState(false);

  // api useEffect1
  useEffect(() => {
    setUrl({ urlItem: pageState });
    getLodgListApi({
      pageIndex: pageState.pageIndex,
      searchWord: pageState.searchWord,
    }).then((res) => {
      if (res?.status == 200) {
        setResData(res?.data);
        setVisible(true);
      }
    });
  }, [pageState.state, pageState.pageIndex]);

  return (
    <section className={styles.lodg_main}>
      <ListTitle
        title="농촌숙박"
        pageState={pageState}
        setPageState={setPageState}
      />
      <hr></hr>
      <article className={visible ? "isvisible" : "isinvisible"}>
        <LodgList content={resData?.content} />
      </article>
      <Paging
        pageState={pageState}
        setPageState={setPageState}
        totalPages={resData?.totalPages}
      />
    </section>
  );
}
