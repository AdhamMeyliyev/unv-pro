import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

const CalendarClock = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(moment().format('LTS'));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment().format('LTS'));
    }, 1000); // Soat har soniyada yangilanadi

    return () => clearInterval(timer);
  }, []);

  const handleDateChange = newDate => setDate(newDate);

  return (
    <div className="calendar-clock">
      <div className="calendar">
        <Calendar
          onChange={handleDateChange}
          value={date}
        />
      </div>
      <div className="clock">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default CalendarClock;
