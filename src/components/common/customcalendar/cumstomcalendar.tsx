import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import moment from "moment";

function CustomCalendar() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const changeDate = (e) => {
    // event를 받아서 yyyy/mm/dd 형식으로 일자를 포맷팅해줌
    // e[0]은 사용자가 여행 일자로 선택한 시작 일자가 들어감
    // e[1]은 사용자가 여행 마치는 일자로 선택한 일자가 들어감
    const startDateFormat = moment(e[0]).format("YYYY/MM/DD");
    const endDateFormat = moment(e[1]).format("YYYY/MM/DD");
    // 여행 시작일자와 마치는일자의 값이 변할 때마다 값을 다시 세팅해줌
    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
  };

  return (
    <div>
      <h2>나의 달력</h2>
      <Calendar
        onChange={changeDate}
        selectRange={true}
        locale="en"
        formatDay={(locale, date) => moment(date).format("DD")}
        // formatShortWeekday={(locale, date) => moment(locale).format("DD")}
      />
    </div>
  );
}

export default CustomCalendar;
