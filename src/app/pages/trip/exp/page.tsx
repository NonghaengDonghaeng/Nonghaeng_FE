"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSetUrl from "@/hooks/useSetUrl";
import { ScDetail, ScDetailOn } from "@/components/common/Search/Search";
import Overlay from "@/components/common/Overlay/Overlay";
import { ExpList } from "@/components/common/List/List";
import Paging from "@/components/common/Paging/Paging";
import styles from "./page.module.css";
import { pageStateType } from "@/types/pageStateType";
import { expListPageDatatype } from "@/types/dataType/listPageDataType";
import expListPageResData from "@/db/expdata/list.json";
import axios from "axios";

export default function Page() {
  const searchParams = useSearchParams();
  const setUrl = useSetUrl();

  const [pageState, setPageState] = useState<pageStateType>({
    isClick: false,
    state: false,
    page_type: "exp",
    page_index: Number(searchParams.get("page_index")) || 1,
    search_word: searchParams.get("search_word") || "",
    region: Array.from(new Set(searchParams.getAll("region"))) || [],
    category: Array.from(new Set(searchParams.getAll("category"))) || [],
    max_cost: searchParams.get("max_cost") || "",
    min_cost: searchParams.get("min_cost") || "",
  });

  const [resData, setResData] = useState<expListPageDatatype>();

  async function expApi() {
    try {
      const token = localStorage.getItem("jwt");
      console.log(pageState.search_word);
      const res = await axios.get(
        `http://localhost:8080/experiences?page=${
          Number(pageState.page_index) - 1
        }&keyword=${pageState.search_word}`,
        { headers: { Authorization: token } }
      );
      console.log(res);
      setResData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  // api useEffect
  useEffect(() => {
    setUrl({ urlItem: pageState });
    console.log("농촌체험 메인 api");
    expApi();
    // setResData(expListPageResData);
  }, [pageState.state, pageState.page_index]);

  return (
    <>
      <section className={styles.exp_main}>
        <div>
          <h1>농촌체험</h1>
          <ScDetailOn pageState={pageState} setPageState={setPageState} />
          <ScDetail pageState={pageState} setPageState={setPageState} />
          <Overlay isClick={pageState.isClick} />
        </div>
        <hr></hr>
        <article>
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
