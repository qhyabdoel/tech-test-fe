// components/DatePicker.tsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import iconCalendar from "@/assets/icons/icon-calendar.svg";

const CustomDatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div
      className="
      px-4 py-1.5 border border-gray-300 rounded-md shadow-sm 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
      flex w-56
    "
    >
      <DatePicker
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
        dateFormat="d MMMM yyyy"
        placeholderText="Select a date"
        className="outline-none select-none mt-1"
      />
      <Image alt="calendar" src={iconCalendar} />
    </div>
  );
};

export default CustomDatePicker;
