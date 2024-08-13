import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GlobalStyles } from './styles/GlobalStyles';
import MapPage from './pages/MapPage/MapPage';
import MainPage from './pages/MainPage/MainPage';
import ASetDate from './pages/CreateJourneyPage/ADateSelectPage';
import TypeSelect from './pages/CreateJourneyPage/BTypeSelectPage';
import ViewJourney from './pages/ViewJourneyPage/ViewJourney';

import Community from './pages/CommunityPage/Community'

import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/setDate" element={<ASetDate />} />
        <Route path="/view" element={<ViewJourney />} />
        <Route path="/community" element={<Community />} />
        <Route path="/setType" element={<TypeSelect />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;