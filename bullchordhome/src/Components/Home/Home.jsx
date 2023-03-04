import React from 'react'
import HeroPage from '../Heropage/Hero'
import Listening from '../Listening/Listening'
import Staking from '../Staking/Staking'
import NFTDes from './NFTDes'
import './style.css'
const Home = () => {
  return (
    <div className="home">
      <HeroPage />
      <Listening />
      <Staking />
      <NFTDes />
    </div>
  )
}

export default Home
