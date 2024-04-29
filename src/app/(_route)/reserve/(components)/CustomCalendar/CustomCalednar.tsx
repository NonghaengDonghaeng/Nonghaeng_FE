import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import styles from "./CustomCalendar.module.css";

type PropsType = {
  isClick?: boolean;
  setIsClick?: any;
  day?: any;
  setDay?: any;
};

export default function CustomCalendar({
  day,
  setDay,
  isClick,
  setIsClick,
}: PropsType) {
  const onChange = (e: any) => {
    const selectDay = moment(e).format("YYYY-MM-DD");
    setDay(selectDay);
    setIsClick(!isClick);
  };

  return (
    <Calendar
      value={day}
      onChange={onChange}
      formatMonthYear={(locale, date) => moment(date).format("YYYY-MM")}
      formatShortWeekday={(locale, date) =>
        ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
      }
      formatDay={(locale, date) => moment(date).format("DD")}
      calendarType="gregory"
      next2Label={null}
      prev2Label={null}
      showNeighboringMonth={false}
      className={isClick ? styles.on : styles.off}
    />
  );
}
