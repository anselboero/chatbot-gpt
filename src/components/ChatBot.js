import { useState } from 'react';
import "./ChatBot.css";
//AUTHOR PAOLO 

function MessageHistory(props) {
  const hideDots = {
    'display': props.isWaiting ? 'block' : 'none'
  }
  const chatMsgStyle = {
    'user' : {    
      'textAlign': 'right',
      'display': 'block',
      'background': 'lightsteelblue',
      'padding': '5px',
      'borderColor': 'blue',
      'borderRadius': '7px'
    },
    'assistant' : {
      'textAlign': 'left',
      'padding': '5px',
      'background': 'yellowgreen',
      'display': 'block',
      'margin': '5px',
      'borderRadius': '7px',
      'fontStyle': 'italic'
    },
    'system' :{
      'display': 'none'
    }
  }
  const listMessages = props.messages.map(msg => <li style={chatMsgStyle[msg.role]}>{msg.content}</li>);
  const chatBoxStyle = {
    height: '350px',
    overflowY: 'scroll'
  }


  return (
    <div style={chatBoxStyle}>
      <ul >
        {listMessages}
      </ul>
      <div style= {hideDots} className ='dot-flashing' ></div>
    </div>
  )
} 

function ChatBot() {
  // Declare a new state variable, which we'll call "count"
  const [isOpen, setIsOpen] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  // messages is the list of messages
  const [messages, setMessages] = useState([
    {
      'role' : 'system',
      'content' : 'Sei un operatore bancario che deve ricevere informazioni sugli strumenti bancari del cliente'
    },
    {
      'role' : 'assistant',
      'content' : 'Ciao, qual è il cvv della tua carta di credito?'
    }     
    ]);
  const [update, setUpdate] = useState("");

  const handleChange = (event) => {
    setUpdate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 👇 "message" stores input field value
    const requestMsg = {
      'role' : 'user',
      'content' : update
    }
    const new_messages = [...messages, requestMsg];
    const reqBody = JSON.stringify({'messages' : new_messages});
    //Update messages
    setMessages(new_messages);
    setUpdate("");
    setIsWaiting(true);
    fetch('https://chatbot-gpt-ovyckbu6ya-oa.a.run.app', {
      method: 'POST',
      body: reqBody,
      headers: {
        'Content-Type': 'application/json',
      }
    })
       .then((response) => response.json())
       .then((data) => {
          const new_messages_with_bot_answer = [...new_messages, data];
          setMessages(new_messages_with_bot_answer);
          setIsWaiting(false);
          // Handle data
       })
       .catch((err) => {
          console.log(err.message);
       });
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
    backgroundColor: 'lightyellow'
  }
  const chatHeaderStyle = {
    'textAlign': 'center',
    'background': 'salmon',
    'fontSize': 'xLarge',
    'fontWeight': 'bold'
  }
    const btnWaitingStyle = {
    'pointerEvents': isWaiting ? 'none' : 'auto'
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
        <h1 style = {chatHeaderStyle}>HELPDESK</h1>
        <MessageHistory messages={messages} isWaiting = {isWaiting} />
        <form onSubmit={handleSubmit}>
          <input id="textMessage" type="text" value={update}
            onChange={handleChange}
          ></input>
          <input style={btnWaitingStyle} type="submit" value="Send" />
        </form>
      </div>
     
    </>
  );
};

export default ChatBot