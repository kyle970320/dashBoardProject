import React from 'react';
import DateApi from '../../components/DateApi';
import MainData from './MainData';

const MainPage = () => {
  return (
    <div>
      <DateApi></DateApi>
      <div>
        <MainData/> 
        <div>
          그래프자리
        </div>
      </div>
    </div>
  );
};

export default MainPage;