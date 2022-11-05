import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './page/main/MainPage';
import ManagementPage from './page/management/ManagementPage';

const Router = () => {
  return (
    <>
     <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/management' element={<ManagementPage/>}/>
      </Route>
      </Routes> 
    </>
  );
};

export default Router;