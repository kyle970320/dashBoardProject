import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import side from '../style/sidebar.module.css';


const SideBar = () => {
  const location = useLocation()
  return (
    <aside className={side.side}>
      <p>
        LEVER
      </p>
      <p>서비스</p>
      <select className={side.select}>
        <option value="up">매드업</option>
        <option value="add">서비스 추가하기</option>
      </select>
      <Link to='/' className={location.pathname == '/'? side.link : ''}>대쉬보드</Link>
      <Link to='/management' className={location.pathname !== '/' ? side.link:''}>광고관리</Link>
    </aside>
  );
};

export default SideBar;