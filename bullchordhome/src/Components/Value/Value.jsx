import React, { useState, useRef } from 'react'
import './style.css'
import headphones from '../../Assets/images/headphones.svg'
import cd from '../../Assets/images/cd.svg'
import cdLogo from '../../Assets/images/cdLogo.svg'
import michael from '../../Assets/images/michael.svg'
import bnb from '../../Assets/images/bnb.svg'
import Button from '../../Button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import mj from '../../Assets/sounds/mj.wav'

const Value = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  const playing = () => {
    if (isPlaying) {
      setIsPlaying(false)
      audioRef.current.pause()
    } else {
      setIsPlaying(true)
      audioRef.current.play()
    }
  }
  return (
    <div className="value">
      <div className="value-container">
        <div className="grid-container">
          <div className="boxes">
            <div className=" box-1 for_listener_img">
              <div className="listener_text">
                <h2>For Listener</h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <img src={headphones} alt="" />
            </div>
            <div className="box-2 for_listener_img">
              <div className="listener_text">
                <h2>For Listener</h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <img src={cd} alt="" />
            </div>
          </div>
          <div className="box-3">
            <div className="watermark">
              <img src={cdLogo} alt="" />
            </div>
            <div className="player-card">
              {!isPlaying ? (
                //if playing is false, play the audio
                <PlayArrowIcon onClick={playing} className="play-img"/>
              ) : (
                //else pause the audio
                <PauseIcon onClick={playing} />
              )}
              <audio
                ref={audioRef}
                src={mj}
                onPause={() => playing}
                onEnded={playing}
                autoPlay={isPlaying}
              />
            </div>
            <div className="box-3-image">
              <img src={michael} alt="" />
            </div>
            <div className="box-3-text">
              <div className="box-3-name">
                <p>Omo logo</p>
                <small>Dami</small>
              </div>
              <div className="box-3-price">
                <p>Price</p>
                <span>
                  <img src={bnb} alt="BNB logo" />
                  300
                </span>
                {/* <div className="price-logo"></div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="overbox">
          <div className="overbox-container">
            <h1>Adding Greater Value To Every Genre Of Music.</h1>
            <p>
              Bullchord is a next-generation web3 music-based protocol that
              unites the assets and people of purpose for music, allowing them
              to benefit seamlessly together sustainably.
            </p>
            <Button
              buttonName={'Join Waitlist'}
              buttonStyle={'navigation_button'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Value
