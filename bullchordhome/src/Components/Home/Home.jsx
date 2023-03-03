import React from 'react'
import Button from '../../Button'
import Navigation from '../Navigation/Navigation'
import './style.css'

const Home = () => {
  return (
    <div>
      <div className="home_container">
        <div className="home-text">
          <h1>Web 3 Music Zone For Unlimited Reward.</h1>
          <h4>
            Bullchord allows any type of music to be converted to a digital
            asset (NFT) and be usable between the primary blockchain and other
            blockchains.
          </h4>
          <Button buttonName={'buy presale'} />
        </div>
        <div className="home-image"></div>
      </div>
    </div>
  )
}

export default Home
