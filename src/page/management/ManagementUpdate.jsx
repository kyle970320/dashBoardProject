import React from 'react';
import { useRef } from 'react';
import style from '../../style/management.module.css'

const ManagementUpdate = (props) => {
  const {setView, stateID, listData} = props;
  const adTitle = useRef();
  const adStatus = useRef();
  const adBudget = useRef();
  

  const updateListData = ()=>{
      listData.ads.map((el)=>{
      if(el.id==stateID){
        el.title = adTitle.current.value;
        el.status = adStatus.current.value;
        el.budget =  adBudget.current.value;
      }
    })
  }

  const handleUpdate = ()=>{
    setView(false)
    updateListData()
  }
  const handleCancelUpdate = ()=>{
    setView(false)
  }
  return (
    <div className={style.update}>
      <dl>
        <dt>광고이름</dt>
        <dd><input type="text" ref={adTitle}/></dd>
        <dt>상태</dt>
        <dd>
          <select ref={adStatus}>
            <option value="active">진행중</option>
            <option value="ended">중단됨</option>
          </select>
          </dd>
        <dt>일 희망 예산</dt>
        <dd><input type="text" ref={adBudget}/></dd>
      </dl>
      <button onClick={handleUpdate}>수정하기</button>
      <button onClick={handleCancelUpdate}>수정취소하기</button>
    </div>
  );
};

export default ManagementUpdate;