import React from 'react'
import Button from '../../../Button'
import blurLayer from '../../../Assets/images/layer-blur.svg'
import token0 from '../../../Assets/images/token0.svg'
import token1 from '../../../Assets/images/token1.svg'
import token2 from '../../../Assets/images/token2.svg'
import token3 from '../../../Assets/images/token3.svg'
import token4 from '../../../Assets/images/token4.svg'
import token5 from '../../../Assets/images/token5.svg'
import token6 from '../../../Assets/images/token6.svg'
import token7 from '../../../Assets/images/token7.svg'
import token8 from '../../../Assets/images/token8.svg'
import token9 from '../../../Assets/images/token9.svg'
import token11 from '../../../Assets/images/token11.svg'
import token12 from '../../../Assets/images/token12.svg'
import five from '../../../Assets/images/five.svg'
import four from '../../../Assets/images/four.svg'
import teamshare from '../../../Assets/images/teamshare.svg'
import totalSupply from '../../../Assets/images/total-supply.svg'
import power from '../../../Assets/images/power.svg'

const distribution = [
  { supply: '4 % for seed', img: token0 },
  { supply: '1.50% for Private', img: token1 },
  { supply: '1.25% for Public Sale', img: token2 },
  { supply: '14.58% for Liquidity CEX', img: token3 },
  { supply: '2.08% for Liquidity CEX unlocked', img: token4 },
  { supply: '4.00% for Liquidity DEX/Swap', img: token5 },
  { supply: '2.42% for Smart Dex', img: token6 },
  { supply: '1.50% for Private', img: token7 },
  { supply: '1.50% for Private', img: token8 },
  { supply: '1.50% for Private', img: token9 },
  { supply: '1.50% for Private', img: token11 },
  { supply: '1.50% for Private', img: token12 },
  { supply: '1.50% for Private', img: five },
  { supply: '1.50% for Private', img: four },
  { supply: '1.50% for Private', img: teamshare },
]

const Hero = () => {
  return (
    <div className="token-container">
      <div className="token-display">
        {/* <div className="layer-blur">
          <img src={blurLayer} alt="" />
        </div> */}
        <h2>Introducing $Bullchord Token</h2>
        <p>the reward for listening to music</p>
        <Button buttonName={'Buy Presale'} buttonStyle={'navigation_button'} />
      </div>

      <div className="token-des">
        <p>
          Bullchord is a powerful music platform for musicians to create an
          empowering experience for listeners. Every expert of the platform is
          designed from the ground up to support better music scaling
        </p>
      </div>

      <div className="token-distro">
        <h2>TOKENOMICS</h2>
        <p>Token Distribution</p>
        <div className="distro">
          <div className="distro-dits-main">
            {distribution.map((dist) => {
              return (
                <div className="distro-dits">
                  <img src={dist.img} alt="" />
                  <p>{dist.supply}</p>
                </div>
              )
            })}
          </div>
          <div className="total-supply">
            <img src={totalSupply} alt="" />
          </div>
        </div>
      </div>

      <div className="power">
        <div className="power-text">
          <p>
            Bullchord is a powerful music platform for musicians to create an
            empowering experience for listeners. Every expert of the platform is
            designed from the ground up to support better music scalin
          </p>
        </div>
        <div className="power-img">
          <img src={power} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
