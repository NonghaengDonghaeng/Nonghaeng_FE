import { useState } from "react";
import Image from "next/image";
import CustomRangeCalendar from "../../customcalendar/customrangecalendar";
import styles from "./.module.css";
import InputCount from "../../inputcount/inputcount";
export default function SubLodgList() {
  const [isClick, setIsClick] = useState(false);
  const [dayRange, setDayRange] = useState({ from: null, to: null });
  const [personCount, setPersonCount] = useState<number>(0);
  const [roomCount, setRoomCount] = useState(0);

  return (
    <div className={styles.sub_lodg_list}>
      <ul>
        <li>
          <input />
          <CustomRangeCalendar />
        </li>
        <li>
          <InputCount count={personCount} setCount={setPersonCount} />
        </li>
        <li>
          <input />
        </li>
      </ul>
      <ul></ul>
    </div>
  );
}
