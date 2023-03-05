import React from 'react'
import Button from '../../Button'
import Navigation from '../Navigation/Navigation'
import heroImage from '../../Assets/images/heroImage.svg'
import blurr from '../../Assets/images/blurr.svg'
import './style.css'

const HeroPage = () => {
  return (
    <div className="hero_container">
      <div className="home_container">
        <div className="home-text">
          <h1>Web 3 Music Zone For Unlimited Reward.</h1>
          <h4>
            Bullchord allows any type of music to be converted to a digital
            asset (NFT) and be usable between the primary blockchain and other
            blockchains.
          </h4>
          <div className="home_button">
            <Button buttonName={'buy presale'} buttonStyle={'hero_button '} />
          </div>
        </div>
        <div className="home-image">
          <img src={blurr} alt="bullchord" />
        </div>
      </div>
    </div>
  )
}

export default HeroPage
