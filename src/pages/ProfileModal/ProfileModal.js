// ProfileModal.js

import React from 'react';
import './ProfileModal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import userImage from "../../images/user-2.jpg"

const ProfileModal = ({ profile, onClose }) => {
    return (
        <div className="profile-modal">
            <div className="modal-content">
                {/* Display profile information here */}
                {/* <p>Name: {`${profile["First Name"]} ${profile["Middle Name"]} ${profile["Last Name"]}`}</p>
                <p>Birth Date: {`${profile.Date} ${profile.Month} ${profile.Year}`}</p>
                <p>Native Place: {profile["Native Place"]}</p>
                <p>Profession: {profile.Profession}</p>
                <p>Annual Income: {profile.income}</p> */}
                <img id='profile-image' src={userImage}/>
                <div></div>
                <FontAwesomeIcon onClick={onClose} id='close-icon' size='2x' icon={faTimes} />
            </div>
        </div>
    );
}

export default ProfileModal;
