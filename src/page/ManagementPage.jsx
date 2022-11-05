import React, { useState } from 'react';
import Loading from '../components/Loading';
import useReduceStatus from '../hooks/useReduceStatus';
import listData from '../store/add-list-data-set.json'

const ManagementPage = () => {
  const [stateIsLoding, stateListStatus, dispatch] = useReduceStatus(listData.ads);
  // console.log(listData.ads);
  // console.log(stateListStatus)
  console.log(stateIsLoding)
  return (
    <>
      <select onChange={e=>(dispatch(e.target.value))}>
        <option value="all">전체광고</option>
        <option value="active">진행중</option>
        <option value="ended">중단됨</option>
      </select>
      <div>
        {stateIsLoding&&<Loading/>}
        {!stateIsLoding&&stateListStatus.map((data) => {
          return (
            <div key={data.id}>
              <h3>{data.title}</h3>
              <dl>
                <dt>안녕</dt>
                <dd>하이</dd>
                <dt>안녕</dt>
                <dd>하이</dd>
                <dt>안녕</dt>
                <dd>하이</dd>
              </dl>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default ManagementPage;