import React from 'react'
import './style.css'

const Header = ({des}) => {
  return (
    <>
      <div className="hero-container">
        <h2>{des}</h2>
      </div>
    </>
  )
}

export default Header
