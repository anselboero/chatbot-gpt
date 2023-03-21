import { useState } from 'react';
//AUTHOR PAOLO 
function MessageHistory(props) {
  const chatMsgStyle = {
    'user' : {
      'textAlign': 'right'
    },
    'assistant' : {
      'textAlign': 'left'
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
    </div>
  )
}

function ChatBot() {
  // Declare a new state variable, which we'll call "count"
  const [isOpen, setIsOpen] = useState(0);
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
    fetch('https://chatbot-gpt-ovyckbu6ya-oa.a.run.app', {
      method: 'POST',
      mode:'no-cors',
      body: reqBody,
      headers: {
        'Content-Type': 'text/json',
      }
    })
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
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