import React, { useState } from 'react';

const useReduceStatus = (data) => {
  const [stateListStatus, setListStatus] = useState(data);
  const [stateIsLoding, setIsLoding] = useState(false);
  const reducer = (targetValue) => {
    window.sessionStorage.setItem('managementStatus',targetValue);
    if (targetValue === 'all') {
      setIsLoding(true)
      setTimeout(()=>{
        setIsLoding(false)
      },1000)
      return setListStatus(data.filter(el => el.status));
    } else if (targetValue === 'active') {
      setIsLoding(true)
      setTimeout(()=>{
        setIsLoding(false)
      },1000)
      return setListStatus(data.filter(el => el.status === 'active'));
    } else {
      setIsLoding(true)
      setTimeout(()=>{
        setIsLoding(false)
      },1000)
      return setListStatus(data.filter(el => el.status === 'ended'));
    }
  }
  return [stateIsLoding, stateListStatus, reducer, setListStatus]
};

export default useReduceStatus;