import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';
import { chooseEndDate, chooseStartDate, mainLode } from '../recoil/atoms';

const DateApi = () => {
  const [startDate, setStartDate] = useRecoilState(chooseStartDate)
  const [endDate, setEndDate] = useRecoilState(chooseEndDate)
  const [mainLoading, setMainLoding] = useRecoilState(mainLode)

  const handleStartDate = (e)=>{
    setMainLoding(true)
    setStartDate(new Date(e.target.value))
    setTimeout(() => {
      setMainLoding(false)
    }, 1000);
  }

  const handleEndDate = (e)=>{
    setMainLoding(true)
    setEndDate(new Date(e.target.value))
    setTimeout(() => {
      setMainLoding(false)
    }, 1000);
  }
  return (
    <div>
      <input type="date" onChange={e => handleStartDate(e)}/>
      <input type="date" onChange={e => handleEndDate(e)}/>
    </div>
  );
};

export default DateApi;