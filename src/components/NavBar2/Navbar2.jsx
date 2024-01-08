import React, { useState } from "react";
import "./Navbar2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import avatarImage from "../../images/default-avatar-image.jpg";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar2() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleHome = () =>{
    navigate('/');
  }
  const handleSearch = () => {
    navigate('/search');
  }
  const handleMessage = () => {
    navigate('/chat');
  }
  const handleViewProfile = () => {
    navigate('/view-profile');
  }
  return (
    <div className="navbar">
      <div onClick={handleHome} className="logo">Vadhuvar Melava</div>
      <div className="navSide">
        <div onClick={handleHome} className="nav-home">Home</div>
        <div onClick={handleSearch} className="nav-search">Search</div>
        <div onClick={handleMessage} className="nav-msg">Messages</div>
        <div className="nav-contact">Contact Us</div>
          <img id="userImage" src={avatarImage} />
        <div id="lang" onClick={toggleDropdown}>
          <span>Language</span>
          <FontAwesomeIcon onClick={handleViewProfile} id="icon" icon={faCaretDown} />
          {showDropdown && (
            <div className="dropdown-content">
              <div id="english-div"><span id="english">English</span></div>
              <div id="marathi-div"><span id="marathi">Marathi</span></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
