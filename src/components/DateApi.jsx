import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from '../style/datepicker.module.css';

const DateApi = () => {
  const [startDate, setStartDate] = useState(new Date("2022/02/08"));
  const [endDate, setEndDate] = useState(new Date("2022/02/10"));
  return (
    <div className={style.dateContainer}>
      <ReactDatePicker
        className={style.date}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <div>~</div>
      <ReactDatePicker
        className={style.date}
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </div>
  );
};

export default DateApi;