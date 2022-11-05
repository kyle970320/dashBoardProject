import React, { useState } from 'react';
import Loading from '../../components/Loading';
import { moneyCalc } from '../../hooks/moneyCalc';
import useReduceStatus from '../../hooks/useReduceStatus';
import listData from '../../store/add-list-data-set.json'
import style from '../../style/management.module.css'

const ManagementPage = () => {
  const [stateIsLoding, stateListStatus, dispatch] = useReduceStatus(listData.ads);
  // console.log(listData.ads);
  // console.log(stateListStatus)
  console.log(stateIsLoding)
  return (
    <>
      <select className={style.status} onChange={e=>(dispatch(e.target.value))}>
        <option value="all">전체광고</option>
        <option value="active">진행중</option>
        <option value="ended">중단됨</option>
      </select>
      <div className={style.list}>
        {stateIsLoding&&<Loading/>}
        {!stateIsLoding&&stateListStatus.map((data) => {
          return (
            <div key={data.id} className={style.map}>
              <h3>{data.title}</h3>
              <dl>
                <dt>상태</dt>
                <dd>{data.status === 'active'? '진행중':'중단됨'}</dd>
                <dt>광고 생성일</dt>
                <dd>{data.startDate.split('T')[0]}</dd>
                <dt>일 희망 예산</dt>
                <dd>{moneyCalc(data.budget)}</dd>
                <dt>광고 수익률</dt>
                <dd>{data.report.roas}%</dd>
                <dt>매출</dt>
                <dd>{moneyCalc(data.report.convValue)}</dd>
                <dt>광고 비용</dt>
                <dd>{moneyCalc(data.report.cost)}</dd>
              </dl>
              <button>수정하기</button>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default ManagementPage;