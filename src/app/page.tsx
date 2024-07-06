"use client"

import React, { useEffect, useState } from 'react';
import { socket }  from '@/socket';

export default function Home() {


  // const [messages, setMessages] = useState([]);
  // const [prevMessages, setPrevMessages] = useState([]);
  // const [messageInput, setMessageInput] = useState('');

  // useEffect(() => {
  //   // Event listener for receiving messages
  //   socket.on('chat-message.response', (data) => {
  //     setMessages((prevMessages) => [...prevMessages, data]);
  //   });

  //   // Clean up socket listener when component unmounts
  //   return () => {
  //     socket.off('chat-message.response');
  //   };
  // }, []);

  // const sendMessage = () => {
  //   if (messageInput.trim() !== '') {
  //     socket.emit('chat-message', { message: messageInput });
  //     setMessageInput('');
  //   }
  // };


  return (
  //   // bg-[#0F0F0F] text-white
  //  <div className="h-screen w-screen ">
  //   Hello
  //   <div>
  //     <h1>Chat Room</h1>
  //     <div>
  //       {messages.map((msg, index) => (
  //         <div key={index}>
  //           <strong>{msg.timestamp}:</strong> {msg.message}
  //         </div>
  //       ))}
  //     </div>
  //     <div>
  //       <input
  //         type="text"
  //         value={messageInput}
  //         onChange={(e) => setMessageInput(e.target.value)}
  //       />
  //       <button onClick={sendMessage}>Send</button>
  //     </div>
  //   </div>
  //  </div>
  <div>Home Page!</div>
  );
}
