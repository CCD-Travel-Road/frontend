import './App.css';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GlobalStyles } from './styles/GlobalStyles';
import MapPage from './pages/MapPage/MapPage';
import MainPage from './pages/MainPage/MainPage';
import ASetDate from './pages/CreateJourneyPage/ADateSelectPage';
import BSetType from './pages/CreateJourneyPage/BTypeSelectPage';
import ViewJourney from './pages/ViewJourneyPage/ViewJourney';

import Community from './pages/CommunityPage/Community';
import Detail from './pages/PlaceDetailPage/PlaceDetailPage';

// login
import LoginPage from './pages/LoginPage/LoginPage';
import UserLogin from './pages/LoginPage/UserLogin';
import UserRegister from './pages/LoginPage/UserRegister';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/userRegister" element={<UserRegister />} />


        <Route path="/map" element={<MapPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/setDate" element={<ASetDate />} />
        <Route path="/setType" element={<BSetType />} />
        <Route path="/view" element={<ViewJourney />} />
        <Route path="/community" element={<Community />} />
        <Route path="/details" element={<Detail />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;