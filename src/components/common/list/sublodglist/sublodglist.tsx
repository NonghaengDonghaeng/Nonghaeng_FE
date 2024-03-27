import { useState } from "react";
import React from "react";
import Image from "next/image";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import styles from "./.module.css";
import ClickCount from "../../clickcount/clickcount";
import { DayRange } from "react-modern-calendar-datepicker";

export default function SubLodgList() {
  const date = new Date();
  const [isClick, setIsClick] = useState(false);
  const [dayRange, setDayRange] = React.useState<DayRange>({
    from: {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDay(),
    },
    to: {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDay(),
    },
  });
  const [personCount, setPersonCount] = useState<number>(0);
  const [roomCount, setRoomCount] = useState(0);

  return (
    <div className={styles.sub_lodg_list}>
      <ul>
        <li>
          <div onClick={() => setIsClick(true)}>
            {`${dayRange.from?.year}, ${dayRange.from?.month}, ${dayRange.from?.day}`}
            {" ~ "}
            {`${dayRange.to?.year}, ${dayRange.to?.month}, ${dayRange.to?.day}`}
          </div>
          <Calendar
            calendarClassName={`${isClick ? styles.on : styles.off}`}
            value={dayRange}
            onChange={setDayRange}
            shouldHighlightWeekends
          />
        </li>
        <li>
          <ClickCount count={personCount} setCount={setPersonCount} />
          <ClickCount count={roomCount} setCount={setRoomCount} />
        </li>
      </ul>
      <ul></ul>
    </div>
  );
}
