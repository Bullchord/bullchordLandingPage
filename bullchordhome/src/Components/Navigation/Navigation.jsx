import React from 'react'
import logoText from '../../Assets/images/logoText.svg'
import logo from '../../Assets/images/logo.svg'
import './style.css'
import Button from '../../Button'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const whitelist = () => {
    console.log('hello world')
  }
  const menuData = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'Artistes', link: '/artiste' },
    { id: 3, label: 'Tokenomics', link: '/tokenomics' },
    { id: 4, label: 'Docs', link: '/docs' },
    { id: 4, label: 'Team', link: '/team' },
  ]
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <div className="logo_image">
            <img src={logo} alt="Bullchord" />
          </div>
          <div className="logo_text">
            <img src={logoText} alt="Bullchord" />
          </div>
        </div>

        <div className="nav_menu">
          <div className="nav_menu_items">
            {menuData.map((menu) => {
              return (
                <Link exact to={menu.link} activeClassName="activelink">
                  {menu.label}
                </Link>
              )
            })}
          </div>
          <div className="nav_menu_button">
            <Button
              buttonName={'Join whitelist'}
              buttonAction={whitelist}
              buttonStyle={"navigation_button"}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
