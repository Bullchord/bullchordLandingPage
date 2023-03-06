import React from 'react'
import Collaboration from '../Collaboration/Collaboration'
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
      <NFTDes
        des={
          'Creating a NFT market place for artist and listener in Anyone upcoming artiste can do their stuff on-chain, making them more independent'
        }
      />
      <Value />
      <NFTDes
        des={
          " Bullchord's unique heterogeneous model allows Users to either be chain activators, artists, Asset owners or asset users. Every member Has a specific role to get them engaged to Contribute to the ecosystem dynamically."
        }
      />
      <Collaboration />
    </div>
  )
}

export default Home
