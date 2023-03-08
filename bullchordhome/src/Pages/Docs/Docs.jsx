import React from 'react'
import './style.css'
import topD from '../../Assets/images/topdesign.svg'
import bottomD from '../../Assets/images/bottomdesign.svg'
import qRule from '../../Assets/images/quarterrule.svg'
import quarters1 from '../../Assets/images/quarter1.svg'
import quarters2 from '../../Assets/images/quarter2.svg'
import quarters3 from '../../Assets/images/quarter3.svg'
import Header from '../Header'

const Docs = () => {
  return (
    <div className="hero-main">
      <Header des="Read our full long-term roadmap"/>

      <div className="quarters-a">
        <h2>Q1 -2023</h2>
        <div className="quarters-timeline">
          <img src={qRule} alt="quarters rule" />
          <div className="timeline-text">
            <p>Bullchord Website</p>
            <p>Whitepaper Publishment</p>
            <p>Launch Social Media </p>
          </div>
        </div>
      </div>
      <div className="main-designs">
        <img src={quarters1} alt="" />
      </div>
      <div className="quarters-2">
        <h2>Q2 -2023</h2>
        <div className="quarters-timeline">
          <div className="timeline-text">
            <p>Bullchord Website</p>
            <p>Whitepaper Publishment</p>
            <p>Launch Social Media </p>
          </div>
          <img src={qRule} alt="quarters rule" />
        </div>
      </div>

      <div className="main-designs-2">
        <img src={quarters2} alt="" />
      </div>

      <div className="quarters-c">
        <h2>Q3 -2023</h2>
        <div className="quarters-timeline">
          <img src={qRule} alt="quarters rule" />
          <div className="timeline-text">
            <p>Bullchord Website</p>
            <p>Whitepaper Publishment</p>
            <p>Launch Social Media </p>
          </div>
        </div>
      </div>

      <div className="main-designs-3">
        <img src={quarters3} alt="" />
      </div>

      <div className="quarters-d">
        <h2>Q4 -2023</h2>
        <div className="quarters-timeline">
          <div className="timeline-text">
            <p>Bullchord Website</p>
            <p>Whitepaper Publishment</p>
            <p>Launch Social Media </p>
          </div>
          <img src={qRule} alt="quarters rule" />
        </div>
      </div>
    </div>
  )
}

export default Docs
