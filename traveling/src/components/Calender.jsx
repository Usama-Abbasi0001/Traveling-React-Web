// src/Calendar.js

import React, { useState } from "react";
import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderHeader = () => {

    return (
    
   
          <div className="flex justify-between items-center py-2 bg-blue-300">
            <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
              &lt;
            </button>
            <h2 className="text-xl font-bold">
              {format(currentMonth, "MMMM yyyy")}
            </h2>
            <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
              &gt;
            </button>
          </div>
    
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEE";

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`p-2 text-center cursor-pointer ${
              !isSameMonth(day, monthStart)
                ? "text-gray-400"
                : isSameDay(day, selectedDate)
                ? "bg-blue-500 text-white"
                : "text-black"
            }`}
            key={day}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;









     <div
       id="main-div"
       className="w-[1100px] mx-auto  p-5 mt-[2rem] rounded-[10px]"
     >
       <div className="flex">
         <div
           id="main-public"
           className="flex space-x-3 w-[150px] p-2 text-white hover:text-orange-600"
         >
           <div>
             <i class="fa-solid fa-earth-americas"></i>
           </div>
           <div>Public Tours</div>
         </div>

         <div
           id="main-public1"
           className="flex space-x-2 w-[150px] p-2  text-white hover:text-orange-600"
         >
           <div>
             <i class="fa-solid fa-users"></i>
           </div>
           <div>Private Tours</div>
         </div>
       </div>
     </div>;