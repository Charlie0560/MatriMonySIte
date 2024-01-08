import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../components/NavBar/Navbar";
import homeImage from "../../images/home3.jpg";
// import indian from "../../images/about.jpg"
// import About from "../../components/About/About";
import Navbar2 from "../../components/NavBar2/Navbar2";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isRegistered, setIsRegistered] = useState(true);
  const navigate = useNavigate();
  const handleFind = () =>{
    navigate("/profile-match");
  }
  return (
    <div id="home-wrapper">
      {isRegistered ? <Navbar2 /> : <Navbar/>}
      
        <div className="main">
          <img className="homeImg" src={homeImage} />
        </div>
        <div id="textC">
          <p>Find the Perfect Match for you at Vadhuvar Melava</p>
          <form id="searchForm">
            <div id="looking-for">
              <label>Looking for:</label>
            <select>
              <option>Bride</option>
              <option>Groom</option>
            </select>
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
            <button onClick={handleFind} id="find">Find Match</button>
          </form>
        </div>
      </div>
    
  );
}

export default Home;
