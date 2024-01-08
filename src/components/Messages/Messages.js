import React, { useState } from "react";
import "./Messages.css";
import { Message } from "../Message/Message";

export default function Messages({ selectedSender }) {
    const [newMessage, setNewMessage] = useState();
    const typingHandler = (e) => {
        setNewMessage(e.target.value);
    }
    const messages = [
        {
            sender: "Shravani Kulkarni",
            content: "This is a message",
            profilePic: "user.jpg",
        },
        {
            sender: "Shalmali Kulkarni",
            content: "This is a message",
            profilePic: "user.jpg",
        },
        {
            sender: "Shrvani Kulkarni",
            content: "This is a message",
            profilePic: "user.jpg",
        },
        {
            sender: "Shrvani Kulkarni",
            content: "This is a message",
            profilePic: "user.jpg",
        },
        {
            sender: "Shrvani Kulkarni",
            content: "This is a message",
            profilePic: "user.jpg",
        },
        {
            sender: "Shrvani Kulkarni",
            content: "This is a message",
            profilePic: "user.jpg",
        },
        {
            sender: "Shrvani Kulkarni",
            content: "This is a message",
            profilePic: "user.jpg",
        },
    ];
    return (
        <div>
            {selectedSender && (
                <div>
                    <div className="chat-messages">
                        {messages.map((message) => (
                            <Message key={message._id} message={message} />
                        ))}
                    </div>
                    <div className='input'>
                        <input value={newMessage} onChange={typingHandler} type='text' placeholder='Enter your message' />
                        <div className='send'>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
