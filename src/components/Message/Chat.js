import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Message.css";
import Conversation from './conversation/Conversation'
import Message from './message/Message'
import ChatOnline from "./chatOnline/ChatOnline";
import { Link, Outlet } from "react-router-dom";
import { io } from "socket.io-client";



const Chat = () => {
  // const [currentChat, setCurrentChat] = useState(null);
  const user = useSelector(state => state.user)
  // const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  // const scrollRef = useRef();
  const socket = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const conversations = useSelector(state => state.chats)
  const currentChatId = useSelector(state => state.currentChatId)
  const [activeConversations, setActiveConversations] = useState([])

  useEffect(() => {
    socket.current = io("https://pro-man-socket.onrender.com/");
    // socket.current = io("http://localhost:8900/");
    socket.current.on("getMessage", (data) => {
      // console.log(data);
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        conversationId: data.conversationId,
        createdAt: Date.now(),
      });
    });
  }, []);



  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      // console.log(users);
      setOnlineUsers(
        users
      );
    });
  }, [user]);

  useEffect(() => {
    if (socket.current && user._id) {
      socket.current?.emit('activeConversation', { currentChatId, userId: user._id })
      socket.current.on("getActiveConversations", (conversations) => {
        // console.log(conversations);
        setActiveConversations(
          conversations
        );
      });
    }
  }, [currentChatId, socket, user._id])




  // console.log(onlineUsers);

  return (<main className='messenger w-full mt-1'>
    <div className='chatMenu'>
      <div className="chatMenuWrapper bg-white shadow">
        <input placeholder="Search for friends" className="chatMenuInput" />
        {conversations.map((c, i) => (
          <Link to={`/chat/${c?._id}`} key={i} >
            <Conversation conversation={c} currentUser={user} />
          </Link>
        ))}
      </div>
    </div>
    <Outlet context={[socket, arrivalMessage]} />
  </main>
  );
};


export default Chat;
