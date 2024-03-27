import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import { DayRange } from "react-modern-calendar-datepicker";

// TODO: 리팩토링시 defaultProps경고창 오류 해결하기
const CustomRangeCalendar = () => {
  const [dayRange, setDayRange] = React.useState<DayRange>({
    from: null,
    to: null,
  });
  return (
    <Calendar value={dayRange} onChange={setDayRange} shouldHighlightWeekends />
  );
};

export default CustomRangeCalendar;
