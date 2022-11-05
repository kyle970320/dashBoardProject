import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './page/main/MainPage';
import ManagementPage from './page/management/ManagementPage';
import { RecoilRoot } from 'recoil'

const Router = () => {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<MainPage />} />
            <Route path='/management' element={<ManagementPage />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </>
  );
};

export default Router;