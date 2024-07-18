"use client";
import { useState } from "react";
import SubList from "../SubList/SubList";
import styles from "./TourInfo.module.css";

import {StarIc, LinkIc, LocationIc, ExpIc, RoomIc} from "public/svg";
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
          <StarIc/>
        </span>
      </h1>
      <h2>{tourInfo?.summary}</h2>
      <div>
        <ul>
          {/* <li>
            <Tell_orange_Ic />
          </li> */}
          <li>
            <LinkIc/>
            {tourInfo?.homepage_url}
          </li>
          <li>
            <LocationIc/>
            {tourInfo?.address}
          </li>
        </ul>
        <div>
          <button
            className={isClick.exp ? styles.on : styles.off}
            onClick={() => setIsClick({exp: !isClick.exp, room: false})}
          >
            <ExpIc/>
            <span>
              체험
              <label>{tourInfo?.exp_summary_list.length}</label>
            </span>
          </button>
          <button
            className={isClick.room ? styles.on : styles.off}
            onClick={() => setIsClick({exp: false, room: !isClick.room})}
          >
            <RoomIc />
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
