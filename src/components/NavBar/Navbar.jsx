import React, {useState} from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Login from "../Login/Login"
import { useNavigate } from "react-router-dom";

function Navbar({ isRegistered }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  const navigate = useNavigate();
  const handleLogo = () =>{
    navigate("/")
  }
  return (
    <div className="navMain">
      <div className="logo" onClick={handleLogo}>Vadhuvar Melava</div>
      
        <div className="navSub">
            <div id="login" onClick={toggleLoginForm}>Login
              {showLoginForm && <Login onClose={toggleLoginForm} />}
          </div>
          
          
        </div>
      
    </div>
  );
}

export default Navbar;
