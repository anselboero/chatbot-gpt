import { useState } from 'react';

function ChatBot() {
  // Declare a new state variable, which we'll call "count"
  const [isOpen, setIsOpen] = useState(0);
  // messages is the list of messages
  const [messages, setMessages] = useState([]);
  const [update, setUpdate] = useState("");

  const handleChange = (event) => {
    setUpdate(event.target.value);
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    const new_messages = [...messages, update];
    setMessages(new_messages);
    setUpdate("");
  };


  const circleStyle = {
    borderRadius: '50%',
    height: '25px',
    width: '25px',
    backgroundColor: isOpen? 'green': 'red',
    position: 'fixed',
    zIndex: '9999',
    top: '95%',
    left: '95%'
  };

  const chatStyle = {
    height: '340px',
    width: '340px',
    position: 'fixed',
    zIndex: '9998',
    top: '75%',
    left: '75%',
    display: isOpen? 'block': 'none',
    backgroundColor: 'white'
  }
  
  return (
    <>
      <div
        style={circleStyle}
        onClick={() => setIsOpen(1 - isOpen)}
        >
      </div>
      <div
        style={chatStyle}>
        <h1>Hello Chat</h1>
        <p id="sendMessage">{
          
        }</p>
        <input id="textMessage" type="text" value={update}
          onChange={handleChange}
        ></input>
        <button
          onClick={handleClick}
        >Send Msg</button>
      </div>
     
    </>
  );
};

export default ChatBot