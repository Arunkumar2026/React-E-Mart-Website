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
import BooksPage from './stores/pages/BooksPage'
import FurnitrePage from './stores/pages/FurnitrePage'
import KitchenPage from './stores/pages/KitchenPage'
import FridgePage from './stores/pages/FridgePage'
import SpeakersPage from './stores/pages/SpeakersPage'
import AcPage from './stores/pages/AcPage'
import TvPage from './stores/pages/TvPage'



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
        <Route path='/books' element={<BooksPage/>}/>
        <Route path='/furniture' element={<FurnitrePage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>} />
        <Route path='/fridge' element={<FridgePage/>} />
        <Route path='/speakers' element={<SpeakersPage/>} />
        <Route path='/ac' element={<AcPage/>} />
        <Route path='/tv' element={<TvPage/>} />
        {/* dynamic routing */}
        <Route path='/mobile/:id' element={<MobileSingle/>}/>

      </Routes>
    </div>
  )
}

export default App