import "react-modern-calendar-datepicker/lib/DatePicker.css";
import React, { useState } from "react";
import { Calendar, DayRange } from "react-modern-calendar-datepicker";

const CustomCalendar = () => {
  const [selectedDayRange, setSelectedDayRange] = useState<DayRange>({
    from: null,
    to: null,
  });
  return (
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      shouldHighlightWeekends
    />
  );
};

export default CustomCalendar;
