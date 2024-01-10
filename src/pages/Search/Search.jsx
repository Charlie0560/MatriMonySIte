import React, { useState } from "react";
import "./Search.css";
import Navbar2 from "../../components/NavBar2/Navbar2";
import ProfileModal from "../ProfileModal/ProfileModal";

export default function Search() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [remainingProfiles, setRemainingProfiles] = useState(null);

  const handleVisitProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
  };
  const response = [
    
    {
      "First Name": "Shravani",
      "Middle Name": "Yogesh",
      "Last Name": "Kulkarni",
      Date: 31,
      Month: "May",
      Year: 2003,
      Profession: "Something",
      "Native Place": "Kolhapur",
      income: 400000,
      profilePic: "home3.jpg",
    },
    {
      "First Name": "Shravani",
      "Middle Name": "Yogesh",
      "Last Name": "Kulkarni",
      Date: 31,
      Month: "May",
      Year: 2003,
      Profession: "Something",
      "Native Place": "Kolhapur",
      income: 400000,
      profilePic: "user-2.jpg",
    },
    {
      "First Name": "Shravani",
      "Middle Name": "Yogesh",
      "Last Name": "Kulkarni",
      Date: 31,
      Month: "May",
      Year: 2003,
      Profession: "Something",
      "Native Place": "Kolhapur",
      income: 400000,
      profilePic: "user.jpg",
    },
    {
      "First Name": "Shrasljflsjdlvani",
      "Middle Name": "Yogesh",
      "Last Name": "Kulkarni",
      Date: 31,
      Month: "May",
      Year: 2003,
      Profession: "Something",
      "Native Place": "Kolhapur",
      income: 400000,
      profilePic: "user3.jpg",
    },
    {
      "First Name": "Shravani",
      "Middle Name": "Yogesh",
      "Last Name": "Kulkarni",
      Date: 31,
      Month: "May",
      Year: 2003,
      Profession: "Something",
      "Native Place": "Kolhapur",
      income: 400000,
      profilePic: "user-2.jpg",
    },
  ];
  return (
    <div className="search-wrapper">
      <Navbar2 />
      <div className="search-main">
        <div className="search-container">
          <p>Search your Match</p>
          <div className="search-form">
            <input
              className="searchIput"
              type="text"
              placeholder="Native Place"
            />
            <input
              className="searchIput"
              type="text"
              placeholder="Profession"
            />
            <input
              className="searchIput"
              type="number"
              placeholder="Age above"
            />
            <input
              className="searchIput"
              type="number"
              placeholder="Age below"
            />
            <input className="searchIput" type="text" placeholder="Religion" />
            <button id="find-match">Find Matches</button>
          </div>
        </div>
        <div className="profiles">
          {response.map((profile, index) => (
            <div className="profile" key={index}>
              <img
                className="user-image"
                src={require(`../../images/${profile.profilePic}`)}
                alt={`User ${index}`}
              />
              <div className="info-wrapper">
                <div className="info">
                  <div className="Name">
                    <span className="title">Name : </span>
                    <span id={`name-span-${index}`} className="profilename">
                      {`${profile["First Name"]} ${profile["Middle Name"]} ${profile["Last Name"]}`}
                    </span>
                  </div>
                  <div className="age-user">
                    <span className="title">Birth Date : </span>
                    <span
                      id={`birth-date-span-${index}`}
                    >{`${profile.Date} ${profile.Month} ${profile.Year}`}</span>
                  </div>
                  <div className="native-place">
                    <span className="title">Native Place : </span>
                    <span id={`native-place-span-${index}`}>
                      {profile["Native Place"]}
                    </span>
                  </div>
                  <div className="profession">
                    <span className="title">Profession : </span>
                    <span id={`profession-span-${index}`} className="profilename">
                      {profile.Profession}
                    </span>
                  </div>
                  <div className="annual-income">
                    <span className="title">Annual Income : </span>
                    <span id={`income-span-${index}`}>{profile.income}</span>
                  </div>
                </div>
                <div className="visit-btn">
                  <button onClick={() => handleVisitProfile(profile)}>
                    Visit Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProfile && <ProfileModal profile={selectedProfile} />}
      </div>
    </div>
  );
}
