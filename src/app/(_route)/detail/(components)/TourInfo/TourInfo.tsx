"use client";
import { useState } from "react";
import SubList from "../SubList/SubList";
import styles from "./TourInfo.module.css";
import {
  Email_orange_Ic,
  Exp_orange_Ic,
  Grade_orange_Ic,
  Location_orange_Ic,
  Lodg_orange_Ic,
  Tell_orange_Ic,
} from "icon/index";
import { tourDetailDataType } from "../../(types)/tourDetailDataType";

type PropsType = {
  tourInfo: tourDetailDataType | undefined;
};

function TourInfo({ tourInfo }: PropsType) {
  const [isClick, setIsClick] = useState({ exp: false, room: false });

  return (
    <div className={styles.tour_info}>
      <h1>
        {tourInfo?.name}
        <span>
          <Grade_orange_Ic />
        </span>
      </h1>
      <h2>{tourInfo?.summary}</h2>
      <div>
        <ul>
          {/* <li>
            <Tell_orange_Ic />
          </li> */}
          <li>
            <Email_orange_Ic />
            {tourInfo?.homepage_url}
          </li>
          <li>
            <Location_orange_Ic />
            {tourInfo?.address}
          </li>
        </ul>
        <div>
          <button
            className={isClick.exp ? styles.on : styles.off}
            onClick={() => setIsClick({ exp: !isClick.exp, room: false })}
          >
            <Exp_orange_Ic />
            <span>
              체험
              <label>{tourInfo?.exp_summary_list.length}</label>
            </span>
          </button>
          <button
            className={isClick.room ? styles.on : styles.off}
            onClick={() => setIsClick({ exp: false, room: !isClick.room })}
          >
            <Lodg_orange_Ic />
            <span>
              숙박<label> {tourInfo?.room_summary_list.length}</label>
            </span>
          </button>
        </div>
      </div>
      <SubList
        isClick={isClick}
        expSubListData={tourInfo?.exp_summary_list}
        roomSubListData={tourInfo?.room_summary_list}
      />
    </div>
  );
}

export default TourInfo;
