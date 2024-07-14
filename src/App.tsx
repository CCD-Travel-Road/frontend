import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MapPage from './pages/MapPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/Map" element={<MapPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
