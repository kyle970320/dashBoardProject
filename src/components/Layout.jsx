import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import style from '../style/layout.module.css'

const Layout = () => {
  return (
    <section className={style.main}>
      <SideBar />
      <div className={style.container}>
        <Header />
        <Outlet/>
      </div>
    </section>
  );
};

export default Layout;