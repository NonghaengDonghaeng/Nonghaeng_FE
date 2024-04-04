import Calendar from "react-calendar";
import moment from "moment";
import styles from "./calendar.module.css";

type PropsType = {
  setCheck_in: any;
  setCheck_out: any;
  isClick: boolean;
};

export default function CustomRangeCalendar({
  setCheck_in,
  setCheck_out,
  isClick,
}: PropsType) {
  const changeDate = (e: any) => {
    const startDateFormat = moment(e[0]).format("YYYY-MM-DD");
    const endDateFormat = moment(e[1]).format("YYYY-MM-DD");
    setCheck_in(startDateFormat);
    setCheck_out(endDateFormat);
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
      className={isClick ? styles.on : styles.off}
    />
  );
}
