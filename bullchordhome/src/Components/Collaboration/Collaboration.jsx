import React from 'react'
import './style.css'
import bnb from '../../Assets/images/bnb.svg'
import apple from '../../Assets/images/apple.svg'
import google from '../../Assets/images/google.svg'
import mockUp from '../../Assets/images/mock-up.svg'

const Collaboration = () => {
  return (
    <div>
      <div className="collab-container">
        <h2>Collaboration and Partner</h2>
        <div className="collab-partners">
          <img src={bnb} alt="binance-logo" />
          <small>Binance</small>
          <hr className="hr" />
        </div>

        <div className="download-container">
          <div className="container-1">
            <h1>Download Bullchord App Now</h1>
            <p>
              Bullchord is a next-generation web3 music-based protocol that
              unites the assets and people of purpose for music, allowing them
              to benefit seamlessly together sustainably.
            </p>
            <div className="download-phone">
              <img src={apple} alt="" />
              <img src={google} alt="" />
            </div>
          </div>
          <div className="container-2">
            <img src={mockUp} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collaboration
