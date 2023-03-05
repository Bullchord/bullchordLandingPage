import React from 'react'
import HeroPage from '../Heropage/Hero'
import Listening from '../Listening/Listening'
import Staking from '../Staking/Staking'
import Value from '../Value/Value'
import NFTDes from './NFTDes'
import './style.css'
const Home = () => {
  return (
    <div className="home">
      <HeroPage />
      <Listening />
      <Staking />
      <NFTDes />
      <Value />
    </div>
  )
}

export default Home
