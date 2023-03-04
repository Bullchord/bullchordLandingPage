import React from 'react'
import './style.css'
import onchain from '../../Assets/images/onchain.png'
import govern from '../../Assets/images/govern.png'
import stake from '../../Assets/images/stake.png'
import dashedBorder from '../../Assets/images/dashedBorder.svg'

const Staking = () => {
  return (
    <div className="staking">
      <div className="staking_container">
        <div className="stake-header">
          <h2>Staking</h2>
          <div className="stake">
            <div className="stake_dash">
              <img src={dashedBorder} alt="" className="dash" />
              <h4>
                Gamification theory rewards token holders amongst chain
                activators and other users and encourages them to be honest and
                work diligently.
              </h4>
            </div>

            <img src={stake} alt="" />
          </div>
        </div>
        <div className="stake-header">
          <h2>Governance</h2>
          <div className="stake">
            <img src={govern} alt="" />
            <div className="stake_dash">
              <h4>
                Chord token holders have control over the DCR. All privileges,
                including managing exceptional events such as protocol upgrades,
                system improvement and fixes.
              </h4>
              <img src={dashedBorder} alt="" className="dash" />
            </div>
          </div>
        </div>
        <div className="stake-header">
          <h2>In-app & on-chain</h2>
          <div className="stake">
            <div className="stake_dash">
              <img src={dashedBorder} alt="" className="dash" />
              <h4>
                Trading, secondary assets for buying & selling of NFTs, a
                primary token for all in-app transactions, including the games
                and pools.
              </h4>
            </div>
            <img src={onchain} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staking
