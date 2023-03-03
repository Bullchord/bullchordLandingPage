import React from 'react'
import Docs from '../Pages/Docs/Docs'
import Artistes from '../Pages/Artistes/Artistes'
import Team from '../Pages/Team/Team'
import Tokenomics from '../Pages/Token/Tokenomics'
import Home from '../Components/Home/Home'
import { Switch, Routes, Route } from 'react-router-dom'
import Navigation from '../Components/Navigation/Navigation'
import './style.css'

const Layouts = () => {
  return (
    <div>
      <Navigation />
      <div className="layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/artistes" element={<Artistes />} />
          <Route path="/artistes" element={<Team />} />
          <Route path="/artistes" element={<Tokenomics />} />
        </Routes>
      </div>
    </div>
  )
}

export default Layouts
