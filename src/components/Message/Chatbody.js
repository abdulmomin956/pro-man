import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Message.css";

const Chatbody = ({ socket, username, room }) => {
    const [currentMessage, setCurrentMessage]=useState('');
    const sendMessage=async()=>{
        if(currentMessage!==""){
            const messageData={
                room:room,
                author:username,
                message:currentMessage,
                time:new Date(Date.now()).getHours() + ":"+new Date(Date.now()).getMinutes() ,
            }
            await socket.emmit("send_message",messageData) ;

        }
       

    }
    // useEffect(() => {
    //     socket.on("receive_message", (data) => {
    //       setMessageList((list) => [...list, data]);
    //     });
    //   }, [socket]);
    return (
        <div  className='chat-body-wreper'>
                <div className="chat-header">
                    <p>Live Chat</p>
                </div>
                <div className='chat-body'>

                </div>
                <div className='chat-footer'>
                    <input onChange={(event)=>{setCurrentMessage(event.target.value)}} type="text" placeholder='Hey..'/>
                    <button onClick={sendMessage}>&#9658;</button>
                </div>
        </div>
    );
};

export default Chatbody;