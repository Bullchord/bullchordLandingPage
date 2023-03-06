import React from 'react'
import './style.css'
import bull from '../../Assets/images/bull.svg'
import BullInput from '../../BullInput'
import telegram from "../../Assets/images/telegram.svg"
import medium from "../../Assets/images/medium.svg"
import youtube from "../../Assets/images/youtube.svg"
import twitter from "../../Assets/images/twitter.svg"
import discord from "../../Assets/images/discord.svg"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={bull} alt="" />
            <p>
              Bullchord is a dedicated decentralized music NFT and metaverse
              ecosystem. We aim to change the sphere of music.
            </p>
            <div className="footer-input">
              <h2>Stay up to date</h2>
              <BullInput />
            </div>
          </div>
          <div className="footer-menu">
            <div className="footer-menu-top">
              <div className="right-menu">
                <h3>MENU</h3>
                <p>TOKEN</p>
                <p>ROADMAP</p>
                <p>ARTISTE</p>
              </div>
              <div className="left-menu">
                <h3>COMPANY</h3>
                <p>WHITEPAPER</p>
                <p>TEAM</p>
              </div>
            </div>
            <div className="footer-menu-down">
                <h2>OUR COMMUNITY</h2>
                <div className="social-networks">
                    <img src={telegram} alt="" />
                    <img src={medium} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                    <img src={discord} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
