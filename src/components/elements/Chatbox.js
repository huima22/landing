import React, { useState } from 'react';
import Image from './Image';
function Chatbox() {

 const [chatboxOpen, setChatboxOpen] = useState(false);
  const onClick = () => setChatboxOpen(!chatboxOpen)
  return (
  <div className="fix-chatbox" onClick={onClick} >
   {chatboxOpen ?
   <Image className="fix-chatbot-open"
      src={require('../../assets/images/chatPicture.png')}/> : null}

  {!chatboxOpen ? <Image className="fix-chatbot"
      src={require('../../assets/images/chatbot.png')}/>  : null}

     </div>
  );
}

export default Chatbox;