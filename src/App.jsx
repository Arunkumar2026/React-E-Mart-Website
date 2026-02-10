import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import Mobiles from './stores/components/Mobiles'
import MobilePage from './stores/pages/MobilePage'
import  ComputersPage from "./stores/pages/ComputersPage";
import  WatchPage from "./stores/pages/WatchPage";
import MenPage from "./stores/pages/MenPage";
import WomanPage from "./stores/pages/WomanPage";
import MobileSingle from "./singles/MobileSingle";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/computers' element={<ComputersPage/>} />
        <Route path='/watches' element={<WatchPage/>} />
        <Route path='/menswear' element={<MenPage/>} />
        <Route path='/womanwear' element={<WomanPage/>} />

        {/* dynamic routing */}
        <Route path='/mobile/:id' element={<MobileSingle/>}/>

      </Routes>
    </div>
  )
}

export default App