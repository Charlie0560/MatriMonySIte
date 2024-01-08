import React from 'react';
import "./User.css"
import Navbar2 from "../../components/NavBar2/Navbar2.js"
import homeImage from "../../images/home.jpg";

export default function User() {
  return (
    <div className='user-wrapper'>
        <Navbar2/>
      <div className="main">
        <img className="homeImg" src={homeImage} />
      </div>
      <div id="textC">
        <p>Find the perfect match for you at Vadhuvar Melava</p>
        <form id="searchForm">
          <div id="looking-for">
            <label>Looking for:</label>
            <input id="bride" type="radio" value="Bride" />
            <span>Bride</span>
            <input id="groom" type="radio" value="Groom" />
            <span>Groom</span>
          </div>
          <div id="age">
            <label>Age between:</label>
            <input id="ageL" type="number" />
            <span>to</span>
            <input id="ageH" type="number" />
          </div>
          <div id="native-place">
            <label>Native Place:</label>
            <input id="place" type="text" />
          </div>
          <button id="find">Find Match</button>
        </form>
      </div>
    </div>
  )
}
