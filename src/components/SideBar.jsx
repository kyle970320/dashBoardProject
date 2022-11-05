import React from 'react';
import { Link } from 'react-router-dom';
import style from '../style/layout.module.css'


const SideBar = () => {
  return (
    <aside>
      LEVER
      <p>서비스</p>
      <select className={style.select}>
        <option value="up">매드업</option>
        <option value="add">서비스 추가하기</option>
      </select>
      <Link to='/'>대쉬보드</Link>
      <Link to='/management'>광고관리</Link>
    </aside>
  );
};

export default SideBar;