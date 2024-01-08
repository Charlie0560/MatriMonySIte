import React from 'react'
import "./About.css"
import aboutImage from "../../images/about-page.jpg" 

export default function About() {
  return (
    <div className='about-wrapper'>
      <div className='about-div'>
        <div>
          <img id='about-img' src={aboutImage} />
        </div>
        <div className='about-content'>
          <p>About Vadhuvar Melava</p>
          <div className="dash"></div>
        </div>
        
      </div>
    </div>
  )
}
