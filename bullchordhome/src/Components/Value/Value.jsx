import React from 'react'
import './style.css'
import headphones from '../../Assets/images/headphones.svg'
import cd from '../../Assets/images/cd.svg'
import cdLogo from '../../Assets/images/cdLogo.svg'
import michael from '../../Assets/images/michael.svg'

const Value = () => {
  return (
    <div className="value">
      <div className="value_container">
        <div className="for_listener">
          <div className="for_listener_artiste">
            <div className="for_listener_img">
              <img src={headphones} alt="" />
            </div>
            <div className="for_listener_img">
              <img src={cd} alt="" />
            </div>
          </div>
          <div className="for_listener_artiste">
            <div className="for_artiste_img">
              <img src={michael} alt="" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Value
