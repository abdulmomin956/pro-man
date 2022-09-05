import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Message.css";
import Conversation from './conversation/Conversation'
import Message from './message/Message'
import ChatOnline from "./chatOnline/ChatOnline";
import { Link, Outlet } from "react-router-dom";



const Chat = ({ conversations }) => {
  const [currentChat, setCurrentChat] = useState(null);
  const user = useSelector(state => state.user)
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const scrollRef = useRef();
  const socket = useRef();





  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      // console.log(users);
      // setOnlineUsers(
      //   user?.filter((f) => users.some((u) => u.userId === f))
      // );
      setOnlineUsers(
        users
      );
    });
  }, [user]);




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
    <Outlet context={[socket]} />
  </main>
  );
};


export default Chat;
