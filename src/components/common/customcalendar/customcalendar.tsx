import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { DayValue } from "react-modern-calendar-datepicker";

const CustomCalendar = () => {
  const [selectedDay, setSelectedDay] = React.useState<DayValue>(null);
  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
    />
  );
};

export default CustomCalendar;
