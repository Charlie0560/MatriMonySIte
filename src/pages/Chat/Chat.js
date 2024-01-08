import React, {useState} from 'react'
import "./Chat.css"
import Navbar2 from '../../components/NavBar2/Navbar2'
import Sidebar from '../../components/SideBar/Sidebar'
import Chats from '../../components/Chats/Chats'

export default function Chat() {
    const [selectedSender, setSelectedSender] = useState(null);
    const handleSelectSender = (sender) => {
        setSelectedSender(sender);
    };
  return (
    <div id='chat-wrapper'>
        <Navbar2/>
        <div className='chat-container'>
              <Sidebar onSelectSender={handleSelectSender} />
              <Chats selectedSender={selectedSender} />
        </div>
    </div>
  )
}
