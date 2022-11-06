import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Loading from '../../components/Loading';
import { moneyCalc } from '../../hooks/moneyCalc';
import useReduceStatus from '../../hooks/useReduceStatus';
import listData from '../../store/add-list-data-set.json'
import style from '../../style/management.module.css'
import ManagementUpdate from './ManagementUpdate'


const ManagementPage = () => {
  const [stateView, setView] = useState(false);
  const [stateID, setID] = useState();
  const [stateIsLoding, stateListStatus, dispatch, setListStatus] = useReduceStatus(listData.ads);
  const selcetVal =useRef();
  useEffect(()=>{
    dispatch(window.sessionStorage.getItem('managementStatus'))
  },[])
  return (
    <>
      <select className={style.status} ref={selcetVal} onChange={e=>(dispatch(e.target.value))}>
        <option value="all">전체광고</option>
        <option value="active">진행중</option>
        <option value="ended">중단됨</option>
      </select>
      <div className={style.list}>
        {stateIsLoding&&<Loading/>}
        {!stateIsLoding&&stateListStatus.map((data) => {
          return ( 
            <div key={data.id} className={style.map}>
              <h3>{data.adType=='web'?'웹광고':'앱광고'} {data.title}</h3>
              <dl>
                <dt>상태</dt>
                <dd>{data.status === 'active'? '진행중':'중단됨'}</dd>
                <dt>광고 생성일</dt>
                <dd>{data.startDate.split('T')[0]}</dd>
                <dt>일 희망 예산</dt>
                <dd>{moneyCalc(data.budget)}원</dd>
                <dt>광고 수익률</dt>
                <dd>{data.report. roas}%</dd>
                <dt>매출</dt>
                <dd>{moneyCalc(data.report.convValue)}원</dd>
                <dt>광고 비용</dt>
                <dd>{moneyCalc(data.report.cost)}원</dd>
              </dl>
              <button 
              className = {style.updateBtn}
              onClick={()=>{
                setView(prev=>!prev)
                setID(data.id)
              }}>수정하기</button>
            </div>
          )
        })}
        {stateView&&<ManagementUpdate 
        setView={setView}
        stateID={stateID}
        listData={listData}
        />}
      </div>
    </>
  );
};

export default ManagementPage;