import React, { useState } from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import data from '../../store/trend-data-set.json'
import { useRecoilState } from 'recoil';
import { mainLode } from '../../recoil/atoms';
import Loading from '../../components/Loading';

const MainChart = () => {
  const [mainLoading, setMainLoding] = useRecoilState(mainLode)
  const [stateFirstChart, setFirstChart] = useState('roas')
  const [stateSecondChart, setSecondChart] = useState('cpc')

  const handleFirstChart = (e)=>{
    setMainLoding(true)
    setFirstChart(e.target.value)
    setTimeout(() => {
      setMainLoding(false)
    }, 1000);
  }
  const handleSecondChart = (e)=>{
    setMainLoding(true)
    setSecondChart(e.target.value)
    setTimeout(() => {
      setMainLoding(false)
    }, 1000);
  }

  return (
    <React.Fragment>
      <select onChange={handleFirstChart}>
        <option value="roas">ROAS</option>
        <option value="cost">광고비</option>
        <option value="imp">노출수</option>
        <option value="click">클릭수</option>
        <option value="cvr">전환수</option>
        <option value="convValue">매출</option>
      </select>
      <select onChange={handleSecondChart}>
        <option value="cpc">cpc</option>
        <option value="cpa">cpa</option>
      </select>
    <div>
      {mainLoading&&<Loading/>}
      {
        !mainLoading&&
      <LineChart width={730} height={250} data={data.report.daily}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={stateFirstChart} stroke="#8884d8" />
        <Line type="monotone" dataKey={stateSecondChart} stroke="#82ca9d" />
      </LineChart>
      }
    </div>
    </React.Fragment>
  );
};

export default MainChart;