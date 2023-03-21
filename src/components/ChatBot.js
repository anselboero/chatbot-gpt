import { useState } from 'react';
//AUTHOR PAOLO 
function MessageHistory(props) {
  const listMessages = props.messages.map(msg => <li>{msg}</li>);
  const chatBoxStyle = {
    height: '350px',
    overflowY: 'scroll'
  }

  return (
    <div style={chatBoxStyle}>
      <ul>
        {listMessages}
      </ul>
    </div>
  )
}

function ChatBot() {
  // Declare a new state variable, which we'll call "count"
  const [isOpen, setIsOpen] = useState(0);
  // messages is the list of messages
  const [messages, setMessages] = useState([]);
  const [update, setUpdate] = useState("");

  const handleChange = (event) => {
    setUpdate(event.target.value);
  };

  const handleSubmit = (event) => {
    // 👇 "message" stores input field value
    const new_messages = [...messages, update];
    setMessages(new_messages);
    setUpdate("");
    event.preventDefault();
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
    height: '700px',
    width: '340px',
    position: 'fixed',
    zIndex: '9998',
    top: '40%',
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
        <MessageHistory messages={messages} />
        <form onSubmit={handleSubmit}>
          <input id="textMessage" type="text" value={update}
            onChange={handleChange}
          ></input>
          <input type="submit" value="send" />
        </form>
      </div>
     
    </>
  );
};

export default ChatBot