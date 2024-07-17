import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MapPage from './pages/MapPage';
import MainPage from './pages/MainPage/MainPage';
import ASetDate from './pages/CreateJourneyPage/ASetDate';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/Map" element={<MapPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/setDate" element={<ASetDate />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;