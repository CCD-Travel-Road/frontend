import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import MapPage from './pages/MapPage'

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path={'/'} element={<MapPage />} />
      </Routes>
    </RecoilRoot>
  )
}

export default App
