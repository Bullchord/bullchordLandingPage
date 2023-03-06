import React from 'react'
import Button from './Button'
const BullInput = ({ setWhitelist, whitelist, placeholder }) => {
  return (
    <div className="input">
      <div className="input">
        <input
          type="email"
          value={whitelist}
          placeholder="Enter you email"
          onChange={(event) => setWhitelist(event.target.value)}
        />
        <Button
          buttonName={'Join Whitelist'}
          buttonStyle={'listening-button'}
        />
      </div>
    </div>
  )
}

export default BullInput
