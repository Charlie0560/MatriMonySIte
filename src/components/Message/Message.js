import React from 'react';
import "./Message.css"

export const Message = ({ message }) => {
    const isCurrentUserMessage = true;
    return (
        <div className={`message ${isCurrentUserMessage ? 'owner' : ''}`}>
            <div className='messageInfo'>
                <img src={require(`../../images/${message.profilePic}`)} alt='' />
                <span>just now</span>
            </div>
            <div className='messageContent'>
                <p>{message.content}</p>
            </div>
        </div>
    )
}
