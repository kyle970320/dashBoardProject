import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';
import { chooseEndDate, chooseStartDate } from '../recoil/atoms';

const DateApi = () => {
  const [startDate, setStartDate] = useRecoilState(chooseStartDate)
  const [endDate, setEndDate] = useRecoilState(chooseEndDate)
  return (
    <div>
      <input type="date" onChange={e => setStartDate(new Date(e.target.value))}/>
      <input type="date" onChange={e => setEndDate(new Date(e.target.value))}/>
    </div>
  );
};

export default DateApi;