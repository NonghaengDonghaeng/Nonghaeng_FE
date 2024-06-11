import Link from "next/link";
import Overlay from "../Overlay/Overlay";
import Filter from "@/app/(_route)/trip/(components)/Filter/Filter";
import FilterOn from "@/app/(_route)/trip/(components)/FilterOn/FilterOn";
import styles from "./ListTitle.module.css";
import {
  pageStateType,
  setPageStateType,
} from "@/app/(_route)/trip/(types)/pageStateType";
import { More_green_Ic } from "icon/index";

type PropsType = {
  title: string;
  pageState?: pageStateType;
  setPageState?: setPageStateType;
};

function ListTitle({ title, pageState, setPageState }: PropsType) {
  const linkMap: any = {
    농촌관광: { href: "tour", linkTitle: "농촌관광" },
    우수체험: { href: "exp", linkTitle: "농촌체험" },
    농촌체험: { href: "exp", linkTitle: "농촌체험" },
    우수숙박: { href: "lodg", linkTitle: "농촌숙박" },
    농촌숙박: { href: "lodg", linkTitle: "농촌숙박" },
  };

  return (
    <>
      {pageState && setPageState && (
        <>
          <div className={styles.list_title}>
            <h1>{title}</h1>
            <FilterOn pageState={pageState} setPageState={setPageState} />
          </div>
          <Overlay isClick={pageState.isClick}>
            <Filter pageState={pageState} setPageState={setPageState} />
          </Overlay>
        </>
      )}
      {!pageState && (
        <div className={styles.list_title}>
          <h1>{title}</h1>
          <Link href={`trip/${linkMap[title].href}`}>
            {`더 많은 ${linkMap[title].linkTitle} 보러가기`}
            <More_green_Ic />
          </Link>
        </div>
      )}
    </>
  );
}

export default ListTitle;
