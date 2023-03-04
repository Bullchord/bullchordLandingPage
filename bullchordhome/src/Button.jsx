import React from 'react'
import './App.css'

const Button = ({ buttonName, buttonAction, buttonStyle }) => {
  return (
    <div>
      <button onClick={buttonAction} className={buttonStyle}>
        {buttonName}
      </button>
    </div>
  )
}

export default Button
