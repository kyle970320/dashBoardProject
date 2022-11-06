import React from 'react';
import DateApi from '../../components/DateApi';
import MainChart from './MainChart';
import MainData from './MainData';

const MainPage = () => {
  return (
    <div>
      <DateApi></DateApi>
      <div>
        <MainData/> 
        <div>
          <MainChart/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;