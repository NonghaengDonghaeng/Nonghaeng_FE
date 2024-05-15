import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import styles from "./CustomRangeCalendar.module.css";
import { setBooleanType } from "@/common/types/setStateType";

type PropsType = {
  setCheck_in: any;
  setCheck_out: any;
  isClick: boolean;
  setIsClick: setBooleanType;
};

export function CustomRangeCalendar({
  setCheck_in,
  setCheck_out,
  isClick,
  setIsClick,
}: PropsType) {
  const changeDate = (e: any) => {
    const startDateFormat = moment(e[0]).format("YYYY-MM-DD");
    const endDateFormat = moment(e[1]).format("YYYY-MM-DD");
    setCheck_in(startDateFormat);
    setCheck_out(endDateFormat);
    setIsClick(!isClick);
  };

  return (
    <Calendar
      onChange={changeDate}
      selectRange={true}
      formatMonthYear={(locale, date) => moment(date).format("YYYY-MM")}
      formatShortWeekday={(locale, date) =>
        ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
      }
      formatDay={(locale, date) => moment(date).format("DD")}
      calendarType="gregory"
      next2Label={null}
      prev2Label={null}
      showNeighboringMonth={false}
      className={`${styles.range_calendar} ${isClick ? styles.on : styles.off}`}
    />
  );
}
