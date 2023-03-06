import React, { useState, useTransition } from 'react'
import './style.css'
import speaker from '../../Assets/images/speaker.svg'
import tiktik from '../../Assets/images/Tik-tik.svg'
import Button from '../../Button'
import BullInput from '../../BullInput'

const Listening = () => {
  const [whitelist, setWhitelist] = useState('')
  return (
    <div className="listening">
      <div className="listening_container">
        <div className="listening_image">
          <img src={speaker} alt="bullchord_speaker" />
        </div>
        <div className="listening_text">
          <h1>Bullchord to L2E</h1>
          <h4>
            Bullchord is a dedicated decentralized music NFT and metaverse
            ecosystem. We aim to change the sphere of music and make it what it
            ought to be. Blockchain technology is all about giving back to users
            and contributors. Everyone on the Bullchord has the right to all
            their assets, and we are promoting true privacy, ownership and
            security for all assets
          </h4>
          <div className="listening_input">
           <BullInput whitelist={whitelist} setWhitelist={setWhitelist}/>
            <div className="tik">
              <img src={tiktik} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listening
