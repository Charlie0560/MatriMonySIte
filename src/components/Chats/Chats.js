import React from 'react';
import "./Chats.css";
import Messages from '../Messages/Messages';

export default function Chats({ selectedSender }) {
    return (
        <div className='chat'>
            {selectedSender && (
                <div className='chatInfo'>
                    <img src={require(`../../images/${selectedSender.profilePic}`)} alt='' />
                    <span>{selectedSender.name}</span>
                </div>
            )}
            <Messages selectedSender={selectedSender}  />
        </div>
    );
}
