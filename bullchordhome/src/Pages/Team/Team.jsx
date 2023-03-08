import React from 'react'
import './style.css'
import Header from '../Header'
import founder from '../../Assets/images/founder.svg'
import twitter from '../../Assets/images/s-twitter.svg'
import telegram from '../../Assets/images/s-telegram.svg'
import linkedin from '../../Assets/images/s-linkedin.svg'

const teamData = [
  { id: 1, founderName: 'Michael Balogun', pos: 'Co-founder', img: founder },
  { id: 2, founderName: 'Abusomwan Santos', pos: 'Co-founder', img: founder },
  { id: 3, founderName: 'Francis Oche', pos: 'Co-founder', img: founder },
]

const Team = () => {
  return (
    <div>
      <Header des="Meet the team" />
      <div className="team-section">
        {teamData.map((team) => {
          return (
            <div className="team-member" key={team.id}>
              <img src={team.img} alt="" />
              <h3>{team.founderName}</h3>
              <small>{team.pos}</small>
              <div className="team-socials">
                <img src={twitter} />
                <img src={telegram} />
                <img src={linkedin} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
