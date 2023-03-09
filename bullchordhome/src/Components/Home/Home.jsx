import React from 'react'
import Caroussel from '../Carousel/Caroussel'
import Collaboration from '../Collaboration/Collaboration'
import HeroPage from '../Heropage/Hero'
import Listening from '../Listening/Listening'
import Staking from '../Staking/Staking'
import Value from '../Value/Value'
import NFTDes from './NFTDes'
import './style.css'

import artiste1 from '../../Assets/images/artiste1.svg'
import artiste2 from '../../Assets/images/artiste2.svg'
import artiste4 from '../../Assets/images/artiste4.svg'

const Home = () => {
  const images = [artiste1, artiste2, artiste4]

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
      <Caroussel images={images} />
      <Collaboration />
    </div>
  )
}

export default Home
