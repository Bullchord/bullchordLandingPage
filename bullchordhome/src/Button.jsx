import React from 'react'
import './App.css'

const Button = ({ buttonName, whitelist }) => {
  return (
    <div>
      <button onClick={whitelist} className="button">
        {buttonName}
      </button>
    </div>
  )
}

export default Button
