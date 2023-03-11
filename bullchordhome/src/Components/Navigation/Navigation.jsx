import React, { useState } from 'react'
import logoText from '../../Assets/images/logoText.svg'
import bull from '../../Assets/images/bull.svg'
import './style.css'
import Button from '../../Button'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

const menuData = [
  { id: 1, label: 'Home', link: '/' },
  { id: 2, label: 'Artistes', link: '/artiste' },
  { id: 3, label: 'Tokenomics', link: '/tokenomics' },
  { id: 4, label: 'Docs', link: '/docs' },
  { id: 5, label: 'Team', link: '/team' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true)
  const handleClick = () => setIsOpen(!isOpen)
  const whitelist = () => {
    console.log('hello world')
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">
          <div className="logo-image">
            <img src={bull} alt="Bullchord" />
          </div>
        </div>
        <div className={isOpen ? 'nav_menu active' : 'nav_menu'}>
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
              buttonStyle={'navigation_button'}
            />
          </div>
        </div>
        <div className="mobile-nav" onClick={handleClick}>
          {isOpen ? <MenuIcon /> : <MenuOpenIcon />}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
