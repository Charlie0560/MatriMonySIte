import React, { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ onSelectSender }) {
  const [selectedSender, setSelectedSender] = useState(null);
  const [messageDown, setMessageDown] = useState(false);
  const [interestsDown, setInterestsDown] = useState(false);

  const handleMessageDiv = () => {
    setMessageDown(!messageDown);
  };
  const handleInterestsDiv = () => {
    setInterestsDown(!interestsDown);
  };
  const [display , setDisplay] = useState(true);
  const handleSelectSender = (sender) => {
    onSelectSender(sender);
    setSelectedSender(sender);
    setDisplay(false);
  };
  const messages = [
    {
      name: "Shravani Kulkarni",
      message: "Hello how are you?",
      profilePic: "user-2.jpg",
      latestMessage: "Hi, how are you?",
    },
    {
      name: "Shalmali Kulkarni",
      message: "Hello how are you?",
      profilePic: "user-image.jpg",
      latestMessage: "Hello how are you?",
    },
    {
      name: "Shravani Kulkarni",
      message: "Hello how are you?",
      profilePic: "user.jpg",
      latestMessage: "Hello how are you?",
    },
    {
      name: "Shravani Kulkarni",
      message: "Hello how are you?",
      profilePic: "user3.jpg",
      latestMessage: "Hello how are you?",
    },
  ];
  const yourInterests = [
    {
      name: "Shravani Kulkarni",
      profilePic: "user3.jpg",
    },
    {
      name: "Shravani Kulkarni",
      profilePic: "user-2.jpg",
    },
    {
      name: "Shravani Kulkarni",
      profilePic: "user-image.jpg",
    },
    {
      name: "Shravani Kulkarni",
      profilePic: "user-image.jpg",
    },
    {
      name: "Shravani Kulkarni",
      profilePic: "user-image.jpg",
    },
    {
      name: "Shravani Kulkarni",
      profilePic: "user-image.jpg",
    },
  ];

  return (
    display &&<div className="sidebar">
      <div className="messages">
        <div className="your-matches" onClick={handleMessageDiv}>
          <span>Your Messages</span>
          <FontAwesomeIcon
            className="chat-icon"
            icon={messageDown ? faAngleUp : faChevronDown}
          />
        </div>
        {messageDown && (
          <div className="messages-content">
            {messages.map((message, index) => (
              <div
                key={index}
                className="userChat"
                onClick={() => handleSelectSender(message)}
              >
                <img
                  className="profile-image-chat"
                  src={require(`../../images/${message.profilePic}`)}
                  alt=""
                />
                <div className="userChatInfo">
                  <span>{message.name}</span>
                  <br />
                  {message.latestMessage ? (
                    <span id="latest-message">{message.latestMessage}</span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="messages">
        <div className="your-matches" onClick={handleInterestsDiv}>
          <span>Your Interests</span>
          <FontAwesomeIcon
            className="chat-icon"
            icon={interestsDown ? faAngleUp : faChevronDown}
          />
        </div>
        {interestsDown && (
          <div className="interests-content">
            {yourInterests.map((interest, index) => (
              <div
                key={index}
                className="userChat"
                onClick={() => handleSelectSender(interest)}
              >
                <img
                  className="profile-image-chat"
                  src={require(`../../images/${interest.profilePic}`)}
                  alt=""
                />
                <div className="userChatInfo">
                  <span>{interest.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
