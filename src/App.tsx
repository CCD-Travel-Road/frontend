import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MapPage from './pages/MapPage';
import MainPage from './pages/MainPage/MainPage';
import ASetDate from './pages/CreateJourneyPage/ASetDate';

import ViewJourney from './pages/ViewJourneyPage/ViewJourney';

import Community from './pages/CommunityPage/Community'

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/Map" element={<MapPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/setDate" element={<ASetDate />} />
        <Route path="/view" element={<ViewJourney />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;